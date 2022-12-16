import React from "react";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import Total from "./Total";

function CheckOut() {
  const [{ basket }] = useStateValue();

  return (
    <Container>
      <div className="title">
        <h2>Cosul meu de cumparaturi</h2>
      </div>

      <ContentPage>
        <div className="product">
          <Product>
            {basket.map((item, index) => (
              <CheckoutProduct
                key={index}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            ))}
            <Total />
          </Product>
        </div>

        <div className="productTotal">
          <ProductTotal>
            <Subtotal />
          </ProductTotal>
        </div>
      </ContentPage>
    </Container>
  );
}

export default CheckOut;

const Container = styled.div`
  margin-right: 16%;
  margin-left: 16%;

  .title {
    h2 {
      font-size: 32px;
      font-weight: 500;
      margin: 24px 0;
    }
  }
`;

const ContentPage = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-around;
  width: 100%;
  
  .product{
    width: 100%;
    margin-right: 10px;
  }

  .productTotal{
    margin-left: 10px;
  }
`;

const ProductTotal = styled.div``;

const Product = styled.div`
  height: auto;
  background-color: #f4f4f4;
  border: 1px solid #f4f4f4;
  padding: 40px 20px 14px;
  border-bottom-left-radius: 12px;
  border-top-right-radius: 12px;
`;
