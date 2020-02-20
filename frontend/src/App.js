import React from "react";
import "./App.css";
import Router from "./Router";
import Navbar from "./components/Navbar";
import styled from "styled-components";

const Container = styled.div`
  padding: 30px;
`;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Router />
      </Container>
    </div>
  );
}

export default App;
