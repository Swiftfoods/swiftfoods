import React from "react";
import { Link } from "react-router-dom";

import "./Restaurants.css";

const RestaurantMenu = () => {
  return  <div className="restaurant">
  <div className="rest-head">
      <div className="rest-header">
          <h1>Find a restaurant</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      
      <img src="./Images/restaurant-head.png" alt="" />
  </div>
  <div className="search-rest">
      <h3 id="search-text">Let's find something delicious for you</h3>
      <div className="search-box">
        <table >
          <tr>
            <td><i className="fa fa-search"></i></td>
            <td><input type="search" id="search" value=" Search restaurant"/></td>
          </tr>
        </table>
      </div>
  </div>
   <div className="rest-recommended">
    <h3>Recommended</h3>
    <p className="filter">filter &gt;</p>
   </div>

  <div className="restaurant-row">
     
        <div className="rest-card">
        <img src="./Images/restaurant-1.png" alt="" />
          <div className="rest-card-details">
              <h4>Mamaputin Restaurant</h4>
              <p>100 London street, 44018 Mac, No</p>
            <div className="rest-view">
            <a href="mamaputin" className="view">View</a>
              <span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
            </div>
          </div>
        </div>

        <div className="rest-card">
        <img src="./Images/restaurant-2.png" alt="" />
          <div className="rest-card-details">
              <h4>Mamaputin Restaurant</h4>
              <p>100 London street, 44018 Mac, No</p>
            <div className="rest-view">
              <a href="mamaputin" className="view">View</a>
              <span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
            </div>
          </div>
        </div>

        <div className="rest-card">
        <img src="./Images/restaurant-3.png" alt="" />
          <div className="rest-card-details">
              <h4>Mamaputin Restaurant</h4>
              <p>100 London street, 44018 Mac, No</p>
            <div className="rest-view">
              <a href="mamaputin" className="view">View</a>
              <span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
            </div>
          </div>
        </div>

        <div className="rest-card">
        <img src="./Images/restaurant-1.png" alt="" />
          <div className="rest-card-details">
              <h4>Mamaputin Restaurant</h4>
              <p>100 London street, 44018 Mac, No</p>
            <div className="rest-view">
              <a href="mamaputin" className="view">View</a>
              <span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
            </div>
          </div>
        </div>

        <div className="rest-card">
        <img src="./Images/restaurant-2.png" alt="" />
          <div className="rest-card-details">
              <h4>Mamaputin Restaurant</h4>
              <p>100 London street, 44018 Mac, No</p>
            <div className="rest-view">
              <a href="mamaputin" className="view">View</a>
              <span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
            </div>
          </div>
        </div>

        <div className="rest-card">
        <img src="./Images/restaurant-3.png" alt="" />
          <div className="rest-card-details">
              <h4>Mamaputin Restaurant</h4>
              <p>100 London street, 44018 Mac, No</p>
            <div className="rest-view">
              <a href="mamaputin" className="view">View</a>
              <span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
            </div>
          </div>
        </div>

        <div className="rest-card">
        <img src="./Images/restaurant-1.png" alt="" />
          <div className="rest-card-details">
              <h4>Mamaputin Restaurant</h4>
              <p>100 London street, 44018 Mac, No</p>
            <div className="rest-view">
              <a href="mamaputin" className="view">View</a>
              <span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
            </div>
          </div>
        </div>

        <div className="rest-card">
        <img src="./Images/restaurant-2.png" alt="" />
          <div className="rest-card-details">
              <h4>Mamaputin Restaurant</h4>
              <p>100 London street, 44018 Mac, No</p>
            <div className="rest-view">
              <a href="mamaputin" className="view">View</a>
              <span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
            </div>
          </div>
        </div>

        


        

  </div>
  <div className="rest-view-more">
    <h5>View more &gt; &gt; &gt; &gt;  </h5>
    <span >
      <ul >
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </span>
  </div>
  <h4>Order on The Go</h4>
  <div className="rest-footer">
  <img src="./Images/phone-img.png" alt="" />
  <img src="./Images/laptop-img.png" alt="" />
  </div>
</div>;
};

export default RestaurantMenu;
