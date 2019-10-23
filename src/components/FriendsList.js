import React, { useEffect } from "react";
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FriendCard from "../components/FriendCard";
import styled from "styled-components";
import TopBar from "../components/TopBar";

const Div = styled.div`
  flex: 1;
  margin-left: 50px;
  margin-right: 50px;
`;

const H2 = styled.h2`
  margin: 20px 0px;
  text-align: left;
  color: #4183c6;
`;

function FriendList(props) {
  console.log(props);
  const { friendList, friend } = props;
  // console.log(friend);

  useEffect(() => {
    friendList();
  }, [friendList]);

  return (
    <Div>
      {/* <TopBar/> */}

      <h2>Your Friends</h2>
      {friend.data.map(newFriend => (
        <Link to={`/dashboard/friends/${newFriend.id}/topnine`}>
          <div className="mapped-friend" key={newFriend.id}>
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
