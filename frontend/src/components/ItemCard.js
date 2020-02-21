import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 10px;

  padding: 30px 0px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  width: 450px;
  transition: all 0.5s;

  &:hover {
    transform: translateY(10px);
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
      0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
      0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
      0 100px 80px rgba(0, 0, 0, 0.07);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
  /* background-color: #ccc; */
`;

const Image = styled.div`
  height: 60%;
  width: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center center;
`;

const Name = styled.h6`
  font-size: 0.9rem;
  font-weight: 300;
  margin-top: 40px;
`;

const SubTitle = styled.p`
  margin-top: 10px;
  font-weight: 300;
  font-size: 0.7rem;
`;

const Price = styled.p`
  margin-top: 10px;
  font-weight: 800;
  font-size: 1.1rem;
`;

const FlexButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: ${props => props.color};
  color: #fff;
  &:hover {
    cursor: pointer;
  }
`;

export default function ItemCard({ image, name, owner, price, _id }) {
  return (
    <Container>
      <Image image={image} />
      <Name>{name}</Name>
      <SubTitle>sold by : {owner.username}</SubTitle>
      <Price>₹ {price * 72} /-</Price>
      <FlexButton>
        <Button color="#0099e5">
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={`/items/${_id}`}
          >
            More Details
          </Link>
        </Button>
        <Button color="#29D700">
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={`/items/${_id}`}
          >
            Add to Cart
          </Link>
        </Button>
      </FlexButton>
    </Container>
  );
}
