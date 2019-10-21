import React from "react";
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";
//import SideBar from "./SideBar";
import HomeList from "./HomeList";
import { Route, NavLink, Redirect } from "react-router-dom";

function DashBoard(props) {
  //console.log(props);
  return (
    <div>
      <NavLink exact to="/dashboard/home">
        Home
      </NavLink>
      <NavLink exact to="/friends">
        Friends
      </NavLink>
      <NavLink exact to="/logout">
        Logout
      </NavLink>
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
export default connect(
  state => {
    //console.log(state);
    return state;
  },
  actionCreators
)(DashBoard);
