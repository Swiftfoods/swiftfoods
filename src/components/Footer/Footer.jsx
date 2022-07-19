import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import "./footer.css";

const FooterCon = styled.footer`
  background-color: #a6a6a6;
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

const LogoText = styled.span`
  margin-left: 10px;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
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
  width: 50%;
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
  padding-top: 20px;
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

const Footer = () => {
  return (
    <div>
      <FooterCon className="">
        <Container className="footer-container">
          <Left className="">
            <Logo>
              <Link to="/">
                <img alt="" src="./Images/Logo.png" />
              </Link>
            </Logo>
          </Left>
          <Center className="">
            <CenterItem>
              <Title>Home</Title>
              <List>
                <ListItem>
                  <Link to="/">Home</Link>
                </ListItem>
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
              <Title>Home</Title>
              <List>
                <ListItem>
                  <Link to="/">Home</Link>
                </ListItem>
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
              <Title>Home</Title>
              <List>
                <ListItem>
                  <Link to="/">Home</Link>
                </ListItem>
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
                  <img alt="" src="./Images/Group.png" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img alt="" src="./Images/Layer 2.png" />
                </Link>
              </li>
            </ul>
          </Right>
        </Container>
      </FooterCon>
    </div>
  );
};

export default Footer;
