import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 10px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputGroup = styled.div`
  margin: 10px 0px;
`;

export const Input = styled.input`
  color: #fff;
  padding: 10px 0px;
  width: 40%;
  /* border: none; */
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #000;
  padding: 5px 10px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  margin-top: 30px;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  color: #fff;
  background-color: #00d7ad;
`;
