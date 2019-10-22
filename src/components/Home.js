import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import HomeCard from "./HomeCard";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

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
      <HomeCard things={state} />
      <NavLink to={`/update-item/${state.id}`}>Update Item</NavLink>
    </div>
  );
}

export default connect(state => state)(Home);
