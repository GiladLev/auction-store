import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  const user = JSON.parse(localStorage.getItem("user"))?.username;
  return (
    <Container>
      <Wrapper>
        
          {user ? <Left><Title>Hello {user}</Title> <Title onClick={() => navigate("/myauction")}>MY AUCTION</Title> </Left> : null}
       
        
        <Center>
          <Logo onClick={() => navigate("/")}>SHOP.</Logo>
        </Center>

          {user ? <Right> <Title onClick={() => localStorage.removeItem("user")}>LOG OUT</Title> </Right> :
          <Right>
            <Title onClick={() => navigate("/register")}>REGISTER</Title>
            <Title onClick={() => navigate("/login")}>SIGN IN</Title> 
          </Right>}

      </Wrapper>
    </Container>
  );
};

export default Navbar;
