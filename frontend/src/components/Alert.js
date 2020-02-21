import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { removeError, removeNotification } from "../redux/Alert/AlertActions";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  margin: 10px 0px;
  padding: 10px;
  height: 100%;
  background-color: ${props => props.color};
  width: 60%;
  border-radius: 10px;
  color: #fff;
`;

const Text = styled.h6`
  font-size: 0.8rem;
`;

export default function Alert({ msg, type }) {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      if (type !== "success") {
        dispatch(removeError(msg));
      } else {
        dispatch(removeNotification(msg));
      }
    }, 5000);
  }, []);

  return (
    <Flex>
      <Container color={type === "success" ? "#107C2E" : "#ff3b20"}>
        <Text>
          <i
            style={{ marginRight: "5px" }}
            className={`fas ${
              type === "success" ? "fa-check-circle" : "fa-exclamation-triangle"
            }`}
          ></i>{" "}
          {msg}
        </Text>
      </Container>
    </Flex>
  );
}
