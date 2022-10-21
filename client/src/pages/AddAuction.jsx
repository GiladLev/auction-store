import React from 'react'
import styled from 'styled-components';
import AddProduct from '../components/AddProduct';
import Navbar from '../components/Navbar';
import { tablet } from '../responsive';
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

`;
const Wrapper = styled.div`
width: 40%;
  height: auto;
  ${tablet({ width: "90%" })}
`;

const AddAuction = () => {
  return (
    <div>
        <Navbar />
      <Container>
        <Wrapper>
          <AddProduct />
        </Wrapper>
      </Container>

    </div>
  )
}

export default AddAuction