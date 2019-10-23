import React from 'react';
import styled from "styled-components";

const Div = styled.div`
display:flex;
justify-content:flex-end;
padding-top: 20px;
    padding-bottom: 20px;

`;

const H2 = styled.h2`
border: 1px solid  #e5e5e5;
border-radius: 16px;
    width: 32px;
    height: 32px;
    line-height:32px;
background: #e5e5e5;
margin:0;
font-size: 15px;
`;

const P = styled.p`
margin: 0;
line-height: 32px;
    margin-right: 10px;
    font-size: 15px;
`;

function TopBar() {

    return (
        <Div>
            <P>James</P>
            <H2>J</H2>
        </Div>
    )
}

export default TopBar;
