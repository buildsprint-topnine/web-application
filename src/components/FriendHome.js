import React, { useState, useEffect } from "react";
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";
import { Route, NavLink } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";

// function FriendHome(props) {
//   const { fetchFriendsItems, friendItem } = props;
//   //debugger;
//   console.log(props);

//   useEffect(() => {
//     //debugger;
//     fetchFriendsItems();
//   }, [fetchFriendsItems]);

//   return (
//     <div>
//       <h2>Friend's Top 9</h2>
//       {friendItem.data.topNine.map(char => (
//         <div key={char.id}>
//           <HomeCard things={char} />
//         </div>
//       ))}
//     </div>
//   );
// }

const initialFriendItem = [];

function FriendHome(props) {
  const [topNine, setTopNine] = useState(initialFriendItem);
  const id = props.match.params.id;
  console.log(props);

  useEffect(() => {
    axiosWithAuth()
      .get(`https://bw-my-top-nine.herokuapp.com/users/${id}/top-nine`)
      .then(res => {
        return setTopNine(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  }, []);

  return (
    <div>
      <h2>Friend's Top 9</h2>
      {topNine.map(item => (
        <div key={item.id}>
          <FriendItemCard item={item} />
        </div>
      ))}
    </div>
  );
}

function FriendItemCard({ item }) {
  return (
    <div>
      <div>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

// export default connect(
//   state => {
//     console.log(state);
//     return state;
//   },
//   actionCreators
// )(FriendHome);

export default FriendHome;
