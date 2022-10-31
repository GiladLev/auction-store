import { useEffect, useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../requestMethods";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Products({ cat, sort }) {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    const getProudcts = async () => {
      try {
        const res = await publicRequest.get(cat ? `/products?category=${cat}` : `/products`)
        setProducts(res.data)
        setFilterProducts(res.data)
      } catch (err) {}
    };
    getProudcts();
  }, []);

  useEffect(() => {
    if (sort === "newest") {
      setProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
    console.log(products);
  }, [sort]);

  
  
  return (
    <Container>
      {products.map((item, index) => (
        <Product item={item} key={index} />
      ))}
    </Container>
  );
}

export default Products;
