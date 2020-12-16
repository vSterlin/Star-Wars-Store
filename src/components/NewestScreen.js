import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import NewProductCard from "./NewProductCard";
import { colors } from "../utils/colors";
import red from "../assets/red.png";
import green from "../assets/green.png";
import blue from "../assets/blue.png";
import { ArrowBackIos, ArrowForwardIos } from "@styled-icons/material-twotone";
const StyledSection = styled.section`
  height: 60%;
  width: 80%;
  margin: auto;
  color: ${colors.white};
`;

const StyledSlider = styled(Slider)`
  & .slick-dots li.slick-active button:before {
    color: ${colors.white};
    opacity: 1;
  }
  & .slick-dots li button:before {
    color: rgba(145,163,176,1);

  }

  /* & .slick-list {
    overflow: visible;
  } */



`;

const styleArrow = (Arrow) => styled(Arrow)`
  color: rgba(145, 163, 176, 1);

  &:hover {
    color: ${colors.white};
  }

`;

const LeftArrow = styleArrow(ArrowBackIos);
const RightArrow = styleArrow(ArrowForwardIos);

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <LeftArrow />,
  nextArrow: <RightArrow />,

};

const products = [
  {
    name: "Red",
    image: red,
    price: 1000,
  },
  {
    name: "Green",
    image: green,
    price: 1000,
  },
  {
    name: "Blue",
    image: blue,
    price: 1000,
  },
];

const NewestScreen = () => {
  return (
    <StyledSection>
      <h2 style={{ marginBottom: 20 , marginLeft: 20}}>Newest Products</h2>
      <StyledSlider {...sliderSettings}>
        {products.map((product) => (
          <NewProductCard
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </StyledSlider>
    </StyledSection>
  );
};

export default NewestScreen;
