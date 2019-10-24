import React, { useEffect } from "react";
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FriendCard from "../components/FriendCard";
import styled from "styled-components";

const Div = styled.div`
  flex: 1;
  margin-left: 50px;
  margin-right: 50px;
`;

function FriendList(props) {
  const { friendList, friend } = props;

  useEffect(() => {
    friendList();
  }, [friendList]);

  return (
    <Div>
      <h2>Your Friends</h2>
      {friend.data.map((newFriend, index )=> (
        <Link to={`/dashboard/friends/${newFriend.id}/topnine`}>
          <div className="mapped-friend" key={index}>
            <FriendCard newFriend={newFriend} />
          </div>
        </Link>
      ))}
    </Div>
  );
}

export default connect(
  state => {
    return state;
  },
  actionCreators
)(FriendList);
