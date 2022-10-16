import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  display: flex;
`;
const FilterText = styled.div`
  margin: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;
const Option = styled.option`
`;

const ProductList = () => {
    const location = useLocation()
    const cat = location.pathname.split("/")[2];
    const [sort, setSort] = useState("Newest")

  return (
    <Container>
       <Navbar/>
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e)=>setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products  cat={cat} sort={sort}/>
    </Container>
  );
};

export default ProductList;
