import React from "react";
import { Div, H2, P } from "../styles/TopBarStyles";

function TopBar({ handle }) {
  //console.log(props);
  return (
    <Div>
      <P>{handle.data.name}</P>
      {handle.data.name ? (
        <H2>{handle.data.name.charAt(0).toUpperCase()}</H2>
      ) : null}
    </Div>
  );
}

export default TopBar;
