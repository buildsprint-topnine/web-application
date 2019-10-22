import React from "react";
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";
import SideBar from "./SideBar";
import HomeList from "./HomeList";
import FriendList from "./FriendsList";
import { Route, NavLink, Redirect } from "react-router-dom";
import styled from "styled-components";
import Favicon from "react-favicon";

function DashBoard(props) {
  //console.log(props);
  const onLogout = () => {
    localStorage.removeItem("token");
    props.history.push("/");
  };
  return (
    <div>
      <NavDiv className="sideBar">
        <Favicon />
        <NavLink exact to="/dashboard/home">
          <div>
            <h3>Home</h3>
          </div>
        </NavLink>
        <NavLink exact to="/dashboard/friends">
          <div>
            <h3>Friends</h3>
          </div>
        </NavLink>
        <NavLink exact to="/" onClick={onLogout}>
          <div>
            <h3>Logout</h3>
          </div>
        </NavLink>
      </NavDiv>

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
    </div>
  );
}
// function withAuthCheck(Component, routeProps) {
//   if (localStorage.getItem("token")) {
//     return <Component {...routeProps} />;
//   }
//   return <Redirect to="/" />;
// }

const NavDiv = styled.div`
  div {
    width: 160px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    background: #f5f5f5;

    &:hover {
      width: 160px;
      height: 80px;

      background: #ffffff;
    }

    h3 {
      width: 71px;
      height: 30px;
      left: 31px;
      top: 205px;

      font-family: Ubuntu;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 150%;

      display: flex;
      align-items: center;

      color: #95a2b3;
      &:hover {
        width: 56px;
        height: 30px;

        font-family: Ubuntu;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 150%;

        display: flex;
        align-items: center;

        color: #f35667;
      }
    }
  }
`;
export default connect(
  state => {
    //console.log(state);
    return state;
  },
  actionCreators
)(DashBoard);
