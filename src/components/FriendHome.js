import React, { useEffect } from "react";
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";
import { Route, NavLink } from "react-router-dom";
import AddItem from "./AddItemForm";
import HomeCard from "./HomeCard";
import styled from "styled-components";

function FriendHome(props) {
  const { fetchItems, item } = props;
  //debugger;
  console.log(props);

  useEffect(() => {
    //debugger;
    fetchItems();
  }, [fetchItems]);

  return (
    <div>
      <h2>Welcome</h2>
      <NavLink to="/home/additem">
        <button className="lg-form-button">Add Your Favs!</button>
      </NavLink>

      {item.data.topNine.map(char => (
        <div key={char.id}>
          <HomeCard things={char} />
        </div>
      ))}
    </div>
  );
}

// const FirstDiv = styled.div`
//   border: 2px solid green;
//   display: flex;
//   flex-direction: row;
//   margin-left: 198px;
//   margin-top: 10px;
//   justify-content: space-evenly;
//   width: 1117px;
// `;

function HomeCard({ things }) {
  //debugger;
  console.log(things);

  return (
    <div>
      <div>
        <Card.Header>
          <h2>{things.title}</h2>
        </Card.Header>
        <Card.Description>
          <p>{things.description}</p>
        </Card.Description>
      </div>
    </div>
  );
}

export default connect(
  state => {
    console.log(state);
    return state;
  },
  actionCreators
)(FriendHome);
