import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUserToken, createNewUser } from "../redux/Auth/AuthActions";
import {
  Button,
  Container,
  FormContainer,
  Input,
  InputGroup,
  Label,
  Title
} from "./styledComponents";

export default function SignUpForm() {
  const dispatch = useDispatch();

  const [{ username, password, email }, setState] = useState({
    username: "",
    password: "",
    email: ""
  });

  const handleChange = e => {
    setState({
      username,
      password,
      email,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = e => {
    dispatch(createNewUser({ username, password, email }));
  };

  return (
    <Container>
      <Title>CREATE A NEW ACCOUNT</Title>
      <FormContainer className="login-form">
        <InputGroup>
          <Label>Email:</Label>
          <Input
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <Label>Username:</Label>
          <Input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <Label>Password:</Label>
          <Input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
          />
        </InputGroup>
        <Button onClick={handleClick}>LOGIN</Button>
      </FormContainer>
    </Container>
  );
}
