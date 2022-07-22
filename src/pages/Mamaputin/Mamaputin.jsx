import React from "react";

import "./mamaputin.css";

const Mamaputin = () => {
    return <div className="mamaputin">
    <div className="mamaputin-head">
        <h1>MAMAPUTIN RESTAURANT</h1>
        
    </div>
    <div className="mamaputin-address">
      
        <ul>
            <li><span>Address</span></li>
            <li>106 Loudon street, 44018 Mac,NJ</li>
              
        </ul>
        <ul>
            <li><span>Customer rating</span></li>
            <li><span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span></li>
              
        </ul>
        <ul>
            <li><span>Business Hours</span></li>
            <li>10am-9pm Everyday</li>
        </ul>
     </div>

    <h3>Food Menu</h3>

       
    <div className="mamaputin-row">
       
        <div className="mamaputin-card-details">
            <img className="cart-item-img" src="./Images/mamaputin-img1.png" alt="" />
            <div className="mamaputin-details-head">
                <h4 className="cart-item-name">Stir Fry Pasta</h4>               
                <p className="cart-item-price">$30.00</p>
            </div>
            <span></span>
            <button  className="add-to-cart" type="button">Add to cart</button>
        </div>

        <div className="mamaputin-card-details">
            <img className="cart-item-img" src="./Images/mamaputin-img1.png" alt="" />
            <div className="mamaputin-details-head">
                <h4 className="cart-item-name">Stir Fry Pasta</h4>               
                <p className="cart-item-price">$30.00</p>
            </div>
            <span></span>
            <button  className="add-to-cart" type="button">Add to cart</button>
        </div>

        <div className="mamaputin-card-details">
            <img className="cart-item-img" src="./Images/mamaputin-img1.png" alt="" />
            <div className="mamaputin-details-head">
                <h4 className="cart-item-name">Stir Fry Pasta</h4>               
                <p className="cart-item-price">$30.00</p>
            </div>
            <span></span>
            <button  className="add-to-cart" type="button">Add to cart</button>
        </div>

        <div className="mamaputin-card-details">
            <img className="cart-item-img" src="./Images/mamaputin-img1.png" alt="" />
            <div className="mamaputin-details-head">
                <h4 className="cart-item-name">Stir Fry Pasta</h4>               
                <p className="cart-item-price">$30.00</p>
            </div>
            <span></span>
            <button  className="add-to-cart" type="button">Add to cart</button>
        </div>

        <div className="mamaputin-card-details">
            <img className="cart-item-img" src="./Images/mamaputin-img1.png" alt="" />
            <div className="mamaputin-details-head">
                <h4 className="cart-item-name">Stir Fry Pasta</h4>               
                <p className="cart-item-price">$30.00</p>
            </div>
            <span></span>
            <button  className="add-to-cart" type="button">Add to cart</button>
        </div>

        <div className="mamaputin-card-details">
            <img className="cart-item-img" src="./Images/mamaputin-img1.png" alt="" />
            <div className="mamaputin-details-head">
                <h4 className="cart-item-name">Stir Fry Pasta</h4>               
                <p className="cart-item-price">$30.00</p>
            </div>
            <span></span>
            <button  className="add-to-cart" type="button">Add to cart</button>
        </div>

        <div className="mamaputin-card-details">
            <img className="cart-item-img" src="./Images/mamaputin-img1.png" alt="" />
            <div className="mamaputin-details-head">
                <h4 className="cart-item-name">Stir Fry Pasta</h4>               
                <p className="cart-item-price">$30.00</p>
            </div>
            <span></span>
            <button  className="add-to-cart" type="button">Add to cart</button>
        </div>

        <div className="mamaputin-card-details">
            <img className="cart-item-img" src="./Images/mamaputin-img1.png" alt="" />
            <div className="mamaputin-details-head">
                <h4 className="cart-item-name">Stir Fry Pasta</h4>               
                <p className="cart-item-price">$30.00</p>
            </div>
            <span></span>
            <button  className="add-to-cart" type="button">Add to cart</button>
        </div>

    </div>

   

  
   
    <h3>Customer Reviews</h3>
  <div className="mamaputin-review-row">
      <div className="mamaputin-review">
        
       <div className="mamaputin-review-details">
       <img src="./Images/mamaputin-review.png" alt="" />
        <h4>Patricia Akinmade</h4>
        <span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
        <p>"Lorem ipsum dolor sit amet consectetur<br/>
          adipisicing elit. Molestiae dolorem <br/>
          provident inventore harum nemo qui illo<br/>
           Autem"</p>
           <p className="review-slide">&gt; <span>1/4</span> &gt;</p>
       </div>
      </div>

      <img className="mamaputin-review-footer" src="./Images/mamaputin-feedback.png" alt="" />
  </div>
  


  <h2 className="mamaputin-footer-header">Order on The Go</h2>
    <div className="mamaputin-footer">
      
      <img src="./Images/phone-img.png" alt="" />
      <img src="./Images/laptop-img.png" alt="" />
    </div>
</div>
};

 export default Mamaputin;