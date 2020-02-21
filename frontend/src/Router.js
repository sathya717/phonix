import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./pages/Home";
import Item from "./pages/Item";
import CreateItem from "./pages/CreateItem";

export default function Router() {
  return (
    <>
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/new/item" component={CreateItem} />
        <Route exact path="/items/:id" component={Item} />
      </Switch>
    </>
  );
}
