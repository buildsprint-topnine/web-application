import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { connect } from "react-redux";
import styled from "styled-components";

const UpdatedItem = props => {
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
      })

      .catch(err => console.log(err));
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
                <Input
                  name="title"
                  placeholder="Title"
                  value={updateId.title}
                  onChange={handleChange}
                />
              </Label>
            </Div>
            <br />
            <Div>
              <Label>
                <p>Image URL</p>
                <br />
                <Input
                  name="image_url"
                  placeholder="Image Url"
                  value={updateId.image_url}
                  onChange={handleChange}
                />
              </Label>
            </Div>
          </TitleImage>

          <br />
          <div>
            <Desc>
              <Label>
                <p>Description:</p>
                <br />
                <Input
                  name="description"
                  placeholder="Description"
                  value={updateId.description}
                  onChange={handleChange}
                />
              </Label>
            </Desc>
          </div>
          <br />
          <Div>
            <Button className="button" type="submit">
              SUBMIT
            </Button>
          </Div>
        </form>
      </MainDiv>
    </Section>
  );
};

export default connect(state => {
  console.log(state);
  return state;
})(UpdatedItem);

// added styles

const Input = styled.input`
  height: 40px;
  border-radius: 5px;
  background: #edf2f7;
  border: none;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 20px;
  font-size: 14px;
  width: 100%;
`;

const MainDiv = styled.div`
  background: #fffefe;
  width: 500px;
  margin: auto;
  box-shadow: 0px 1px 3px 0px #aaa;
  height: 425px;
  padding-top: 30px;
  margin-top: 45px;
`;

const Label = styled.label`
  text-align: left;
  margin-bottom: 5px;
  padding: 5px;
`;

const Button = styled.button`
  background: #f35667;
  border-radius: 8px;
  border: 2px solid #276fd6;
  color: white;
  padding: 0.25em 1em;
  height: 40px;
  width: 160px;
  margin-left: 100px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: auto;
  padding: 7px;
  margin-bottom: 7px;
`;

const Section = styled.section`
  background: linear-gradient(180deg, #1f43d4 0%, rgba(31, 67, 212, 0.5) 100%);
  height: 100vh;
`;

const TitleImage = styled.div`
  display: flex;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 0.4285em;

  p {
    color: #1f43d4;
    margin-bottom: 1px;
  }

  input {
    margin-top: 1px;
  }
`;

const Desc = styled.div`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 0.4285em;

  p {
    color: #1f43d4;
    margin-bottom: 1px;
    margin-left: 10px;
  }

  input {
    margin-top: 1px;
  }
`;
