import React from "react";
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";
import styled from "styled-components";

function HomeCard({ things }) {
  const url =
    "https://images.unsplash.com/photo-1476611317561-60117649dd94?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
  return (
    <div>
      <StyledDiv>
        <img src={things.image_url ? things.image_url : url} alt="avatar" />
      </StyledDiv>
      <h3>{things.title}</h3>
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
  max-width: 100%;
  img {
    max-width: 80%;
  }
`;
