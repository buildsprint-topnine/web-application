import React, { useState } from "react";
import { connect } from "react-redux";
import { addItem } from "../state/actionCreators";
import styled from "styled-components";

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
    background: #276fd6;
    border-radius: 5px;
    border: 2px solid #276fd6;
    color: white;
    padding: 0.25em 1em;
    height: 40px;
    width: 100%;
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
    <Section>
    <MainDiv>
      <h1>Add An Item</h1>
      <form onSubmit={submitForm}>
        <Div>
        <Label>
          Item Title
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
          Item Decription
          <br />
          <Input
            name="description"
            placeholder="Description"
            value={friend.description}
            onChange={inputChange}
          />
        </Label>

        </Div>


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
