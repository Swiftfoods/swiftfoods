import React from "react";
import { Link } from "react-router-dom";

import "./Contact.scss";

const Contact = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full">
      <div className="section_a">
        <div className="header_a">
          <h1 className="H1_a">We always want to hear from you!</h1>
          <h2 className="H2_a"> Let us know how we can serve you better.</h2>
        </div>
        <div className="midder_a">
          <div className="upperleft_a">
            <img src="./images/undraw_chat_bot_re_e2gj 1.png" alt="" />
          </div>
          <div className="upperright_a">
            <img src="./images/undraw_contact_us_re_4qqt 1.png" alt="" />
          </div>
          <br />
        </div>
        <div className="lowmid_a">
          <div className="lowerleft_a">
            <h1 className="h1_a">MESSAGE US</h1>
            <h2 className="h2_a">Start a Chat</h2>
          </div>
          <div className="lowermid_a">
            <h1 className="h1_a">
              <Link to="FAQ.html">FAQ</Link>
            </h1>
          </div>
          <div className="lowerright_a">
            <h1 className="h1_a">CALL US</h1>
            <h2 className="h2_a">+234XXXXXXXXXX</h2>
          </div>
        </div>
      </div>
      <div className="section_b">
        <h1 className="header_b">OUR LOCATION</h1>
        <img
          src="./images/Rectangle 8.png"
          alt=""
          className="w-full object-cover"
        />
      </div>
      <div id="section_c">
        <div id="left_c">
          <h1> Got Something to ask?</h1>
          <h2>Send us an Email </h2>
          <form name="myform3" onSubmit={submitHandler}>
            <input
              type="text"
              name="Email"
              id="Email"
              placeholder="   yourname@email.com"
            />
            <input type="submit" value="Send" id="submit" />
          </form>
        </div>
        <div id="right_c">
          <h1 id="h1_c">Order on The Go!</h1>
          <img src="./Images/image 95 (1).png" alt="" />
          <img src="./Images/image 96 (1).png" alt="" />
          <h2 id="h2_c">
            {" "}
            <Link to="">Download Now</Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
