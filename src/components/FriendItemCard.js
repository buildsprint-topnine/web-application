import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 300px;
  img {
    max-width: 200px;
  }
`;

export default function FriendItemCard({ item }) {
  const url =
    "https://images.unsplash.com/photo-1515578706925-0dc1a7bfc8cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
  return (
    <div>
      <StyledDiv>
        <img
          src={
            item.image_url === "sggsege" ||
            item.image_url === "egserg" ||
            item.image_url === ""
              ? url
              : item.image_url
          }
          alt="avatar"
        />
      </StyledDiv>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </div>
  );
}
