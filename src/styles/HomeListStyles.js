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
  border: 1px solid white;
  flex-basis: 300px;
  flex-shrink: 0;
  flex-grow: 0;
  width: 38%;
  margin: 1% 3%;
  box-shadow: 0px 3px 8px rgba(56, 105, 160, 0.25);
  border-radius: 4px;
  max-width: 300px;

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
/* swapped the hover effect */
  padding: 0.25em 1em;
  width: 34%;
  background: #f35667;
  border: 1px solid #f35667;
  margin-bottom:10px;
  box-sizing: border-box;
  border-radius: 5px;
  color: #fff;
  margin-top: 4px;
  cursor: pointer;
  &:hover {
    color: #f35667;
    background: white ;
  }
`;
