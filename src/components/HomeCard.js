import React from "react";
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";

function HomeCard({ things }) {
  return (
    <div>
      <h2>{things.title}</h2>

      <p>{things.description}</p>
    </div>
  );
}

export default connect(
  state => {
    return state;
  },
  actionCreators
)(HomeCard);
