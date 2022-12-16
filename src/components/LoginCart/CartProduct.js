import React from "react";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";
import CloseIcon from "@mui/icons-material/Close";

function CartProduct({ id, image, title, price, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("this is the basket >>>", basket);

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <Container>
      <div className="cartProduct">
        <div className="checkoutInfo">
          <a href="/#">
            <div className="img">
              <img src={image} alt="" />
            </div>
          </a>

          <a href="/#">
            <div className="title">
              <p>{title}</p>
            </div>
          </a>

          <div className="price">
            <p>
              <strong>{price}</strong>
              <small> lei</small>
            </p>
          </div>

          {!hideButton && (
            <button className="btn" onClick={removeFromBasket}>
              <CloseIcon />
            </button>
          )}
        </div>
      </div>
    </Container>
  );
}

export default CartProduct;

const Container = styled.div`
  .cartProduct {
    padding: 16px;
    border-bottom: 1px solid lightgray;
    margin-bottom: 10px;

    .checkoutInfo {
      display: flex;
      align-items: center;
      justify-content: space-around;

      a:hover {
        color: #c00033;
      }

      img {
        width: 40px;
        height: 40px;
        object-fit: contain;
      }

      .title {
        p {
          font-size: 14px;
          width: 120px;
          height: 35px;
          overflow: hidden;
          color: #000;

          &:hover{
            color:  #c00033;
          }
        }
      }

      .price {
        font-size: 16px;
        color: #c00033;
      }

      .btn {
        border: none;
        background: #fff;
        cursor: pointer;
      }
    }
  }
`;
