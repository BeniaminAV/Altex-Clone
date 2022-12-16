import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import styled from "styled-components";
import { useState } from "react";

function HiddenBg() {
  const [hidden, setHidden] = useState(false);
  return (
    <Container>
      <OutsideClickHandler
        onOutsideClick={() => {
          setHidden(false);
        }}
      >
        <div className="bg" onClick={() => setHidden(!hidden)}>
          {hidden ? "" : ""}
        </div>
      </OutsideClickHandler>
      {hidden && (
        <div className="dropmenu">
          <div className="bg"></div>
        </div>
      )}
    </Container>
  );
}

export default HiddenBg;

const Container = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-color: #000000BF;
right: 0;
left: 0;
margin-top: 11px;
display: table;
  overflow-y: auto;
`;
