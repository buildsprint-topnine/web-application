import React from "react";
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";

function HomeCard({ things }) {
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
)(HomeCard);
