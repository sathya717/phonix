import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80vh;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    flex-wrap: wrap;
  }
`;

const Item = styled.div`
  width: 45%;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 40px;
  }
  /* height: 100%; */
`;

export default function Login({ history }) {
  const { auth } = useSelector(state => state);

  useEffect(() => {
    if (auth.token) {
      history.push("/");
    }
  });

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
