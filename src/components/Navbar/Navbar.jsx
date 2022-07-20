import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiUser } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";

import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropDown = "top-24";
  const goUp = "-top-24";

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  // const status = userInfo.status;
  // console.log(status);

  const pathname = window.location.pathname;
  console.log(pathname);
  const noSignUp =
    "/login" &&
    "/signup" &&
    "/forgot-password" &&
    "/vendorregister" &&
    "/vendorlogin" &&
    "/userregister" &&
    "/userlogin";

  pathname === noSignUp && console.log("no sign up");
  const userregister = pathname.includes("/user/register");

  return (
    <div className="navbar flex items-center justify-between w-full overflow-hidden">
      <div className="navbar-brand flex items-center w-3/4 relative">
        <div className="ml-8 mr-16 lg:mr-28">
          <Link to="/">
            <img
              className="logo ml-8 mr-16 lg:mr-28"
              src="./images/Logo.png"
              alt="Logo"
            />
          </Link>
        </div>
        <nav className="header w-full">
          <ul className="flex justify-between">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="relative">
              <div className="notification absolute w-2 h-2 rounded bg-green-600 -right-3"></div>
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
      {userInfo ? (
        <div className={"flex mr-8 ml-6"}>
          <Link to="/user/notification" className="w-8 h-8 mr-10 relative">
            <div className="notification absolute w-2 h-2 rounded bg-green-600 right-0"></div>
            <IoMdNotificationsOutline className="notification text-3xl" />
          </Link>
          <Link to="/user/profile" className="">
            <BiUser className="user text-3xl" />
          </Link>
        </div>
      ) : pathname !== "/login" && pathname !== "/userregister" ? (
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
        className={`absolute right-2 bg-slate-700 transition-all duration-500 rounded-lg  ${
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
