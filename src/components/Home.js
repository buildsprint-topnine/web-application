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
        //debugger;
        return setState(res.data);
      })
      .catch(err => console.log(err.response));
  };

  if (!state) {
    return <div>Loading information...</div>;
  }

  return (
    <div>
      <DivStyle>
        <HomeCard things={state} />
      </DivStyle>
      <NavLink to={`/update-item/${state.id}`}>Update Item</NavLink>
    </div>
  );
}

export default connect(state => state)(Home);

const DivStyle = styled.div`
  border: 2px solid red;
  margin:10%;
  align-content: center;
  img{
    border:2px solid green;
  }
`;
