import React, { useEffect } from "react";
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";

function HomeList(props) {
  const {fetchItems} = props
  //debugger;
  console.log(props);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return (
    <div>
      <h1>Hello</h1>
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
