import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import { FormInput, Button, FormCheck } from "../../components";
import { login } from "../../actions/userActions";
import "react-toastify/dist/ReactToastify.css";

import "./user.scss";

const Left = styled.div`
  flex: 1;
`;

const ImgContainer = styled.div`
  height: 954px;
  background-image: url("./images/userlogin.png");
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
  margin-left: 50px;
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
`;

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo, success } = userLogin;

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
    } else if (success) {
      toast.success("Login Successful");
    }
    dispatch(login(email, password));
  };

  return (
    <div>
      <ToastContainer />
      <div className="flex main_container">
        <Left id="image_hub">
          <ImgContainer />
        </Left>
        <Right>
          <FormContainer>
            <Title>Sign Up</Title>
            <form onSubmit={submitHandler}>
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
                label="Password"
                labelClass={"label"}
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <FormCheck
                label="Remember me"
                labelClass={"label-check"}
                id="agree"
                type="checkbox"
                inputClass={"check-con"}
                checkClass={"items-center"}
              />

              <Button variant="primary" type="submit" className="btn-primary">
                Sign In
              </Button>
            </form>
          </FormContainer>

          <div className="flex flex-col justify-center items-center mt-40">
            <p className="sign">Sign up with</p>
            <div className="social-login flex items-center mt-6">
              <Link to="/">
                <FcGoogle className="text-3xl" />
              </Link>
              <Link to="/">
                <SiFacebook className="text-2xl text-sky-500 ml-5" />
              </Link>
            </div>
          </div>

          <div className="text-center w-full mt-24 dont">
            <p className="text-primary">
              Don't have an account?
              <Link to="/userregister" className="ml-1">
                Sign up
              </Link>
            </p>
          </div>
        </Right>
      </div>
    </div>
  );
};

export default UserLogin;
