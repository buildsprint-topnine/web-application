import React, { useState, useEffect } from "react";
// import * as actionCreators from "../state/actionCreators";
// import { connect } from "react-redux";
import FriendItemCard from "./FriendItemCard";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";

const Div = styled.div`
  flex: 1;
  margin-left: 200px;
  /* margin-right: 30px; */
  align-items: center;
`;

const ItemCard = styled.div`
  flex-basis: 300px;
  flex-shrink: 0;
  flex-grow: 0;
  width: 38%;
  margin: 1% 3%;
  box-shadow: 0px 3px 8px rgba(56, 105, 160, 0.25);
  border-radius: 4px;
`;

const ItemContainer = styled.div`
  /* border: 2px solid red; */
  display: flex;
  flex-wrap: wrap;
`;

const initialFriendItem = [];

const FriendHome = props => {
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
  }, [id]);

  if (!topNine) {
    return <div>Loading Friend's Item information...</div>;
  }

  return (
    <Div>
      <ItemContainer>
        {topNine.map(item => (
          <ItemCard key={item.id}>
            <div>
              <FriendItemCard item={item} />
            </div>
          </ItemCard>
        ))}
      </ItemContainer>
    </Div>
  );
};

export default FriendHome;
