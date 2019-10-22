import React, { useEffect } from "react";
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import HomeCard from "./HomeCard";
import styled from 'styled-components';
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
    <Div>
      {/* imported topbar component */}
      <TopBar/>
      
      <Div2 >
        <p>Hey James, lorem ipsum lorem ipsum </p>
        <NavLink to="/home/additem">
          <button className="lg-form-button">Add Your Favs!</button>
        </NavLink>
      </Div2>


      {item.data.topNine.map(char => (
        <div key={char.id}>
          <NavLink to={`/item/${char.id}`}>
            <HomeCard things={char} />
            <button
              onClick={function (e) {
                return delItem(e, char.id);
              }}
            >
              X
            </button>
          </NavLink>

        </div>
      ))}
    </Div>
  );
}

export default connect(
  state => {
    return state;
  },
  actionCreators
)(HomeList);
