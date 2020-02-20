import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  width: 450px;

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
  margin-top: 20px;
`;

const SubTitle = styled.p`
  margin-top: 10px;
  font-weight: 300;
  font-size: 0.7rem;
`;

const Price = styled.p`
  margin-top: 5px;
  font-weight: 800;
  font-size: 1.1rem;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #0099e5;
  color: #fff;
  &:hover {
    cursor: pointer;
  }
`;

export default function ItemCard({ image, name, owner, price }) {
  return (
    <Container>
      <Image image={image} />
      <Name>{name}</Name>
      <SubTitle>sold by : {owner.username}</SubTitle>
      <Price>₹ {price * 72} /-</Price>
      <Button>Buy Now</Button>
    </Container>
  );
}
