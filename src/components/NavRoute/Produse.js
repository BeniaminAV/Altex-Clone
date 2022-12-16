import styled from "styled-components";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuIcon from "@mui/icons-material/Menu";
import { useRef, useState } from "react";
import useClickOutside from "../ComponentsExpand/useClickOutside";

function Produse() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setIsVisible(false));

  return (
    <Container>
      <div ref={ref}>
        <div type="button" onClick={() => setIsVisible(!isVisible)}>
          <div className="produse">
            <MenuIcon />
            Produse
          </div>
        </div>
        {isVisible && (
          <div className="dropmenu">
            <div className="dropdown">
              <p>Telefoane, Tablete</p>
              <ArrowForwardIosIcon className="arrow" />
            </div>

            <div className="dropdown">
              <p>Laptop, Desktop, IT, Birotica</p>
              <ArrowForwardIosIcon className="arrow" />
            </div>

            <div className="dropdown">
              <p>Gaming, Jocuri </p>
              <ArrowForwardIosIcon className="arrow" />
            </div>

            <div className="dropdown">
              <p>TV, Audi-Video, Foto </p>
              <ArrowForwardIosIcon className="arrow" />
            </div>

            <div className="dropdown">
              <p>Electrocasnice Mari </p>
              <ArrowForwardIosIcon className="arrow" />
            </div>

            <div className="dropdown">
              <p>Electrocasnice Mici, Vesela </p>
              <ArrowForwardIosIcon className="arrow" />
            </div>

            <div className="dropdown">
              <p>Incalzire, Purificare aer, Racire </p>
              <ArrowForwardIosIcon className="arrow" />
            </div>

            <div className="dropdown">
              <p>Curatenie, Intretinere casa </p>
              <ArrowForwardIosIcon className="arrow" />
            </div>

            <div className="dropdown">
              <p>Bautura, Cafea, Apa, Suc </p>
              <ArrowForwardIosIcon className="arrow" />
            </div>

            <div className="dropdown">
              <p>Cosmetice, Beauty, Sanatate </p>
              <ArrowForwardIosIcon className="arrow" />
            </div>

            <div className="dropdown">
              <p>Bricolaj, Sanitare, Mobila </p>
              <ArrowForwardIosIcon className="arrow" />
            </div>

            <div className="dropdown">
              <p>Anvelope, Electronica Auto </p>
              <ArrowForwardIosIcon className="arrow" />
            </div>

            <div className="dropdown">
              <p>Trotinete, Biciclete, Sport, Voiaj </p>
              <ArrowForwardIosIcon className="arrow" />
            </div>

            <div className="dropdown">
              <p>Bricolaj, Sanitare, Mobila</p>
              <ArrowForwardIosIcon className="arrow" />
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}

export default Produse;

const Container = styled.div`
  cursor: pointer;

  .produse {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dropmenu {
    position: absolute;
    top: 122px;
    left: 15.9%;
    background-color: #fff;
    border-radius: var(--border-radius);
    width: 300px;
    height: 550px;
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

      .arrow {
        width: 12px;
      }
    }
  }
`;
