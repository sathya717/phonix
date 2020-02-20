import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Alert from "./Alert";

const Container = styled.div``;

export default function AlertContainer() {
  const { alerts } = useSelector(state => state);

  return (
    <Container>
      {alerts.errors.length > 0 &&
        alerts.errors.map(error => <Alert msg={error.msg} />)}
      {alerts.notifications.length > 0 &&
        alerts.notifications.map(notify => (
          <Alert msg={notify.msg} type="success" />
        ))}
    </Container>
  );
}
