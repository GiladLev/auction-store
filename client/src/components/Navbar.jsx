import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Title = styled.h4`
  margin-left: 25px;
  font-weight: 100;
  cursor: pointer;
`;

const Navbar = () => {
  const navigate = useNavigate();
  const username = JSON.parse(localStorage.getItem("user"))?.username;

  return (
    <Container>
      <Wrapper>
        
          {username ? <Left><Title>Hello {username}</Title> <Title onClick={() => navigate("/myauction")}>MY AUCTION</Title> </Left> : <Left></Left> }
       
        
        <Center>
          <Logo onClick={() => navigate("/")}>SHOP.</Logo>
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
