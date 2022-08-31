import React, { useState } from "react";
import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import model from "../img/model.png";
import {sliderItems} from "../data"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  postion: relative;
  overflow: hidden;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${props => props.slideIndex  * -100}vw);
  transition: all 1.5s ease;
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color:  #${props =>props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img``;

const InfoContainer = styled.div`
  flex: 1;
  padding: 100px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 30px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
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
  opacity: 0.7;
  z-index: 2;
`;

const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0)

  const handleClick = (direction) =>{
    if(direction === "left"){
      setSlideIndex(slideIndex > 0 ? slideIndex-1 :  2)
    }else{
      setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
    }

  }  
  return (
    <Container>
      <Arrow direction="left" onClick={() =>handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((items) =>(
          <Slide bg={items.bg}>
          <ImgContainer>
            <Image
              src={items.img}
              style={{ height: "76%", paddingLeft: "190px" }}
              />
          </ImgContainer>
          <InfoContainer>
            <Title>{items.title}</Title>
            <Description>
             {items.desc}
            </Description>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() =>handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
