import React from "react";
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";
//import SideBar from "./SideBar";
import HomeList from "./HomeList";
import { Route, NavLink, Redirect } from "react-router-dom";
import styled from "styled-components";

function DashBoard(props) {
  //console.log(props);
  return (
    <div>
      <NavDiv className="sideBar">
        <NavLink exact to="/dashboard/home">
          <div>
            <h3>Home</h3>
          </div>
        </NavLink>
        <NavLink exact to="/friends">
          <div>
            <h3>Friends</h3>
          </div>
        </NavLink>
        <NavLink exact to="/logout">
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
      {/* <HomeList {...props} /> */}
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
  border: 2px solid red;
  div {
    width: 160px;
    height: 80px;
    /* left: 0px;
    top: 180px; */
    display: flex;
    justify-content: center;
    align-items: center;

    /* Light Grey */

    background: #f5f5f5;

    &:hover {
      width: 160px;
      height: 80px;
      /* left: 0px;
      top: 100px; */

      /* White */

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
      /* identical to box height, or 30px */

      display: flex;
      align-items: center;

      /* Support */

      color: #95a2b3;
      &:hover {
        width: 56px;
        height: 30px;

        font-family: Ubuntu;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 150%;
        /* identical to box height, or 30px */

        display: flex;
        align-items: center;

        /* Primary */

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
