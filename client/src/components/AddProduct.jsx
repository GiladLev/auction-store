import axios from "axios";
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
const Filter = styled.div``;
const Select = styled.select`
  padding: 10px;
  min-width: 100%;
`;
const Error = styled.span`
color: red;
`;
const Success = styled.span`
color: #346f34;
`;
const Option = styled.option``;
const AddProduct = () => {
  const [product, setProduct] = useState({categories: 'men'});
  const [img, setImg] = useState("");
  const [err, setErr] = useState(false);
  const [successUpload, setSuccessUpload] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"))?.username;
  const handleSubmit = (e) => {
    e.preventDefault()
    const postProduct = async (product) => {
      console.log(product);
      try {
        const res = await userRequest.post("/products/", {
          ...product,
          createdBy: user,
        });
        console.log(res);
        setErr(false)
        setSuccessUpload(true)
      } catch (error) {
        console.log(error);
        setErr(error)
      }
    };
    postProduct(product);
  };

  const uploadImage = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("file", img);
    formData.append("upload_preset", "ul9zvfet");
    console.log(formData);

    axios.post(
      "https://api.cloudinary.com/v1_1/dxexnhjmi/image/upload",
      formData
    ).then((res) => {
      setProduct({ ...product, img: res.data.secure_url })
      
    });


  };

  return (
    <Wrapper>
      <Title>CREATE AN AUCTION</Title>
      <Form>
      <FilterContainer>
          <Filter>
            <Select
              onChange={(e) =>
                setProduct({ ...product, categories: e.target.value })
              }
            >
              <Option value="men">Auction categorie: men</Option>
              <Option value="sport">Auction categorie: sport</Option>
              <Option value="Computer">Auction categorie: computer</Option>
              <Option value="Women">Auction categorie: women</Option>
              <Option value="gym">Auction categorie: gym</Option>
              <Option value="cellphones">Auction categorie: cellphones</Option>
              <Option value="children">Auction categorie: children</Option>
              <Option value="extreme">Auction categorie: extreme</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Input
          placeholder="Title"
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
        />
        <Input
          placeholder="description"
          onChange={(e) => setProduct({ ...product, desc: e.target.value })}
        />
        <Input
          placeholder="End auction"
          type="datetime-local"
          onChange={(e) =>
            setProduct({ ...product, endAuction: e.target.value })
          }
        />
        <Input
          placeholder="image"
          onChange={(e) => setProduct({ ...product, img: e.target.value })}
        />
        <Input
          placeholder="first price"
          type="number"
          min="0"
          onChange={(e) =>
            setProduct({
              ...product,
              price: e.target.value,
              allAuction: [{ user: "firstprice", price: e.target.value }],
            })
          }
        />

        
        
        {/* <Input
          placeholder="image"
          type="file"
          onChange={(e) => {
            setImg(e.target.files[0])
          }}
        /> */}
        <Button onClick={handleSubmit}>CREATE</Button>
        {err && <Error>Somthing Wrong</Error>  }
        {successUpload && <Success>Success to upload</Success>}
      </Form>
    </Wrapper>
  );
};

export default AddProduct;
