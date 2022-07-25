import React from "react";
import { Link } from "react-router-dom";
import Rating from "../Rating";

const RestaurantCard = ({ brandName, rating }) => {
  return (
    <>
      <div className="rest-card">
        <img src="./Images/restaurant-2.png" alt="" />
        <div className="rest-card-details">
          <h4>{brandName}</h4>
          <p>100 London street, 44018 Mac, No</p>
          <div className="rest-view flex items-center justify-between">
            <Link to="/mamaputin" className="view">
              View
            </Link>
            <div className="">
              <Rating value={rating} color={"#FFA500"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
