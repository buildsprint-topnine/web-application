import styled from "styled-components";

export const Div = styled.div`
  flex: 1;
  margin-left: 30px;
  margin-right: 30px;
`;

export const Div2 = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const P = styled.p`
  line-height: 100px;
  color: #1f43d4;
`;

export const ItemCard = styled.div`
  /* border: 1px solid blue; */
  flex-basis: 300px;
  flex-shrink: 0;
  flex-grow: 0;
  width: 38%;
  margin: 1% 3%;
  border-radius: 4px;
  max-width: 300px;
  background-size: cover;
  background-position: center center;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;

  &:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
  img {
    width: 100%;
    max-height: 100px;
  }
`;

export const ItemContainer = styled.div`
  /* border: 2px solid red; */
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  padding: 0.25em 1em;
  width: 34%;
  background: #ffffff;
  border: 1px solid #f35667;
  box-sizing: border-box;
  border-radius: 5px;
  color: #f35667;
  margin-top: 4px;
  cursor: pointer;
  &:hover {
    color: white;
    background: #f35667;
  }
`;
