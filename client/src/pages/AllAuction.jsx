import { useEffect, useState } from "react";
import styled from "styled-components";
import AddProduct from "../components/AddProduct";
import Navbar from "../components/Navbar";
import TableAllAuction from "../components/TableAllAuction";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const WrapperAddProduct = styled.div`
  flex: 1;
`;
const WrapperTable = styled.div`
  flex: 3;
`;

const AllAuction = () => {

  return (
    <div>
      <Navbar />
      <Container>
        <WrapperAddProduct>
          <AddProduct />
        </WrapperAddProduct>
        <WrapperTable>
          <TableAllAuction />
        </WrapperTable>
      </Container>
    </div>
  );
};

export default AllAuction;
