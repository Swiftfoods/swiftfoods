import React from "react";

const MealCard = ({ name, price, image, onClick }) => {
  return (
    <div className="mamaputin-card-details">
      <img className="cart-item-img" src={image} alt="" />
      <div className="mamaputin-details-head">
        <h4 className="cart-item-name">{name}</h4>
        <p className="cart-item-price">${price}</p>
      </div>
      <span></span>
      <button className="add-to-cart" type="button" onClick={onClick}>
        Add to cart
      </button>
    </div>
  );
};

export default MealCard;
