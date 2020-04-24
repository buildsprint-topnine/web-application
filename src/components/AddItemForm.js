import React, { useState } from "react";
import { connect } from "react-redux";
import { addItem } from "../state/actionCreators";
import {
  Input,
  MainDiv,
  Label,
  Button,
  Div,
  Section,
  TitleImage,
  Desc
} from "../styles/AddItemFormStyles";

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
        <h1 style={{ color: "#1f43d4" }}>Add An Item</h1>
        <form onSubmit={submitForm}>
          <TitleImage>
            <Div>
              <Label>
                <p>Title</p>
                <br />
                <Input name="title" placeholder="title" value={friend.title} onChange={inputChange}/>
              </Label>
            </Div>
            <br />
            <Div>
              <Label>
                <p>Image URL</p>
                <br />
                <Input name="image_url" placeholder="Image Url" value={friend.image_url} onChange={inputChange} />
              </Label>
            </Div>
          </TitleImage>
          <br />
          <div>
            <Desc>
              <Label>
                <p>Description</p>
                <br />
                <Input className="input-description" name="description" placeholder="Description" value={friend.description} onChange={inputChange}/>
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
}
export default connect( state => state, { addItem })(AddItem);
