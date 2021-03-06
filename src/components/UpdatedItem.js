import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import {
  Input,
  MainDiv,
  Label,
  Button,
  Div,
  Section,
  TitleImage,
  Desc
} from "../styles/UpdatedItemStyles";
const UpdatedItem = props => {
  const { fetchItemsById, match, update } = props;

  const initialList = {
    title: "",
    image_url: "",
    description: ""
  };
  const [updateId, setUpdateId] = useState(initialList);
  const id = match.params.id;
  useEffect(() => {
    fetchItemsById(id);
  }, [fetchItemsById, id]);
  useEffect(() => {
    setUpdateId({
      ...update.data
    });
  }, [update.data]);
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
      })

      .catch(err => err);
  };
  return (
    <Section>
      <MainDiv>
        <h1 style={{ color: "#1f43d4" }}>Update An Item</h1>
        <form onSubmit={updateMovie}>
          <TitleImage>
            <Div>
              <Label>
                <p>Title:</p>
                <br />
                <Input  name="title" placeholder="Title" value={updateId.title} onChange={handleChange} />
              </Label>
            </Div>
            <br />
            <Div>
              <Label>
                <p>Image URL</p>
                <br />
                <Input name="image_url" placeholder="Image Url" value={updateId.image_url} onChange={handleChange}/>
              </Label>
            </Div>
          </TitleImage>
          <br />
          <div>
            <Desc>
              <Label>
                <p>Description:</p>
                <br />
                <Input name="description" placeholder="Description" value={updateId.description} onChange={handleChange}/>
              </Label>
            </Desc>
          </div>
          <br />
          <Div>
            <Button className="button" type="submit">
              Save
            </Button>
          </Div>
        </form>
      </MainDiv>
    </Section>
  );
};
export default connect(
  state => {
    return state;
  },
  actionCreators
)(UpdatedItem);
