import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import Clock from "../components/Clock";
import Navbar from "../components/Navbar";
import { publicRequest, userRequest } from "../requestMethods";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between !important;
`;
const Bid = styled.input`
  width: 100px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;

`;
const Button = styled.button`
  padding: 15px;
  border: 1px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const Product = () => {
  const {id} =  useParams();
  const [proudct, setProduct] = useState({});
  const [input, setInput] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const [isAction, setIsAction] = useState(false);
  const user =JSON.parse(localStorage.getItem('user'))?.username
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`products/find/${id}`);
        setProduct(res.data);
        setIsFetching(true)
      } catch (error) {}
    };
    getProduct();
  });
  const putPrice = async ()=>{
    try {
      const newAuction = {user: user, price: input}
      const res = await userRequest.put(`products/allauction/${id}`, newAuction);
      setProduct(res.data);
      console.log(proudct);
      console.log(proudct.allAuction[proudct.allAuction.length-1].price);
    } catch (error) {}
  }
  return (
    <Container>
      <Navbar/>
      <Wrapper>
        <ImageContainer>
          <Image src={proudct.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{proudct.title}</Title>
          <Desc>
            {proudct.desc}
          </Desc>
          <FilterTitle>suggestions offered: {proudct.allAuction && proudct.allAuction.length}</FilterTitle>
          <FilterTitle><Clock endAuction={proudct.endAuction && proudct.endAuction}/></FilterTitle>
          <Price>{proudct.allAuction && proudct.allAuction[proudct.allAuction?.length-1].price}$</Price>
          {user ? 
          <AddContainer>
            {isAction && <div><Bid onChange={(e)=>{setInput(e.target.value)}} input type="number" name="test_name" min={input} />
            <Button onClick={putPrice}>BID</Button></div>}
          </AddContainer> : <Desc>You must register to bid</Desc>} 
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;
