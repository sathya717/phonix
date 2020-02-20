import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";

export default function Router() {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
    </>
  );
}
