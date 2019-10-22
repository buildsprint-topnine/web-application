import React, { useEffect } from "react";
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import HomeCard from "./HomeCard";

function HomeList(props) {
  const { fetchItems, item, deleteItem } = props;

  console.log(props);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  function delItem(e, id) {
    e.preventDefault();
    deleteItem(id);
  }

  return (
    <div>
      <h2>Welcome</h2>
      <NavLink to="/home/additem">
        <button className="lg-form-button">Add Your Favs!</button>
      </NavLink>

      {item.data.topNine.map(char => (
        <div key={char.id}>
          <NavLink to={`/item/${char.id}`}>
            <HomeCard things={char} />
            <button
              onClick={function(e) {
                return delItem(e, char.id);
              }}
            >
              X
            </button>
          </NavLink>
          
        </div>
      ))}
    </div>
  );
}

export default connect(
  state => {
    return state;
  },
  actionCreators
)(HomeList);
