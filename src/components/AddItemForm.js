import React, { useState } from "react";
import { connect } from "react-redux";
import { addFriend } from "../state/actionCreators";

function AddItem(props) {
   // debugger;
  console.log(props);
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
    props.history.push("/dashboard/home");
    props.addFriend(friend);

    return setFriend({
      title: "",
      description: ""
    });
  }

  return (
    <div>
      <div>Add A New Friend</div>
      <form onSubmit={submitForm}>
        <label>
          Friend's Title:
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
          Friend's Decription:
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
  { addFriend }
)(AddItem);
