import React from "react";
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";
import HomeList from "./HomeList";
import FriendList from "./FriendsList";
import { Route, NavLink, Redirect } from "react-router-dom";
import styled from "styled-components";
import Home from "./Home";

function DashBoard(props) {
  const onLogout = () => {
    localStorage.removeItem("token");
    props.history.push("/");
  };
  return (
    <div className="m-container">
      <div className="sideBar">
        <NavLink exact to="/dashboard/home">
          <div className="sidebar-div">
            <h3>Home</h3>
          </div>
        </NavLink>
        <NavLink exact to="/dashboard/friends">
          <div className="sidebar-div">
            <h3>Friends</h3>
          </div>
        </NavLink>
        <NavLink exact to="/" onClick={onLogout}>
          <div className="sidebar-div">
            <h3>Logout</h3>
          </div>
        </NavLink>
      </div>

      <Route
        exact
        path="/dashboard/home"
        render={props => <HomeList {...props} />}
      />
      <Route
        exact
        path="/dashboard/friends"
        render={props => <FriendList {...props} />}
      />
      <Route
        path="/movies/:id"
        render={props => {
          return <Home {...props} />;
        }}
      />
    </div>
  );
}

export default connect(
  state => {
    return state;
  },
  actionCreators
)(DashBoard);
