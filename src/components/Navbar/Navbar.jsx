import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components";

import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropDown = "top-0";
  const goUp = "-top-24";

  const pathname = window.location.pathname;
  console.log(pathname);
  const noSignUp =
    "/login" ||
    "/signup" ||
    "/forgot-password" ||
    "/vendorregister" ||
    "/vendorlogin" ||
    "/userregister" ||
    "/userlogin";
  const userregister = pathname.includes("/user/register");

  return (
    <div className="navbar flex items-center justify-between w-full overflow-hidden">
      <div className="navbar-brand flex items-center w-3/4 relative">
        <img
          className="logo ml-8 mr-16 lg:mr-28"
          src="./images/Logo.png"
          alt="Logo"
        />
        <nav className="header w-full">
          <ul className="flex justify-between">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
            <li>
              <Link to="/mamaputin">Menu</Link>
            </li>
          </ul>
        </nav>
      </div>
      {noSignUp.includes(pathname) ? (
        <Button
          children={"Sign Up"}
          className={
            "py-3 px-8 lg:px-12 border-green-600 border-2 rounded mr-8 ml-6"
          }
          onClick={() => {
            setIsOpen(!isOpen);
            // window.location.href = "/login.html";
          }}
        />
      ) : (
        <div></div>
      )}
      <div
        className={`absolute right-0 bg-slate-700 transition-all duration-500  ${
          !isOpen ? goUp : dropDown
        }`}
      >
        <Button
          children={"As Vendor"}
          className="py-3 pl-3 lg:px-12"
          onClick={() => {
            window.location.href = "/vendorregister";
          }}
        />
        <Button
          children={"As Customer"}
          className="py-3 px-8 lg:px-12"
          onClick={() => {
            window.location.href = "/userregister";
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
