import React from "react";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {mobile, tablet} from '../responsive'
const Container = styled.div`
  height: 60px;
  width: 100vw;
  position: fixed;
  z-index: 99;
  background-color: white;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({padding: "10px 0px"})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ size: "5px", justifyContent: "center" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
  ${mobile({size: "24px"})}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 1, justifyContent: "center" })}
`;
const Title = styled.h4`
  margin-left: 25px;
  font-weight: 100;
  cursor: pointer;
  
  ${tablet({ marginLeft: "5px", fontSize: "12px"})}
`;
const TitleUsername = styled.h4`
  margin-left: 25px;
  font-weight: 100;
  cursor: pointer;
  ${tablet({ display: "none" })}
`;

const Navbar = () => {
  const navigate = useNavigate();
  const username = JSON.parse(localStorage.getItem("user"))?.username;

  return (
    <Container>
      <Wrapper>
        
          {username ? <Left><TitleUsername>Hello {username}</TitleUsername> <Title onClick={() => navigate("/myauction")}>MY AUCTION</Title> <Title onClick={() => navigate("/addauction")}>ADD AUCTION</Title> </Left> : <Left></Left> }
       
        
        <Center>
          <Logo onClick={() => navigate("/")}>AuctionPlace.</Logo>
        </Center>

          {username ? <Right> <Title onClick={() => {
            localStorage.removeItem("persist:root")
            localStorage.removeItem("user")
            navigate("/")
          }}>LOG OUT</Title> </Right> :
          <Right>
            <Title onClick={() => navigate("/register")}>REGISTER</Title>
            <Title onClick={
              () => {
                navigate("/login")
                window.location.reload(false)
            }
          }>SIGN IN</Title> 
          </Right>}

      </Wrapper>
    </Container>
  );
};

export default Navbar;
