import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import { FormInput, Button } from "../../components";
import { login } from "../../actions/userActions";
import "react-toastify/dist/ReactToastify.css";

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
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

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

    // toast("Registration successful");
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
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <FormInput
                label="Password"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button variant="primary" type="submit" className="btn-primary">
                Sign In
              </Button>
            </form>
          </FormContainer>

          <div className="text-center">
            <Link to="/login">Don't have an account? Sign up</Link>
          </div>
        </Right>
      </div>
    </div>
  );
};

export default UserLogin;
