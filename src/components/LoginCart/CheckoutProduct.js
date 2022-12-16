import React from "react";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";
import CloseIcon from "@mui/icons-material/Close";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

function CheckoutProduct({ id, image, title, price, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("this is the basket >>>", basket);

  const removeFromBasket = () => {
    // Remove item from the Basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <Container>
      <ContentProduct>
        <div className="checkoutProduct">
          <img className="checkoutImage" src={image} alt="" />

          <div className="checkoutInfo">
            <p className="title">{title}</p>

            <div className="btn">
              {!hideButton && (
                <button>
                  <AddRoundedIcon /> Adauga la favorite
                </button>
              )}
              {!hideButton && (
                <button onClick={removeFromBasket}>
                  <CloseIcon /> Sterge{" "}
                </button>
              )}
            </div>
          </div>

          <p className="price">
            <strong>{price}</strong>
            <small>lei</small>
          </p>
        </div>
      </ContentProduct>
    </Container>
  );
}

export default CheckoutProduct;

const Container = styled.div`
  width: 100%;
`;

const ContentProduct = styled.div`
  .checkoutProduct {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height: auto;
    background-color: #fff;
    border: 1px solid #f4f4f4;
    margin: 0px 0px 30px;

    .checkoutImage {
      width: 120px;
      height: 120px;
      object-fit: contain;
      margin: 0 24px 0 24px;
    }

    .checkoutInfo {
      .title {
        margin: 0 24px 0 0;
        font-size: 18px;
      }

      .btn {
        margin: 10px 0;
        display: flex;

        button {
          border: none;
          background-color: #fff;
          color: #d71440;
          margin: 0 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;

          &:hover {
            color: #1a75ff;
          }
        }
      }
    }

    .price {
      margin: 0 24px 0 24px;
      color: #c00333;

      small {
        margin: 0 2px;
      }
    }
  }
`;
