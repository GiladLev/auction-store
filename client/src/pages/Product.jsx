import styled from "styled-components"

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImageContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between !important;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 1px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`

const Product = () => {
  return (
    <Container>
        <Wrapper>
            <ImageContainer>
                <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png"/>
            </ImageContainer>
            <InfoContainer>
                <Title>Proudct</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolor consequatur illum nostrum nemo perspiciatis dicta, ipsam est minus fugiat quidem itaque sapiente eum ipsum illo ad, animi quisquam necessitatibus.</Desc>
                <Price>10$</Price>
                <AddContainer>
                    <Amount>1</Amount>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
    </Container>
  )
}

export default Product