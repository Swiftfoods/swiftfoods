import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import { FormInput, Button, FormCheck } from "../../components";
import { register } from "../../actions/userActions";
import "react-toastify/dist/ReactToastify.css";

import "./user.scss";

const Left = styled.div`
  flex: 1;
`;

const ImgContainer = styled.div`
  height: 954px;
  background-image: url("./images/userreg-bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Right = styled.div`
  flex: 1;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-left: 50px;
  margin-right: auto;
  margin-top: 70px;
`;

const Title = styled.h1`
  margin-bottom: 45px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: #1e1e1e;
  text-align: left;
`;

const UserRegister = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo, success } = userRegister;

  console.log(error);
  console.log(success);
  console.log(userInfo);

  const redirect = window.location.search
    ? window.location.search.split("=")[1]
    : "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (error) {
      toast.error(error);
    } else if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      toast.success("Login Successful");
      dispatch(register(first_name, last_name, email, phone, password));
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="flex main_container">
        <Left id="image_hub">
          <ImgContainer />
        </Left>
        <Right>
          <FormContainer className="fcon">
            <Title className="w-10/12 text-left">Sign Up</Title>
            <form onSubmit={submitHandler}>
              <FormInput
                label="First Name"
                labelClass={"label"}
                id="first_name"
                type="text"
                placeholder="First Name"
                value={first_name}
                onChange={(e) => setFirst_name(e.target.value)}
              />

              <FormInput
                label="Last Name"
                labelClass={"label"}
                id="last_name"
                type="text"
                placeholder="Last Name"
                value={last_name}
                onChange={(e) => setLast_name(e.target.value)}
              />

              <FormInput
                label="Email"
                labelClass={"label"}
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <FormInput
                label="Phone"
                labelClass={"label"}
                id="phone"
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <FormInput
                label="Password"
                labelClass={"label"}
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <FormInput
                label="Confirm Password"
                labelClass={"label"}
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <FormCheck
                label="Yes, i have read and accept all Swiftfoods terms and conditions."
                labelClass={"label-check"}
                id="agree"
                type="checkbox"
                inputClass={"check-con"}
                // value={message}
                // onChange={(e) => setMessage(e.target.value)}
              />

              <Button variant="primary" type="submit" className="btn-primary">
                Sign Up
              </Button>
            </form>

            <div className="text-center mt-24 w-full dont">
              <p className="text-primary text-center ">
                Already have an account?
                <Link to="/login" className="ml-1">
                  Sign In
                </Link>
              </p>
            </div>
          </FormContainer>
        </Right>
      </div>
    </div>
  );
};

export default UserRegister;
