import React from "react";
import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import { useStateValue } from "../StateProvider";

function Product({ id, title, image, price, rating, stoc, reduction }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("this is the basket >>>", basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <Container>
      <div className="product">
        <div className="icon-product">
          <span className="heart">
            <FavoriteBorderIcon />
          </span>
          <span className="square">
            <CropSquareIcon />
          </span>
        </div>
        <img src={image} alt="" />
        <div className="product_info">
          <p>{title}</p>
          <div className="stoc_info">
            <Inventory2OutlinedIcon />
            <p>{stoc}</p>
          </div>
          <div className="product_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>
                  <StarIcon />
                </p>
              ))}
          </div>
          <p className="product_price">
            <p>{reduction}</p>
            <strong>{price}</strong>
            <small> lei </small>
          </p>
        </div>
        <button onClick={addToBasket}>Adauga in cos</button>
      </div>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  cursor: pointer;
  margin-top: 10px;
  margin-right: 16px;
  width: 100%;
  height: 100%;

  .product {
    background-color: #fff;
    padding: 20px;
    border: 1px solid lightgray;
    border-radius: 5px;

    &:hover {
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    }

    .icon-product {
      display: flex;
      position: absolute;
      flex-direction: column;
      padding-right: 10%;

      .heart {
        color: lightgray;

        &:hover {
          color: red;
        }
      }

      .square {
        color: lightgray;

        &:hover {
          color: green;
        }
      }
    }
  }

  .product_rating {
    display: flex;
    color: #f5cb38;
  }

  .stoc_info {
    display: flex;
    align-items: center;
    color: green;

    p {
      margin-left: 5px;
    }
  }

  .product > img {
    width: 100%;
    height: 120px;
    object-fit: contain;
    margin-bottom: 15px;
  }

  .product > button {
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 20px;
    background-color: #c00033;
    color: #fff;
    cursor: pointer;
    border-bottom-left-radius: 7px;
    border-top-right-radius: 7px;
  }

  .product_price {
    font-weight: 600;
    color: #c00033;
    font-size: 1.3em;

    p {
      color: #000;
      font-size: 0.65em;
      font-weight: 600;
      text-decoration-line: line-through;
    }
  }

  .product_info {
    height: 150px;
    margin-bottom: 15px;
    font-size: 0.9em;
  }

  .product > button:hover {
    background-color: #d9023b;
  }
`;
