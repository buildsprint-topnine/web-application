import React from "react";
import { Div, H2, P } from "../styles/TopBarStyles";

function TopBar(props) {
  //console.log(props);
  return (
    <Div>
      <P>{props.handle.data.name}</P>
      {props.handle.data.name ? (
        <H2>{props.handle.data.name.charAt(0)}</H2>
      ) : null}
    </Div>
  );
}

export default TopBar;
