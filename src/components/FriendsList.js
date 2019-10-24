import React, { useEffect } from "react";
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FriendCard from "../components/FriendCard";
import styled from "styled-components";
import TopBarFriends from "../components/TopBarFriends";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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
  console.log(friend);

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

      {/* {friend.isFetching && (
        <>
          <h2>Loading...</h2>
          <Loader type="TailSpin" color="#f35667" height={80} width={80} />
        </>
      )} */}
    </Div>
  );
}

export default connect(
  state => {
    return state;
  },
  actionCreators
)(FriendList);
