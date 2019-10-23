import React from "react";
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";
import styled from "styled-components";

function HomeCard({ things }) {
  console.log(things.image_url);
  return (
    <div>
      <StyledDiv>
        <img src={things.image_url} alt="Null" />
      </StyledDiv>
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

const StyledDiv = styled.div`
  max-width: 300px;
  img {
    max-width: 200px;
  }
`;
