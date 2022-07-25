import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

import "./footer.css";

const FooterCon = styled.footer`
  background-color: #d9d9d9;
  font-family: "Montserrat", sans-serif;
`;

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: black;
  ${"" /* background-color: #${(props) => props.color}; */}
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  background: #c3c3c3;
  ${
    "" /* opacity: 0.1;
  z-index: 1; */
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 2;
  padding: 50px 20px 10px;
`;

const CenterItem = styled.div`
  display: flex;
  flex-direction: column;
  ${
    "" /* align-items: center;
  justify-content: center; */
  }
  margin-bottom: 20px;
`;

const Title = styled.h3`
  text-align: left;
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #1e1e1e;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 100%;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #1e1e1e;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  ${"" /* justify-content: center; */}
  ${"" /* padding: 30px 10px 20px 30px; */}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Text = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  font-feature-settings: "salt" on, "liga" off;
  color: #1e1e1e;
`;

const Footer = () => {
  return (
    <div>
      <FooterCon className="">
        <Container className="footer-container">
          <Left className="">
            <Logo>
              <Link to="/">
                <img alt="" src="./images/Logo.png" />
              </Link>
            </Logo>
          </Left>
          <Center className="">
            <CenterItem>
              <Title>Home</Title>
              <List>
                <ListItem>
                  <Link to="/">Menu</Link>
                </ListItem>
                <ListItem>
                  <Link to="/">Order</Link>
                </ListItem>
                <ListItem>
                  <Link to="/">Delivery</Link>
                </ListItem>
                <ListItem>
                  <Link to="/">Bookings</Link>
                </ListItem>
                <ListItem>
                  <Link to="/">Settings</Link>
                </ListItem>
              </List>
            </CenterItem>
            <CenterItem>
              <Title>Support</Title>
              <List>
                <ListItem>
                  <Link to="/">Help Center</Link>
                </ListItem>
                <ListItem>
                  <Link to="/">Safety Center</Link>
                </ListItem>
              </List>
            </CenterItem>
            <CenterItem>
              <Title>Legal</Title>
              <List>
                <ListItem>
                  <Link to="/">Cookies Policy</Link>
                </ListItem>
                <ListItem>
                  <Link to="/">Privacy Policy</Link>
                </ListItem>
                <ListItem>
                  <Link to="/">Terms of Service</Link>
                </ListItem>
                <ListItem>
                  <Link to="/">Dispute resolution</Link>
                </ListItem>
              </List>
            </CenterItem>
            <CenterItem>
              <Title>Contact Us</Title>
              <Title>About Us</Title>
            </CenterItem>
          </Center>
          <Right className="">
            <h4>
              <Link to="/">Install App</Link>
            </h4>
            <ul>
              <li>
                <Link to="/">
                  <img alt="" src="./images/Group.png" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img alt="" src="./images/Layer2.png" />
                </Link>
              </li>
            </ul>
          </Right>
        </Container>
        <Container className="w-full px-40 pb-3">
          <div className="flex justify-between w-full items-center">
            <Text className="flex items-center">
              © 2022 Swiftfood.ng All rights reserved
            </Text>
            <SocialContainer className="">
              <SocialIcon color="#ff9800">
                <Link to="/" className="z-10">
                  <FaInstagram />
                </Link>
              </SocialIcon>
              <SocialIcon color="#00bcd4">
                <Link to="/">
                  <FaTwitter />
                </Link>
              </SocialIcon>
              <SocialIcon>
                <Link to="/">
                  <FaYoutube />
                </Link>
              </SocialIcon>
            </SocialContainer>
          </div>
        </Container>
      </FooterCon>
    </div>
  );
};

export default Footer;
