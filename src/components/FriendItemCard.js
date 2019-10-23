import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 300px;
  img {
    max-width: 200px;
  }
`;

export default function FriendItemCard({ item }) {
  console.log(item.image_url);
  return (
    <div>
      <StyledDiv>
        <img src={item.image_url} alt="Null" />
      </StyledDiv>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </div>
  );
}
