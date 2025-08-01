import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link
      className="group text-grey-800 cursor-pointer block"
      to={`/products/${id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card hover-lift overflow-hidden relative">
        {/* Image container with loading state */}
        <div className="relative overflow-hidden aspect-square bg-grey-50">
          {!imageLoaded && <div className="absolute inset-0 shimmer"></div>}
          <img
            className={`w-full h-full object-cover transition-all duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            } ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            src={image[0]}
            alt={name}
            onLoad={() => setImageLoaded(true)}
          />

          {/* Hover overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-grey-800/60 via-transparent to-transparent transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute bottom-4 left-4 right-4">
              <button className="w-full bg-grey-800/90 backdrop-blur-sm text-white font-semibold py-2 px-4 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-grey-700">
                Quick View
              </button>
            </div>
          </div>

          {/* Sale badge */}
          <div className="absolute top-3 left-3 bg-gradient-to-r from-grey-700 to-grey-900 text-white text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            TRENDING
          </div>
        </div>

        {/* Product info */}
        <div className="p-4">
          <h3 className="font-medium text-sm mb-2 line-clamp-2 group-hover:text-grey-700 transition-colors duration-300 text-body-primary">
            {name}
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold text-grey-800">
              {currency}
              {price}
            </p>
            <div className="flex items-center gap-1">
              <span className="text-grey-600 text-sm">★</span>
              <span className="text-xs text-grey-600">4.5</span>
            </div>
          </div>

          {/* Color options */}
          <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-4 h-4 bg-grey-600 rounded-full border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform duration-200"></div>
            <div className="w-4 h-4 bg-grey-400 rounded-full border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform duration-200"></div>
            <div className="w-4 h-4 bg-grey-800 rounded-full border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform duration-200"></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
