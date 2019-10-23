import React, { useEffect } from "react";
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import HomeCard from "./HomeCard";
import styled from "styled-components";
import TopBar from "./TopBar";

const Div = styled.div`
  flex: 1;
  margin-left: 30px;
  margin-right: 30px;
`;

const Div2 = styled.div`
  display: flex;
  justify-content: space-between;
`;

const P = styled.p`
  line-height: 100px;
`;

const ItemCard = styled.div`
  /* border: 1px solid blue; */
  flex-basis: 300px;
  flex-shrink: 0;
  flex-grow:0;
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

const Button = styled.button`
  padding: 0.25em 1em;
  width: 34%;
  background: #ffffff;
  border: 1px solid #f35667;
  box-sizing: border-box;
  border-radius: 5px;
  color: #f35667;
  margin-top: 6px;
  cursor: pointer;
  &:hover {
    color: white;
    background: #f35667;
  }
`;

function HomeList(props) {
  //debugger;
  const { fetchItems, item, deleteItem } = props;

  console.log(item);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  function delItem(e, id) {
    e.preventDefault();
    deleteItem(id);
  }

  return (
    <Div>
      {/* imported topbar component */}
      <TopBar handle={item} />

      <Div2>
        <P>Hey {item.data.name}, Welcome! </P>
        <NavLink to="/home/additem">
          <button className="lg-form-button">Add Your Favs!</button>
        </NavLink>
      </Div2>
      <ItemContainer>
        {item.data.topNine.map(char => (
          <ItemCard key={char.id}>
            <div>
              <NavLink to={`/item/${char.id}`}>
                <HomeCard things={char} />
                <Button
                  onClick={function(e) {
                    return delItem(e, char.id);
                  }}
                >
                  Delete Item
                </Button>
              </NavLink>
            </div>
          </ItemCard>
        ))}
      </ItemContainer>
    </Div>
  );
}

export default connect(
  state => {
    return state;
  },
  actionCreators
)(HomeList);
