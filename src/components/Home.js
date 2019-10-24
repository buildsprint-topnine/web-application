import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import HomeCard from "./HomeCard";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import * as actionCreators from "../state/actionCreators";

function Home({ fetchItemsById, match, update }) {
  console.log(update);

  useEffect(() => {
    fetchItemsById(match.params.id);
  }, [match.params.id, fetchItemsById]);

  if (!update.data) {
    return <div>Loading information...</div>;
  }

  return (
    <div className="update-container">
      <DivStyle>
        <HomeCard things={update.data} />
      </DivStyle>
      <NavLink to={`/update-item/${update.data.id}`}>
        <Button>Update Item</Button>
      </NavLink>
    </div>
  );
}

export default connect(
  state => {
    console.log(state);
    return state;
  },
  actionCreators
)(Home);

const DivStyle = styled.div`
  -ms-flex-line-pack: center;
  width: 500px;
  margin: auto;
  margin-top: 30px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;

  img {
    width: 400px;
    margin-left: 50px;
  }
`;

const Button = styled.button`
  background: #f35667;
  border-radius: 8px;
  border: 2px solid #f35667;
  color: white;
  height: 40px;
  width: 160px;
  margin-top: 10px;
`;
