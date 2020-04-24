import React from "react";
import { connect } from "react-redux";
import { Route, withRouter, Redirect } from "react-router-dom";
import * as actionCreators from "./state/actionCreators";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import "./App.css";
import Dashboard from "./components/DashBoard";
import AddItem from "./components/AddItemForm";
import Home from "./components/Home";
import UpdatedItem from "./components/UpdatedItem";
import FriendHome from "./components/FriendHome";


function App() {
  return (
    <div className="App">
      <Route
        path="/dashboard"
        render={props => withAuthCheck(Dashboard, props)}
      />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/" component={Login} />
      <Route exact path="/home/additem" render={props => <AddItem {...props} />} />
      <Route path="/item/:id" render={props => {
          return <Home {...props} />;
        }}
      />
      <Route path="/update-item/:id" component={UpdatedItem} />
      <Route exact path="/dashboard/friends/:id/topnine" component={FriendHome}/>
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
