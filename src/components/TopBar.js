import React from "react";
import { Div, H2, P } from "../styles/TopBarStyles";

function TopBar({ handle }) {
  return (
    <Div>
      <P>
        {handle.data.name
          ? handle.data.name.charAt(0).toUpperCase() + handle.data.name.slice(1)
          : null}
      </P>
      {handle.data.name ? (
        <H2>{handle.data.name.charAt(0).toUpperCase()}</H2>
      ) : null}
    </Div>
  );
}

export default TopBar;
