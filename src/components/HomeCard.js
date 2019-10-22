import React from "react";
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";
import { Card, Icon } from "semantic-ui-react";
import styled from "styled-components";

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

// const TestDiv = styled.div`
//   border: 2px solid red;
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   border-radius: 5px;
//   box-shadow: 0 1px 6px -2px #000;
//   background-color: #fff;
//   margin-bottom: 30px;
//   align-items: center;
//   width: 300px;
//   height: 156px;
//   justify-content: space-between;

//   &:hover {
//     box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
//   }

//   h3 {
//     font-size: 1.4rem;
//   }
// `;

export default connect(
  state => {
    console.log(state);
    return state;
  },
  actionCreators
)(HomeCard);
