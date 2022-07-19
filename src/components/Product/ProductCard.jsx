import React from "react";
import "./card.css";

const ProductCard = ({ image, price, name, className }) => {
  return (
    <div className={className}>
      <img src={image} alt="" />
      <div className="price_tag h-20 py-2 pl-8 pr-3 bg-white rounded-lg border border-gray-300">
        <p className="food_name">{name}</p>
        <p className="food_price flex justify-end">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
