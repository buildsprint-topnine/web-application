import React, { useEffect } from "react";
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import HomeCard from "./HomeCard";
import {
  Div,
  Div2,
  P,
  ItemContainer,
  ItemCard,
  Button
} from "../styles/HomeListStyles";

import TopBar from "./TopBar";

function HomeList(props) {
  const { fetchItems, item, deleteItem } = props;

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
        <P style={{ fontFamily: "Ubuntu, sans-serif" }}>
          Hey {item.data.name}, Welcome!{" "}
        </P>
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
