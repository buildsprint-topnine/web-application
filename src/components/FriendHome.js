import React, { useState, useEffect } from "react";
import FriendItemCard from "./FriendItemCard";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";

const Div = styled.div`
  flex: 1;
  flex-direction: row;
  width: 100%;
  position: absolute;
  top: 5%;
  left: 10%;
  
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
  display: flex;
  flex-wrap: wrap;
`;

const initialFriendItem = [];

const FriendHome = props => {
  const [topNine, setTopNine] = useState(initialFriendItem);
  const id = props.match.params.id;

  useEffect(() => {
    axiosWithAuth()
      .get(`https://bw-my-top-nine.herokuapp.com/users/${id}/top-nine`)
      .then(res => {
        return setTopNine(res.data);
      })
      .catch(err => err.response);
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
