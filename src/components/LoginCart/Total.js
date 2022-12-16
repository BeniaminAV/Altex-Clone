import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import styled from "styled-components";

function Total() {
  const [{ basket }] = useStateValue();

  return (
    <Container>
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <div className="finalyTotal">
                <div className="title">
                  <p>Subtotal:</p>
                </div>
                <div className="value">
                  <p>{value}</p>
                </div>
              </div>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          suffix={"lei"}
        />
      </div>
    </Container>
  );
}

export default Total;

const Container = styled.div`

.finalyTotal{
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000;
    margin: 0 0 4px;
    padding: 16px 0;

    .title{
        font-size: 20px;
    }

    .value{
        font-size: 20px;
    }
}
`;
