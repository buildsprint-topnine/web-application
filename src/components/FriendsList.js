import React, { useEffect } from "react";
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import FriendCard from "../components/FriendCard";


function FriendList(props) {
const {friendList, friend } = props;
console.log(friend);
console.log(props);

useEffect(() => {
  friendList();
}, [friendList]);

  return <div>
    <h2>Friends</h2>
    
    {
      friend.data.map(newFriend => (
        <div key={newFriend.id}>
          <FriendCard newFriend={newFriend}/>
        </div>
      ))
    }
    
  </div>;
}


export default connect(
  state => {
    // console.log(state);
    return state;
  },
  actionCreators
)(FriendList);
