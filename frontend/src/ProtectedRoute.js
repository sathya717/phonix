import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export default function ProtectedRoute({ component: Component, ...props }) {
  const { auth } = useSelector(state => state);

  return (
    <Route
      {...props}
      render={props => {
        if (auth.token) {
          return <Component {...props} />;
        } else {
          return <Redirect to={{ pathname: "/login" }} />;
        }
      }}
    />
  );
}
