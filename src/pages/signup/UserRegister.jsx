import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import { FormInput, Button } from "../../components";
import { register } from "../../actions/userActions";
import "react-toastify/dist/ReactToastify.css";

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
  const { loading, error, userInfo } = userRegister;

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

    //Check if password and confirm password match
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      toast("Passwords do not match");
      return;
    } else {
      setMessage(null);
      // toast("Registration successful");
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
          <FormContainer>
            <Title>Sign Up</Title>
            <form onSubmit={submitHandler}>
              <FormInput
                label="First Name"
                id="first_name"
                type="text"
                placeholder="First Name"
                value={first_name}
                onChange={(e) => setFirst_name(e.target.value)}
              />

              <FormInput
                label="Last Name"
                id="last_name"
                type="text"
                placeholder="Last Name"
                value={last_name}
                onChange={(e) => setLast_name(e.target.value)}
              />

              <FormInput
                label="Email"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <FormInput
                label="Phone"
                id="phone"
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <FormInput
                label="Password"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <FormInput
                label="Confirm Password"
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <Button variant="primary" type="submit" className="btn-primary">
                Sign Up
              </Button>
            </form>
          </FormContainer>

          <div className="text-center">
            <Link to="/login">Already have an account?</Link>
          </div>
        </Right>
      </div>
    </div>
  );
};

export default UserRegister;
