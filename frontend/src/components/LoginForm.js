import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUserToken } from "../redux/Auth/AuthActions";
import {
  Button,
  Container,
  FormContainer,
  Input,
  InputGroup,
  Label,
  Title
} from "./styledComponents";

export default function LoginForm() {
  const dispatch = useDispatch();

  const [{ username, password }, setState] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setState({
      username,
      password,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = e => {
    dispatch(fetchUserToken({ username, password }));
  };

  return (
    <Container>
      <Title>LOGIN</Title>
      <FormContainer className="login-form">
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
