import styled from "styled-components";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRef, useState } from "react";
import useClickOutside from "../ComponentsExpand/useClickOutside";

function Finantare() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setIsVisible(false));

  return (
    <Container>
      <div ref={ref}>
        <div type="button" onClick={() => setIsVisible(!isVisible)}>
          <div className="finantare">
            Finantare
            <KeyboardArrowDownIcon />
          </div>
        </div>
        {isVisible && (
          <div className="dropmenu">
            <div className="dropdown">
              <p>Rate online Credex</p>
            </div>

            <div className="dropdown">
              <p>Credit in magazin</p>
            </div>

            <div className="dropdown">
              <p>Carduri de credit</p>
            </div>

            <div className="dropdown">
              <p>Aplicatia mobila Credex</p>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}

export default Finantare;

const Container = styled.div`
  cursor: pointer;

  .finantare {
    color: #fff;
  }

  .dropmenu {
    position: absolute;
    top: 122px;
    left: 50%;
    background-color: #fff;
    border-radius: var(--border-radius);
    width: 260px;
    height: 130px;
    z-index: 100;
    color: #000;
    border: 1px solid lightgray;
    border-bottom-left-radius: 12px;
    border-top-right-radius: 12px;

    .dropdown {
      padding: 8px 12px 7px 28px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        font-size: 13px;
      }
    }
  }
`;
