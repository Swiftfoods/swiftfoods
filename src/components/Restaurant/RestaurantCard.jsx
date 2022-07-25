import React from "react";
import { Link } from "react-router-dom";
import Rating from "../Rating";

const RestaurantCard = ({ brandName, rating, image }) => {
  return (
    <>
      <div className="rest-card">
        <img src={image} alt="" />
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
