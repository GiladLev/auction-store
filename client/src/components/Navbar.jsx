import React from "react";
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
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
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
  return (
    <Container>
      <Wrapper>
        <Left></Left>
        <Center>
          <Logo>SHOP.</Logo>
        </Center>
        <Right><Title>REGISTER</Title><Title>SIGN IN</Title> </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
