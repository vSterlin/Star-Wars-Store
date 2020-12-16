import React from "react";
import styled from "styled-components";
import red from "../assets/red.png";
import { ReactComponent as Credit } from "../assets/credit.svg";
import { colors } from "../utils/colors";
const StyledCard = styled.div`
  display: flex;
  height: 80%;
  border-radius: 10px;
  overflow: hidden;
`;

const CardImage = styled.img`
  /* flex: 7; */
  height: 100%;
  object-fit: cover;
`;

const ImageWrapper = styled.div`
  flex: 7;
  background-color: grey;
`;

const CardDescription = styled.div`
  flex: 3;
  /* background-color: #91A3B0; */
  background: rgb(255,255,255);
background: linear-gradient(30deg, rgba(140,150,160,1) 0%, rgba(145,163,176,1) 50%, rgba(180,190,200,1) 100%);
  padding: 40px;
`;

const size = 40;
const CreditIcon = styled(Credit)`
  width: ${size}px;
  height: ${size}px;
  fill: ${colors.white};
`;
const IconWrapper = styled.div`
  /* width: 100px;
  height: 50px; */
  display: flex;
  font-size: ${size}px;
`;

const BuyButton = styled.button`
  border: 2px solid black;
  border-radius: 5px;
  font-size: 30px;
  padding: 5px 20px;
  background-color: ${colors.white};
  font-weight: 300;
`;

const ButtonPriceWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  align-items: center;
  justify-content: space-around;


`;

const NewProductCard = () => {
  return (
    <StyledCard>
      <ImageWrapper>
        <CardImage src={red} width="100%" />
      </ImageWrapper>
      <CardDescription>
        <h2 style={{ marginBottom: 20 }}>Red Lightsaber</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          rerum ex optio voluptatibus, alias vel laborum, nulla corrupti
          eligendi veritatis labore, non hic incidunt suscipit tempore
          repudiandae repellat odit accusamus.
        </p>

        <ButtonPriceWrapper>

        <IconWrapper>
          <p>1000 </p><CreditIcon />
        </IconWrapper>

        <BuyButton>
        Buy
      </BuyButton>
      </ButtonPriceWrapper>

      </CardDescription>

    </StyledCard>
  );
};

export default NewProductCard;
