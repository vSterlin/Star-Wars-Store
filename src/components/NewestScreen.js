import React from "react";
import styled from "styled-components";
import NewProductCard from "./NewProductCard";
import { colors } from "../utils/colors";
import red from "../assets/red.png";
import green from "../assets/green.png";
import blue from "../assets/blue.png";
import { ArrowBackIos, ArrowForwardIos } from "@styled-icons/material-twotone";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

const StyledSection = styled.section`
  height: 60%;
  width: 80%;
  margin: auto;
  color: ${colors.white};
`;

const StyledSwiper = styled(Swiper)`
  & .swiper-slide {
    opacity: 0.5;
    transition: opacity 1s linear;
  }
  & .swiper-slide-active {
    opacity: 1;
  }

  & .swiper-pagination-bullet {
    background-color: ${colors.white};
    /* &.swiper-pagination-bullet-active {
      background-color: white;
    } */
  }

  & .swiper-button-prev,
  .swiper-button-next {
    color: rgba(145, 163, 176, 1);
    &:hover {
      color: ${colors.white};
    }
  }
`;

const SliderWrapper = styled.div`
  position: relative;
  overflow: visible;
`;

const styleArrow = (Arrow) => styled(Arrow).attrs(({ className }) => ({
  className,
}))`
  color: rgba(145, 163, 176, 1);
  z-index: 100;
  &:hover {
    color: ${colors.white};
  }
  height: 50px;
`;

const ArrowWrapper = styled.div`
  position: absolute;
  height: 100%;

  display: flex;
  align-items: center;
  top: 0;
  &.prev {
    transform: translateX(-100%);
  }
  &.next {
    right: 0;
    transform: translateX(100%);
  }
`;

const LeftArrow = styleArrow(ArrowBackIos);
const RightArrow = styleArrow(ArrowForwardIos);

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

SwiperCore.use([Navigation, Pagination, Autoplay]);

const NewestScreen = () => {
  return (
    <StyledSection>
      <h2 style={{ marginBottom: 20 }}>Newest Products</h2>
      <SliderWrapper>
        <ArrowWrapper className="prev">
          <LeftArrow className="prev" />
        </ArrowWrapper>

        <StyledSwiper
          id="main"
          navigation={{
            nextEl: ".next", // arrows on the side of the slides
            prevEl: ".prev", // arrows on the side of the slides
          }}
          pagination
          spaceBetween={50}
          loop

          // loopedSlides={3}
          autoplay={{
            delay: 5000
          }}
          
        >
          {products.map((product) => (
            <SwiperSlide key={product.name}>
              <NewProductCard
                image={product.image}
                name={product.name}
                price={product.price}
              />
            </SwiperSlide>
          ))}
        </StyledSwiper>
        <ArrowWrapper className="next">
          <RightArrow className="next" />
        </ArrowWrapper>
      </SliderWrapper>
    </StyledSection>
  );
};

export default NewestScreen;
