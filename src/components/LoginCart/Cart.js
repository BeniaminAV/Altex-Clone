import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useClickOutside from "../ComponentsExpand/useClickOutside";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import CartProduct from "./CartProduct";

function Cart() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setIsVisible(false));

  const [{ basket }] = useStateValue();

  return (
    <Container>
      <div ref={ref}>
        <div type="button" onClick={() => setIsVisible(!isVisible)}>
          <div className="cart">
            <ShoppingCartOutlinedIcon />
            Cosul meu
            <KeyboardArrowDownIcon />
          </div>
        </div>
        {isVisible && (
          <ContentCart>
            <div className="product">
              {basket.map((item, index) => (
                <CartProduct
                  key={index}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                />
              ))}
            </div>

            <div className="carts">
              <Link to="/checkout">
                <button>Vezi produsul</button>
              </Link>
            </div>
          </ContentCart>
        )}
      </div>
    </Container>
  );
}

export default Cart;

const Container = styled.div`
  .cart {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ContentCart = styled.div`
  position: absolute;
  margin-top: 15px;
  right: -75px;
  width: 380px;
  height: auto;
  background-color: #fff;
  border: 1px solid lightgray;
  border-radius: 6px;

  :after {
    content: "";
    position: absolute;
    right: 178px;
    width: 8px;
    height: 8px;
    border-top: 1px solid lightgray;
    border-left: 1px solid lightgray;
    background-color: #fff;
    top: -5.2px;
    transform: rotate(45deg);
  }

  .carts {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 0 14px;

    button {
      width: 350px;
      height: 45px;
      border: none;
      border: 1px solid #f9c113;
      border-bottom-left-radius: 12px;
      border-top-right-radius: 12px;
      background-color: #f9c113;
      cursor: pointer;

      a {
        color: #000;
        font-size: 16px;
        padding: 12px;
      }
    }
  }
`;
