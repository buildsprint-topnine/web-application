import React from "react";
import { connect } from "react-redux";
import { Route, NavLink, withRouter, Redirect } from "react-router-dom";
import * as actionCreators from "./state/actionCreators";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello Build</h1>
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
    </div>
  );
}

function withAuthCheck(Component, props) {
  if (localStorage.getItem("token")) {
    return <Component {...props} />;
  }
  return <Redirect to="/" />;
}

export default withRouter(
  connect(
    state => state,
    actionCreators
  )(App)
);
