import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CatgoryItem from "./CatgoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Catgories = () => {
  return (
    <Container>
      {categories.map((item, index) => (
        <CatgoryItem key={index} item={item} />
      ))}
    </Container>
  );
};

export default Catgories;
