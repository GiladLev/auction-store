import styled from "styled-components"


const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
`
const Image = styled.img`
    height: 75%;
`
const  Info= styled.div`
    
`
const  Circle= styled.div`
    
`
const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>

        </Info>
    </Container>
  )
}

export default Product