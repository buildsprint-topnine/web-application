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
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import TopBar from "./TopBar";

function HomeList(props) {
  const { fetchItems, item, deleteItem, update } = props;

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  function delItem(e, id) {
    e.preventDefault();
    deleteItem(id);
  }

  return (
    <Div>
      <TopBar handle={item} />

      <Div2>
        <P style={{ fontFamily: "Ubuntu, sans-serif" }}>
          Hey{" "}
          {item.data.name ? (
            <span>
              {item.data.name.charAt(0).toUpperCase() + item.data.name.slice(1)}
            </span>
          ) : null}
          , Welcome!{" "}
        </P>
        <NavLink to="/home/additem">
          <button className="lg-form-button">Add Item</button>
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
                  Delete
                </Button>
              </NavLink>
              <NavLink to={`/update-item/${update.data.id}`}>
                <Button>Update Item</Button>
              </NavLink>
            </div>
          </ItemCard>
        ))}
      </ItemContainer>
      <div>
        {item.isFetching && (
          <>
            <h2>Loading...</h2>
            <Loader type="TailSpin" color="#f35667" height={80} width={80} />
          </>
        )}
      </div>
    </Div>
  );
}

export default connect(
  state => {
    return state;
  },
  actionCreators
)(HomeList);
