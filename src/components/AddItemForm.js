import React, { useState } from "react";
import { connect } from "react-redux";
import { addItem } from "../state/actionCreators";

function AddItem(props) {
  const [friend, setFriend] = useState({
    title: "",
    description: ""
  });

  function inputChange(e) {
    return setFriend({
      ...friend,
      [e.target.name]: e.target.value
    });
  }

  function submitForm(e) {
    e.preventDefault();
    props.addItem(friend);
    props.history.push("/dashboard/home");

    return setFriend({
      title: "",
      description: ""
    });
  }

  return (
    <div>
      <div>Add An Item</div>
      <form onSubmit={submitForm}>
        <label>
          Item Title:
          <br />
          <input
            name="title"
            placeholder="title"
            value={friend.title}
            onChange={inputChange}
          />
        </label>
        <br />
        <label>
          Item Decription:
          <br />
          <input
            name="description"
            placeholder="Description"
            value={friend.description}
            onChange={inputChange}
          />
        </label>
        <br />
        <div>
          <button className="button" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
export default connect(
  state => state,
  { addItem }
)(AddItem);
