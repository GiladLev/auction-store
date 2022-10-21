import { useState } from "react";
import styled from "styled-components";
import { userRequest } from "../requestMethods";
import { mobile } from "../responsive";

const Wrapper = styled.div`
  height: 70vh;
  padding: 20px;
  background-color: #a1a1a1;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const Title = styled.h1`
  font-style: 24px;
  font-weight: 300;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 15vw;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const FilterText = styled.div`
  margin: 20px;
  font-weight: 300;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;
const FilterContainer = styled.div`

  flex: 1;
  margin: 20px 10px 0 0;
  padding: 10px;
`;
const Filter = styled.div`
`;
const Select = styled.select`
    padding: 10px;
    min-width: 100%;
`;
const Option = styled.option`
`;
const AddProduct = () => {
  const [product, setProduct] = useState(null);
  const user =JSON.parse(localStorage.getItem('user'))?.username
  const handleSubmit = (e) => {
    e.preventDefault();
    const postProduct = async (product) => {
      console.log(product);
      try {
        const res = await userRequest.post("/products/",{...product, "createdBy": user });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    postProduct(product);
  };

  return (
    <Wrapper>
      <Title>CREATE AN AUCTION</Title>
      <Form>
        <Input
          placeholder="Title"
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
        />
        <Input
          placeholder="description"
          onChange={(e) => setProduct({ ...product, desc: e.target.value })}
        />
        <Input
          placeholder="image"
          onChange={(e) => setProduct({ ...product, img: e.target.value })}
        />
        <Input
          placeholder="first price"
          type="number" min="0"
          onChange={(e) =>
            setProduct({
              ...product,
              price: e.target.value,
              allAuction: [{ user: "firstprice", price: e.target.value }],
            })
          }
        />
   
        <Input
          placeholder="End auction"
          type="datetime-local"
          onChange={(e) =>
            setProduct({ ...product, endAuction: e.target.value })
          }
        />
             <FilterContainer>
        <Filter>
          
          <Select onChange={(e)=>setProduct({ ...product, categories: e.target.value })}>
            <Option value="men">Auction categorie: men</Option>
            <Option value="sport">Auction categorie: sport</Option>
            <Option value="Computer">Auction categorie: Computer</Option>
            <Option value="Women">Auction categorie: Women</Option>
            <Option value="gym">Auction categorie: gym</Option>
            <Option value="cellphones">Auction categorie: cellphones</Option>
            <Option value="children">Auction categorie: children</Option>
            <Option value="extreme">Auction categorie: extreme</Option>
          </Select>
        </Filter>
      </FilterContainer>
        <Button onClick={handleSubmit}>CREATE</Button>
      </Form>
    </Wrapper>
  );
};

export default AddProduct;
