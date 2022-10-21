
import styled from "styled-components";
import Navbar from "../components/Navbar";
import TableAllAuction from "../components/TableAllAuction";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
width: 80%;
  height: 80%;
`;


const AllAuction = () => {

  return (
    <div>
      <Navbar />
      <Container>
        <Wrapper>
          <TableAllAuction />
        </Wrapper>
      </Container>
    </div>
  );
};

export default AllAuction;
