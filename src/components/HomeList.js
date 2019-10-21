import React, { useEffect } from "react";
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";
import { Route, NavLink } from "react-router-dom";
import AddItem from "./AddItemForm";

function HomeList(props) {
  const { fetchItems, item } = props;
  //debugger;
  console.log(props);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return (
    <div>
      <h1>Hello</h1>
      <NavLink to="/home/additem">
        <button>Add Friends</button>
      </NavLink>
      {item.data.topNine.map(char => (
        <div key={char.id}>
          Title:{char.title} Description:{char.description}
          {/* <button
            className="button2"
            onClick={function(e) {
              return delSmurf(e, char.id);
            }}
          >
            X
          </button> */}
        </div>
      ))}
    
    </div>
    
  );
}

export default connect(
  state => {
    console.log(state);
    return state;
  },
  actionCreators
)(HomeList);
