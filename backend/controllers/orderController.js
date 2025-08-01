import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import productModel from "../models/productModel.js";
import Stripe from "stripe";
import Razorpay from "razorpay";

// global variables
const currency = 'MYR'
const deliveryCharge = 10; // Example delivery charge, can be dynamic


// gatewat initialize
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// const razorpay = new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID,
//     key_secret: process.env.RAZORPAY_KEY_SECRET
// });

// Placing orders using COD Method
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        // Get Malaysia time (UTC+8)
        const malaysiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Kuala_Lumpur"});
        const malaysiaTimestamp = new Date(malaysiaTime).getTime();

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: malaysiaTimestamp
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, { cartData: {} });

        res.json({ success: true, message: "Order Placed" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Placing orders using Stripe Method
const placeOrderStripe = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;
        const {origin} = req.headers;

        // Get Malaysia time (UTC+8)
        const malaysiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Kuala_Lumpur"});
        const malaysiaTimestamp = new Date(malaysiaTime).getTime();

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "Stripe",
            payment: false,
            date: malaysiaTimestamp
        }
        const newOrder = new orderModel(orderData);
        await newOrder.save();

        const line_items = items.map(item => ({
            price_data: {
                currency: currency,
                product_data: {
                    name: item.name,
                },
                unit_amount: item.price * 100, // Convert to cents
            },
            quantity: item.quantity,
        }));

        line_items.push({
            price_data: {
                currency: currency,
                product_data: {
                    name: "Delivery Charge",
                },
                unit_amount: deliveryCharge * 100, // Shipping cost in cents
            },
            quantity: 1,
        });

        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode: 'payment',
        });

        res.json({ success: true, session_url: session.url });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Verify Stripe Payment
const verifyStripePayment = async (req, res) => {
    try {
        const { orderId, success, userId } = req.body;
        try {
            if (success === "true") {
                await orderModel.findByIdAndUpdate(orderId, { payment: true });
                await userModel.findByIdAndUpdate(userId, { cartData: {} });
                res.json({ success: true, message: "Payment Verified" });
            } else {
                await orderModel.findByIdAndDelete(orderId);
                res.json({ success: false, message: "Payment not completed" });
            }
        } catch (error) {
            console.log(error);
            res.json({ success: false, message: error.message });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Placing orders using Razorpay Method
const placeOrderRazorpay = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        // Get Malaysia time (UTC+8)
        const malaysiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Kuala_Lumpur"});
        const malaysiaTimestamp = new Date(malaysiaTime).getTime();

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "Razorpay",
            payment: false,
            date: malaysiaTimestamp
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        const options = {
            amount: amount * 100, // Convert to paise
            currency: currency.toUpperCase(),
            receipt: newOrder._id.toString(),
        };

        const order = await razorpay.orders.create(options);
        res.json({ success: true, order });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

const verifyRazorpayPayment = async (req, res) => {
    try {
        const {userId, razorpay_order_id} = req.body;
        const orderInfo = await razorpay.orders.fetch(razorpay_order_id);

        if (orderInfo.status == 'paid'){
            await orderModel.findByIdAndUpdate(orderInfo.receipt, { payment: true });
            await userModel.findByIdAndUpdate(userId, { cartData: {} });
            res.json({ success: true, message: "Payment Verified" });
        }
        else {
            res.json({ success: false, message: "Payment not completed" });
        }
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// All Orders data for Admin Panel
const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        
        // Populate product details for each order
        const ordersWithProductDetails = await Promise.all(
            orders.map(async (order) => {
                const itemsWithDetails = await Promise.all(
                    order.items.map(async (item) => {
                        try {
                            const product = await productModel.findById(item._id);
                            return {
                                ...item,
                                name: product?.name || 'Product not found',
                                image: product?.image || [],
                                price: product?.price || 0
                            };
                        } catch (error) {
                            console.log(`Error fetching product ${item._id}:`, error);
                            return {
                                ...item,
                                name: 'Product not found',
                                image: [],
                                price: 0
                            };
                        }
                    })
                );
                
                return {
                    ...order.toObject(),
                    items: itemsWithDetails
                };
            })
        );
        
        res.json({ success: true, orders: ordersWithProductDetails });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// User Order Data For Frontend
const userOrders = async (req, res) => {
    try {
        const { userId } = req.body;
        const orders = await orderModel.find({ userId });
        
        // Populate product details for each order
        const ordersWithProductDetails = await Promise.all(
            orders.map(async (order) => {
                const itemsWithDetails = await Promise.all(
                    order.items.map(async (item) => {
                        try {
                            const product = await productModel.findById(item._id);
                            return {
                                ...item,
                                name: product?.name || 'Product not found',
                                image: product?.image || [],
                                price: product?.price || 0
                            };
                        } catch (error) {
                            console.log(`Error fetching product ${item._id}:`, error);
                            return {
                                ...item,
                                name: 'Product not found',
                                image: [],
                                price: 0
                            };
                        }
                    })
                );
                
                return {
                    ...order.toObject(),
                    items: itemsWithDetails
                };
            })
        );
        
        res.json({ success: true, orders: ordersWithProductDetails });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// update order status from Admin Panel
const updateStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body;
        await orderModel.findByIdAndUpdate(orderId, { status });
        res.json({ success: true, message: 'Status Updated' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export {
    placeOrder,
    placeOrderStripe,
    placeOrderRazorpay,
    allOrders,
    userOrders,
    updateStatus,
    verifyStripePayment,
    verifyRazorpayPayment
};

