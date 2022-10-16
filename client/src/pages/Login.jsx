import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,  useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../redux/apiCalls";

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
  width: 25%;
  padding: 20px;
  background-color: #a1a1a1;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-style: 24px;
  font-weight: 300;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    /* cursor: not-allowed; */
  }
`;
const LinkTXT = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Error = styled.span`
  color: red;
`;
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleSubmit}>LOGIN</Button>
          {error && <Error>Something went wrong</Error>}
          <Link to="/register">
            <LinkTXT>CREATE A NEW ACCOUNT</LinkTXT>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
