import React from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80vh;
  align-items: center;
`;

const Item = styled.div`
  width: 45%;
  /* height: 100%; */
`;

export default function Login() {
  return (
    <div>
      <Container>
        <Item>
          <LoginForm />
        </Item>
        <Item>
          <SignUpForm />
        </Item>
      </Container>
    </div>
  );
}
