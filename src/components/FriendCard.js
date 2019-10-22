import React from 'react';
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";

function FriendCard({ newFriend }) {

    console.log(newFriend);

    return (
        <div>
            <p> <h1>{newFriend.name}</h1></p>
            <p> <h2>{newFriend.email}</h2></p>
        </div>
    )
}

export default connect(
    state => {
        console.log(state);
        return state;
    },
    actionCreators
)(FriendCard);
