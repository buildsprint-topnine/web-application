import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { connect } from "react-redux";
//const itemApi = "https://bw-my-top-nine.herokuapp.com/home/:id/edit-top-nine";

const UpdatedItem = props => {
  console.log(props);

  const initialList = {
    title: "",
    description: ""
  };
  const [updateId, setUpdateId] = useState(initialList);

  //console.log(updateId);
  const id = props.match.params.id;
  //console.log(id);
  const handleChange = e => {
    e.preventDefault();
    setUpdateId({
      ...updateId,
      [e.target.name]: e.target.value
    });
  };

  const data = {
    ...updateId
  };

  const updateMovie = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(
        `https://bw-my-top-nine.herokuapp.com/home/${id}/edit-top-nine`,
        data
      )
      .then(res => {
        props.history.push("/dashboard/home");
        //props.setMovies(res.data);
      });

    //.catch(err => console.log(err));
  };

  return (
    <div>
      <div>Update An Item</div>
      <form onSubmit={updateMovie}>
        <label>
          Title:
          <br />
          <input
            name="title"
            placeholder="Title"
            value={updateId.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <br />
          <input
            name="description"
            placeholder="Description"
            value={updateId.description}
            onChange={handleChange}
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
};

export default connect(state => {
    console.log(state)
  return state;
})(UpdatedItem);
