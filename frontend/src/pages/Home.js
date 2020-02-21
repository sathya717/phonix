import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser, fetchAvailableItems } from "../redux/user/UserActions";
import ItemCard from "../components/ItemCard";
import styled from "styled-components";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

/* 

  TODO : 

    [] IMPLEMENT USER AND ITEM FETCH IN app.js



*/

export default function Home({ history }) {
  const { auth, account } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const { token } = auth;
    if (!account.user) {
      dispatch(fetchUser(token, history));
    }
    if (!account.available_items) {
      dispatch(fetchAvailableItems(token));
    }
  }, []);

  return (
    <div>
      <CardContainer>
        {account.available_items &&
          account.available_items.map(item => <ItemCard {...item} />)}
      </CardContainer>
    </div>
  );
}
