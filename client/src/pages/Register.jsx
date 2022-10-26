import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { register } from "../redux/apiCalls";
import { publicRequest } from "../requestMethods";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 110vh;
  /* background: linear-gradient(
      rgba(255, 255, 255, 255, 0.5),
      rgba(255, 255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/DG69bQ4/2.pngg") ; */

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #a1a1a1;
  ${mobile({ width: "75%" })}
`;
const Form = styled.form`
  display: flex;
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
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;
const LinkLogin = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Register = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault()
    const register  = async (user)=>{
      console.log(user);
      try {
          const res = await publicRequest.post("auth/register", user)
          console.log(res);
      } catch (error) {
          console.log(error);
      }
  }
  register(user)
  }
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="username" onChange={(e) => setUser({...user,username: e.target.value})}/>
          <Input placeholder="email" onChange={(e) => setUser({...user,email: e.target.value})}/>
          <Input placeholder="password" onChange={(e) => setUser({...user,password: e.target.value})}/>
          <Input placeholder="confirm password" onChange={(e) => setUser({...user,confirmPassword: e.target.value})}/>
          <Button onClick={handleSubmit}>CREATE</Button>
          <LinkLogin onClick={() => navigate("/login")}>Registered user? to the login page</LinkLogin>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
