import React from 'react';
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";
import styled from 'styled-components';

const Div = styled.div`
display:flex;
width: 580px;
flex-direction: column;
`;

const P = styled.div`
flex-direction: column;
`;

function FriendCard({ newFriend }) {

    console.log(newFriend);

    return (
        <Div>
            <P>{newFriend.name}</P>
            <P>{newFriend.email}</P>
        </Div>
    )
}

export default connect(
    state => {
        console.log(state);
        return state;
    },
    actionCreators
)(FriendCard);
