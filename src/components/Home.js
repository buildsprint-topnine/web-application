import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import HomeCard from "./HomeCard";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

function Home(props) {
  const [state, setState] = useState({});
  useEffect(() => {
    fetchMovie(props.match.params.id);
  }, [props.match.params.id]);

  const fetchMovie = id => {
    axiosWithAuth()
      .get(`https://bw-my-top-nine.herokuapp.com/home/${id}`)
      .then(res => {
        return setState(res.data);
      })
      .catch(err => console.log(err.response));
  };

  if (!state) {
    return <div>Loading information...</div>;
  }

  return (
    <div className="update-container">
      <DivStyle>
        <HomeCard things={state} />
      </DivStyle>
      <NavLink to={`/update-item/${state.id}`}>
        <Button>Update Item</Button>
      </NavLink>
    </div>
  );
}

export default connect(state => state)(Home);

const DivStyle = styled.div`
  border: 5px solid black;
  margin-left: 29%;
  margin-right: 20%;
  margin-top: 5%;
  border-radius: 8px;
  align-content: center;
  background: rgb(214, 202, 245);
  opacity: 0.9;
  box-shadow: 2px 2px;
  width: 40%;
  display: flex;
  justify-content: center;
  img {
    margin-top: 2px;
  }
`;

const Button = styled.button`
  background: #f35667;
  border-radius: 8px;
  border: 2px solid #276fd6;
  color: white;
  padding: 0.25em 1em;
  height: 40px;
  width: 160px;
  margin-top: 10px;
`;
