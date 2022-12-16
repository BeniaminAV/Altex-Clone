import React from "react";
import styled from "styled-components";

function BranduriShort({
  title,
  brand,
  brand1,
  brand2,
  brand3,
  brand4,
  number,
  number1,
  number2,
  number3,
  number4,
}) {
  return (
    <Container>
      <div className="brand">
        <h2 className="titleBrand">
          {title}
          <div className="line"></div>
        </h2>
        <div className="branduri">
          <p>
            {brand} <span>{number}</span>
          </p>
          <p>
            {brand1} <span>{number1}</span>
          </p>
          <p>
            {brand2} <span>{number2}</span>
          </p>
          <p>
            {brand3} <span>{number3}</span>
          </p>
          <p>
            {brand4} <span>{number4}</span>
          </p>
        </div>
      </div>
    </Container>
  );
}

export default BranduriShort;

const Container = styled.div`

  .brand {
    padding: 12px 0;

    h2 {
      font-size: 64px;
      color: #c00033;
      margin: 0px 0px 16px;
      padding: 0px 0px 16px;
      font-weight: 500;
    }

    .line {
      border: 1px solid lightgray;
      margin: 8px 0 0;
      width: 95px;
    }
  }

  .branduri {
    cursor: pointer;
    font-size: 14px;
    line-height: 2.5;

    span {
      font-size: 16px;
      color: #adadad;
    }
  }
`;
