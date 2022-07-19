import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HiArrowRight } from "react-icons/hi";
import { ProductCard, Newsletter } from "../../components";
import { signatureDishes } from "../../data";

import "./home.css";

const ImgContainer = styled.div`
  display: flex;
  width: 600px;
  height: 600px;
  margin-top: 30px;
  background-image: url("./images/hero-img.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-position: center;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  ${"" /* justify-content: center; */}
  align-items: center;
  flex: 1;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const RoundedImg = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  margin-bottom: 33px;
`;

const TextCon = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #1e1e1e;
  opacity: 0.7;
`;

const Home = () => {
  return (
    <div className="homepage">
      <section className="hero px-8 flex justify-between">
        <div className="left_a mt-20">
          <img src="./Images/Logo.png" alt="" />
          <h1 className="pl-3 title mt-2.5">Tasty Food,Speedy Delivery</h1>
          <div className="w-52 ml-3 mt-5 pl-9 pr-6 py-4 bg-orange-600 rounded-xl text-white">
            <Link to="/login.html" className=" flex items-center text-lg">
              Order now
              <span className="mt-1">
                <HiArrowRight className="w-10" />
              </span>
            </Link>
          </div>
        </div>
        <ImgContainer></ImgContainer>
      </section>
      <section className="hero-sec px-12 lg:px-24 mt-20">
        <p className="title text-center"> Food With A New Passion</p>
        <div className="mt-7">
          <div className="flex justify-between">
            <Left className="">
              <RoundedImg
                className="img_frame"
                src="./Images/sizf4VPAqn.png"
                alt=""
              />
              <p className="sub-title">Quality Food</p>
              <TextCon className="text-center">
                Pick from our range of delicious dishes.
                <br />
                &nbsp;
              </TextCon>
            </Left>
            <div className="div_bs"></div>
            <Center className="div_b">
              <RoundedImg
                className="img_frame"
                src="./Images/image 6.png"
                alt=""
              />
              <p className="sub-title"> Food Delivery</p>
              <TextCon className="text-center">
                {" "}
                Swift Foods is happy to deliver your doorstep.
                <br />
                &nbsp;
              </TextCon>
            </Center>
            <div className="div_bs"></div>
            <Right className="div_b">
              <RoundedImg
                className="img_frame"
                src="./Images/image 5.png"
                alt=""
              />
              <p className="sub-title"> Super Tasty</p>
              <TextCon className="text-center">
                {" "}
                We prepare our food with adequately selected ingredients.
                <br />
                Tasty Food, Fast Delivery.
              </TextCon>
            </Right>
          </div>
        </div>
      </section>
      <section className="product-sig px-8 mt-14">
        <p className="title"> Signature Dishes</p>
        <div className="flex mt-7">
          {signatureDishes.map((dish) => (
            <ProductCard key={dish.id} {...dish} />
          ))}
        </div>
      </section>
      <section className="about px-8 pb-16 bg-white mt-12 pt-5">
        <h1 className="title text-center mb-4"> About us</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nis "Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nis "Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nis
        </p>
      </section>
      <Newsletter />
    </div>
  );
};

export default Home;
