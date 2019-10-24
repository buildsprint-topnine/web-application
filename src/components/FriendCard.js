import React from "react";
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  margin-top: 25px;
  line-height: 6px;
`;

const P = styled.p`
  margin: 15px;
  text-align: left;
  line-height: 2px;
  padding-left: 10px;
`;

const Div1 = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  width: 32px;
  height: 32px;
  line-height: 32px;
  background: #e5e5e5;
`;

function FriendCard({ newFriend }) {
  return (
    <Div>
      <Div1>{newFriend.name[0].toUpperCase()}</Div1>

      <div>
        <P>{newFriend.name}</P>
        <P>{newFriend.email}</P>
      </div>
    </Div>
  );
}

export default connect(
  state => {
    return state;
  },
  actionCreators
)(FriendCard);
