import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FileInput, Button } from "../../components";

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
  return (
    <div>
      <div className="flex main_container">
        <Left id="image_hub">
          <ImgContainer />
        </Left>
        <Right>
          <FormContainer>
            <Title>Sign Up</Title>
            <div id="content_container">
              <form id="myform2">
                <FileInput
                  inputLabel={"First name"}
                  labelClass={"label"}
                  type={"text"}
                  inputId={"first_name"}
                  registerId={"first_name"}
                />
                <FileInput
                  inputLabel={"Last name"}
                  labelClass={"label"}
                  type={"text"}
                  inputId={"last_name"}
                  registerId={"last_name"}
                />
                <FileInput
                  inputLabel={"Email adress"}
                  labelClass={"label"}
                  type={"text"}
                  inputId={"email"}
                  registerId={"email"}
                />
                <FileInput
                  inputLabel={"Phone Number"}
                  labelClass={"label"}
                  type={"text"}
                  inputId={"phone_number"}
                  registerId={"phone_number"}
                />
                <FileInput
                  inputLabel={"Password"}
                  labelClass={"label"}
                  type={"password"}
                  inputId={"password"}
                  registerId={"password"}
                />
                <FileInput
                  inputLabel={"Confirm Password"}
                  labelClass={"label"}
                  type={"password"}
                  inputId={"confirm_password"}
                  registerId={"confirm_password"}
                />
                <Button
                  children={"Sign Up"}
                  className={"btn-primary"}
                  type={"submit"}
                  formId={"myform2"}
                  linkTo={"/"}
                />
              </form>
            </div>
          </FormContainer>
        </Right>
      </div>
    </div>
  );
};

export default UserRegister;
