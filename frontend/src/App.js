import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Router from "./Router";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import AlertContainer from "./components/AlertContainer";
import { setUserToken } from "./redux/Auth/AuthActions";

const Container = styled.div`
  padding: 30px;
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(setUserToken(token));
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Container>
        <AlertContainer />
        <Router />
      </Container>
    </div>
  );
}

export default App;
