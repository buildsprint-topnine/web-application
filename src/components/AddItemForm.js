import React, { useState } from "react";
import { connect } from "react-redux";
import { addItem } from "../state/actionCreators";
import styled from "styled-components";

function AddItem(props) {
  const [friend, setFriend] = useState({
    title: "",
    description: "",
    image_url: ""
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
      description: "",
      image_url: ""
    });
  }

  return (
    <Section>
      <MainDiv>
        <h1 style={{color:'#1f43d4'}}>Add An Item</h1>
        <form onSubmit={submitForm}>
          <TitleImage>
            <Div>
              <Label>
                <p>Item Title</p>
                <br />
                <Input
                  name="title"
                  placeholder="title"
                  value={friend.title}
                  onChange={inputChange}
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
                  value={friend.image_url}
                  onChange={inputChange}
                />
              </Label>
            </Div>
          </TitleImage>

          <br />
          <div>
            <Desc>
              <Label>
                <p>Item Decription</p>
                <br />
                <Input
                  name="description"
                  placeholder="Description"
                  value={friend.description}
                  onChange={inputChange}
                />
              </Label>
            </Desc>
          </div>
          <br />
          <Div>
            <Button className="button" type="submit">
              Submit
            </Button>
          </Div>
        </form>
      </MainDiv>
    </Section>
  );
}
export default connect(
  state => state,
  { addItem }
)(AddItem);

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
  background: #F35667;
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
  display:flex;
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
    margin-left: 10px
  }

  input {
    margin-top: 1px;
  }
`;
