// import React from "react";
// import styled from "styled-components";
// import { connect } from "react-redux";

// const Div = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   padding-top: 20px;
//   padding-bottom: 20px;
// `;

// const H2 = styled.h2`
//   border: 1px solid #e5e5e5;
//   border-radius: 16px;
//   width: 32px;
//   height: 32px;
//   line-height: 32px;
//   background: #e5e5e5;
//   margin: 0;
//   font-size: 15px;
// `;

// const P = styled.p`
//   margin: 0;
//   line-height: 32px;
//   margin-right: 10px;
//   font-size: 15px;
// `;

// function TopBarFriends(props) {
//   console.log(props);
//   console.log(props.handle.data[0]);
//   return (
//     <Div>
//       <P>{props.handle.data[0].name}</P>
//       {props.handle.data.name ? (
//         <H2>{props.handle.data.name.charAt(0)}</H2>
//       ) : null}
//     </Div>
//   );
// }

// export default connect(state => {
//   console.log(state);
//   return state;
// })(TopBarFriends);
