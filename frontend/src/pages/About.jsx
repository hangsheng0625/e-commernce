import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import Newsletter from "../components/Newsletter";
import {
  Sparkles,
  Star,
  Handshake,
  Trophy,
  Rocket,
  Gift,
  Globe,
  Award,
} from "lucide-react";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-white via-grey-50 to-grey-100 min-h-screen w-full animate-fadeInUp">
      {/* Hero Section */}
      <div className="relative py-16 px-4 sm:px-8 lg:px-16 animate-slideInLeft">
        <div className="text-center mb-12">
          <Title text1={"ABOUT"} text2={"US"}></Title>
          <p className="text-lg text-grey-700 max-w-2xl mx-auto leading-relaxed text-body-primary">
            Discover the story behind The Trendy Club - where fashion meets
            passion, and style becomes a way of life.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto my-16 flex flex-col lg:flex-row gap-12 items-center animate-fadeInUp"
             style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
          <div className="lg:w-1/2 animate-slideInLeft"
               style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
            <img
              className="w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              src={assets.about_img}
              alt="About The Trendy Club"
            />
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center gap-8 text-grey-800 animate-fadeInUp"
               style={{animationDelay: '0.6s', animationFillMode: 'both'}}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Founded with a vision to democratize fashion,{" "}
                <strong>The Trendy Club</strong> emerged from a simple belief:
                everyone deserves to feel confident and stylish, regardless of
                their budget or background. What started as a small boutique has
                evolved into a global fashion destination that celebrates
                individuality and self-expression.
              </p>

              <p className="text-lg leading-relaxed">
                Our curated collections blend contemporary trends with timeless
                classics, ensuring that every piece in your wardrobe tells a
                story. We partner with emerging designers and established brands
                alike, creating a diverse ecosystem where creativity thrives and
                fashion boundaries are constantly redefined.
              </p>

              <div className="bg-grey-100 p-6 rounded-xl border-l-4 border-grey-600">
                <h3 className="text-xl font-bold text-grey-800 mb-3">
                  Our Mission
                </h3>
                <p className="text-grey-700 leading-relaxed">
                  To empower individuals through fashion by providing
                  accessible, high-quality clothing that inspires confidence and
                  celebrates personal style. We believe that fashion is not just
                  about what you wear, but how it makes you feel and the story
                  it helps you tell.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-6xl mx-auto mt-20">
          <div className="text-center mb-16">
            <Title text1={"OUR"} text2={"VALUES"}></Title>
            <p className="text-grey-700 max-w-3xl mx-auto text-lg">
              The principles that guide every decision we make and every
              relationship we build
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20 animate-fadeInUp"
               style={{animationDelay: '0.8s', animationFillMode: 'both'}}>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-grey-200 hover:border-grey-300 animate-fadeInUp"
                 style={{animationDelay: '1.0s', animationFillMode: 'both'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-grey-600 to-grey-800 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Sparkles className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-grey-800 mb-4 text-center">
                Quality Excellence
              </h3>
              <p className="text-grey-700 leading-relaxed text-center">
                We meticulously source materials and partner with manufacturers
                who share our commitment to craftsmanship. Every stitch, every
                fabric choice, and every design detail reflects our dedication
                to delivering products that exceed expectations and stand the
                test of time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-grey-200 hover:border-grey-300 animate-fadeInUp"
                 style={{animationDelay: '1.2s', animationFillMode: 'both'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-grey-600 to-grey-800 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Star className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-grey-800 mb-4 text-center">
                Customer-Centric Approach
              </h3>
              <p className="text-grey-700 leading-relaxed text-center">
                Your satisfaction drives everything we do. From our intuitive
                shopping experience to our responsive customer service, we've
                designed every touchpoint to make your fashion journey seamless,
                enjoyable, and personally meaningful.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-grey-200 hover:border-grey-300 animate-fadeInUp"
                 style={{animationDelay: '1.4s', animationFillMode: 'both'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-grey-600 to-grey-800 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Handshake className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-grey-800 mb-4 text-center">
                Exceptional Service
              </h3>
              <p className="text-grey-700 leading-relaxed text-center">
                Our dedicated team goes beyond transactions to build
                relationships. We're here to help you discover your style, solve
                any challenges, and ensure that every interaction with The
                Trendy Club leaves you feeling valued and inspired.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Title text1={"WHY"} text2={"CHOOSE US"}></Title>
            <p className="text-grey-700 max-w-3xl mx-auto text-lg">
              Discover what sets us apart in the world of fashion and why
              thousands of customers trust us with their style journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-grey-100 to-grey-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-grey-600 rounded-full flex items-center justify-center mr-4">
                  <Trophy className="text-white w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-grey-800">
                  Premium Quality
                </h3>
              </div>
              <p className="text-grey-700 leading-relaxed">
                Every garment undergoes rigorous quality control. We use premium
                fabrics, ensure perfect fits, and maintain the highest standards
                of craftsmanship to deliver clothing that looks great and lasts
                longer.
              </p>
            </div>

            <div className="bg-gradient-to-br from-grey-100 to-grey-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-grey-600 rounded-full flex items-center justify-center mr-4">
                  <Rocket className="text-white w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-grey-800">
                  Trend-Forward Styles
                </h3>
              </div>
              <p className="text-grey-700 leading-relaxed">
                Stay ahead of the fashion curve with our carefully curated
                collections. Our design team constantly monitors global trends
                and translates them into accessible, wearable pieces for the
                modern wardrobe.
              </p>
            </div>

            <div className="bg-gradient-to-br from-grey-100 to-grey-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-grey-600 rounded-full flex items-center justify-center mr-4">
                  <Gift className="text-white w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-grey-800">
                  Personalized Experience
                </h3>
              </div>
              <p className="text-grey-700 leading-relaxed">
                From size recommendations to style suggestions, we use
                technology and human expertise to create a shopping experience
                that feels tailored specifically to your preferences and
                lifestyle.
              </p>
            </div>

            <div className="bg-gradient-to-br from-grey-100 to-grey-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-grey-600 rounded-full flex items-center justify-center mr-4">
                  <Globe className="text-white w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-grey-800">
                  Global Accessibility
                </h3>
              </div>
              <p className="text-grey-700 leading-relaxed">
                Fashion knows no boundaries. With worldwide shipping, multiple
                payment options, and localized customer service, we make it easy
                for fashion enthusiasts everywhere to access our collections.
              </p>
            </div>

            <div className="bg-gradient-to-br from-grey-100 to-grey-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-grey-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">♻️</span>
                </div>
                <h3 className="text-lg font-bold text-grey-800">
                  Sustainable Practices
                </h3>
              </div>
              <p className="text-grey-700 leading-relaxed">
                We're committed to responsible fashion. From eco-friendly
                packaging to ethical sourcing practices, we continuously work to
                minimize our environmental impact while maximizing style.
              </p>
            </div>

            <div className="bg-gradient-to-br from-grey-100 to-grey-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-grey-600 rounded-full flex items-center justify-center mr-4">
                  <Award className="text-white w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-grey-800">
                  Community-Driven
                </h3>
              </div>
              <p className="text-grey-700 leading-relaxed">
                Join a community of fashion enthusiasts who share styling tips,
                reviews, and inspiration. Our customers don't just buy clothes;
                they become part of a global style movement.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default About;
