import React, { useState } from "react";
import styled from "styled-components";
import {
  FormContainer,
  InputGroup,
  Input,
  Button,
  Label
} from "../components/styledComponents";
import { useDispatch, useSelector } from "react-redux";
import { createNewItem } from "../redux/user/UserActions";

const Container = styled.div`
  max-width: 600px;
  margin: 20px auto;
  text-align: center;
  border: 1px solid #ccc;
`;

const Title = styled.h2`
  font-weight: 300;
  font-size: 1.7rem;
  text-transform: uppercase;
  margin: 20px 0px;
`;

const FormInput = styled(Input)`
  background-color: #fff;
  color: #000;
`;

export default function CreateItem() {
  const dispatch = useDispatch();
  const { auth } = useSelector(state => state);

  const [{ name, price, image, type }, setState] = useState({
    name: "",
    price: 0,
    image: "",
    type: "mobile"
  });

  const handleChange = e => {
    setState({
      name,
      price,
      image,
      type,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    dispatch(
      createNewItem(auth.token, {
        name,
        image,
        type,
        price: parseInt(price)
      })
    );
    setState({
      name: "",
      price: 0,
      image: "",
      type: "mobile"
    });
  };

  return (
    <Container>
      <Title>create a new item</Title>
      <FormContainer>
        <InputGroup>
          <Label>Name:</Label>
          <FormInput
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <Label>Price:</Label>
          <FormInput
            type="text"
            name="price"
            value={price}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <Label>Image:</Label>
          <FormInput
            type="text"
            name="image"
            value={image}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <Label>Type:</Label>
          <input
            style={{ marginRight: "5px" }}
            type="radio"
            id="mobile"
            name="type"
            value="mobile"
            onChange={handleChange}
          />
          <label style={{ marginRight: "20px" }} for="mobile">
            mobile
          </label>
          <input
            style={{ marginRight: "5px" }}
            type="radio"
            id="laptop"
            name="type"
            value="laptop"
            onChange={handleChange}
          />
          <label style={{ marginRight: "20px" }} for="laptop">
            laptop
          </label>
        </InputGroup>

        <Button onClick={handleSubmit} style={{ margin: "10px" }}>
          CREATE ITEM
        </Button>
      </FormContainer>
    </Container>
  );
}
