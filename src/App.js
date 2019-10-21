import React from "react";
import { connect } from "react-redux";
import { Route, NavLink, withRouter, Redirect } from "react-router-dom";
import * as actionCreators from "./state/actionCreators";
import "./App.css";
import Dashboard from "./components/DashBoard";

function App() {
  return (
    <div className="App">
      <h1>Hello Build</h1>
      <Route
        path="/dashboard"
        render={props => withAuthCheck(Dashboard, props)}
      />
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
