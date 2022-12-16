import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }] = useStateValue();

  return (
    <Container>
      <div className="subtotal">
        <div className="title">
          <p>Sumar Comanda</p>
        </div>
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p className="total">
                Subtotal ({basket.length} produse): <strong>{value}</strong>
              </p>
              <small className="subtotal__gift">
                <p>Taxa de livrare</p>
                <strong>Gratuit</strong>
              </small>

              <div className="line"></div>

              <p className="finalyTotal">
                Total final: <strong>{value}</strong>
              </p>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          suffix={"lei"}
        />

        <button onClick={(e) => navigate.push("/#")}>
          Continua
        </button>

        <p className="tva">
          Preturile sunt exprimate in lei si contin TVA
        </p>
      </div>
    </Container>
  );
}

export default Subtotal;

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 360px;
height: 320px;
border: 1px solid #dddddd;
border-radius: 6px;

  .subtotal {
    margin: 12px 0px 24px;
    padding: 16px 20px;
    
    .title{
      font-size: 26px;
      font-weight: 500;
      margin: 0 0 12px;
    }

    .total {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 16px;
      margin: 0 0 12px;
    }
  }

  small {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 12px;
    font-size: 16px;

    strong{
      color: #319D10;
    }
  }

  .line{
    border-bottom: 1px solid lightgray;
    margin: 0 0 12px;
  }

  .finalyTotal{
    font-size: 26px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 12px 0 0;


    strong{
      color: #C00333;
    }
  }

  button{
    margin-top: 30px;
    border: none;
    width: 100%;
    height: 45px;
    background-color: #C00033;
    border-bottom-left-radius: 12px;
    border-top-right-radius: 12px;
    color: #fff;
    font-size: 16px;
  }

  .tva{
    text-align: center;
    font-size: 14px;
    color: #6D6E71;
    margin: 22px 0 0;
  }
`;
