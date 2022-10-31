import styled from "styled-components";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { useCallback, useEffect, useRef, useState } from "react";
import { sliderItems } from "../data";
import { mobile, tablet } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px) !important;
  display: flex;
  position: relative;
  overflow: hidden;
  padding-top: 60px;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  ${tablet({ height: "25px", width: "25px" })}
`;
const ArrowUpAndDown = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  top: ${(props) => props.direction === "up" && "70px"};
  bottom: ${(props) => props.direction === "down" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  ${tablet({ height: "25px", width: "25px" })}
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const WrapperUpandDown = styled.div`
  transition: all 1.5s ease;
  transform: translateY(${(props) => props.slideIndexUpandDown * -100}vh);
`;
const Slide = styled.div`
  width: 100vw;
  height: 98vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  ${tablet({ flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 0.8;

  ${tablet({ height: "60%", flex: "2" })}
`;

const Image = styled.img`
  height: 80%;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoContainer = styled.div`
  flex: 2;
  padding: 50px;
  ${tablet({ flex: 1, padding: "10px" })}
`;
const Row = styled.div`
  display: flex;
  width: 300vw;
`;

const Title = styled.h1`
  font-size: 70px;
  text-transform: uppercase;
  ${tablet({ fontSize: "40px" })}
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  ${tablet({ fontSize: "10px", margin: "0px" })}
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  ${tablet({ fontSize: "10px", margin: "20px 0" })}
`;
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideIndexUpandDown, setslideIndexUpandDown] = useState(0);
  const [scrollUp, setScrollUP] = useState(false);
  const [down, setDown] = useState(true);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  const handleClickUpandDown = (direction) => {
    if (direction === "up") {
      setslideIndexUpandDown(
        slideIndexUpandDown > 0 ? slideIndexUpandDown - 1 : 2
      );
    } else {
      setslideIndexUpandDown(
        slideIndexUpandDown < 2 ? slideIndexUpandDown + 1 : 0
      );
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <MdOutlineKeyboardArrowLeft />
      </Arrow>
      <ArrowUpAndDown direction="up" onClick={() => handleClickUpandDown("up")}>
        <MdKeyboardArrowUp />
      </ArrowUpAndDown>
      <Wrapper slideIndex={slideIndex}>
        <WrapperUpandDown slideIndexUpandDown={slideIndexUpandDown}>
          {sliderItems.map((row, indexRow) => {
            return (
              <Row className="row" key={indexRow}>
                {row.map((item, index) => {
                  return (
                    <Slide bg={item.bg} key={index}>
                      <ImgContainer>
                        <Image src={item.img} />
                      </ImgContainer>
                      <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        {item.id!==1 && <Link to={`/products/${item.catagories}`}>
                          <Button>SHOW NOW</Button>
                        </Link>}
                      </InfoContainer>
                    </Slide>
                  );
                })}
              </Row>
            );
          })}
        </WrapperUpandDown>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <MdOutlineKeyboardArrowRight />
      </Arrow>
      <ArrowUpAndDown
        direction="down"
        onClick={() => handleClickUpandDown("down")}
      >
        <MdKeyboardArrowDown />
      </ArrowUpAndDown>
    </Container>
  );
};

export default Slider;
