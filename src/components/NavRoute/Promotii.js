import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import Product from "../ComponentsExpand/Product";

function Promotii() {
  return (
    <Container>
      <ContentBanner>
        <img src="/images/Promotii/banner.jpg" alt="" />
      </ContentBanner>

      <ContentFiltru>
        <h2>Televizoare</h2>
        <div className="input">
          <p>Filtreaza dupa nume: </p>
          <input type="text" className="input-text" />
          <p>Sorteaza dupa</p>
          <input type="text" className="input-text" />
        </div>
      </ContentFiltru>

      <ContentPromotii>
        <ContentSearch>
          <div className="search">
            <p>Televizoare</p>
            <div className="line"></div>
            <p>Telefoane, Tablete, Accesorii</p>
            <div className="line"></div>
            <p>Electrocasnice mari</p>
            <div className="line"></div>
            <p>Laptop, Desktop, It</p>
            <div className="line"></div>
            <p>Racire, Purificare aer, Incalzire</p>
            <div className="line"></div>
            <p>Gamming, Sport</p>
            <div className="line"></div>
            <p>Anvelope, Electrice auto</p>
            <div className="line"></div>
            <p>Bricolaj, Sanitare</p>
            <div className="line"></div>
            <p>Copii, Jucarii, Lego</p>
            <div className="line"></div>
            <p>Beauty, Cosmetice</p>
            <div className="line"></div>
            <p>Curatenie, Intretinere casa</p>
            <div className="line"></div>
            <p>Bauturi, Cafea, Apa, Suc</p>
            <div className="line"></div>
            <p>Voiaj, Papetarie, Birotica</p>
            <div className="line"></div>
          </div>
        </ContentSearch>

        <ContentProduct>
          <div className="home_row">
            <Product
              id="123123123"
              title="Televizor LED SCHNEIDER 40SCHSC510K, Full HD, 100 cm"
              stoc="in stoc"
              price={948.93}
              image="/images/Promotii/1.jpg"
              rating={5}
            />

            <Product
              id="123123123"
              title="Televizor LED Smart VORTEX V43R0213VS, Ultra HD 4K, 109cm"
              stoc="in stoc"
              price={1.149}
              image="/images/Promotii/2.jpg"
              rating={5}
            />

            <Product
              id="123123123"
              title="Televizor LED Smart HISENSE 55A6BG, Ultra HD 4K, 138cm"
              stoc="in stoc"
              price={1.149}
              image="/images/Promotii/3.jpg"
              rating={5}
            />

            <Product
              id="123123123"
              title="Televizor QLED Smart SAMSUNG 43Q60B, Ultra HD 4K, HDR, 108cm"
              stoc="in stoc"
              price={1.849}
              image="/images/Promotii/4.jpg"
              rating={5}
            />
          </div>

          <div className="home_row">
            <Product
              id="123123123"
              title="Televizor LED Smart SAMSUNG 43BU8582, Ultra HD 4K, HDR, 108cm"
              stoc="in stoc"
              price={2.499}
              image="/images/Promotii/5.jpg"
              rating={5}
            />

            <Product
              id="123123123"
              title="Televizor NanoCell Smart LG 50NANO763QA, Ultra HD 4K, HDR, 126cm"
              stoc="in stoc"
              price={2.599}
              image="/images/Promotii/6.jpg"
              rating={5}
            />

            <Product
              id="123123123"
              title="Televizor LED Smart LG 65UQ81003LB, Ultra HD 4K, HDR, 164cm"
              stoc="in stoc"
              price={2.649}
              image="/images/Promotii/7.jpg"
              rating={5}
            />

            <Product
              id="123123123"
              title="Televizor QLED Smart HISENSE 65A7GQ, Ultra HD 4K, 164cm"
              stoc="in stoc"
              price={3.099}
              image="/images/Promotii/8.jpg"
              rating={5}
            />
          </div>

          <div className="home_row">
            <Product
              id="123123123"
              title="Televizor LED Smart Hisense 75A6BG, Ultra HD, 4K, 190cm"
              stoc="in stoc"
              price={3.399}
              image="/images/Promotii/9.jpg"
              rating={5}
            />

            <Product
              id="123123123"
              title="Televizor OLED Smart LG 65C22LA, Ultra HD 4K, HDR, 164cm"
              stoc="in stoc"
              price={3.699}
              image="/images/Promotii/10.jpg"
              rating={5}
            />

            <Product
              id="123123123"
              title="Televizor OLED Smart LG 65G23LA, Ultra HD 4K, HDR, 164cm"
              stoc="in stoc"
              price={9.499}
              image="/images/Promotii/1.jpg"
              rating={5}
            />

            <Product
              id="123123123"
              title="Televizor LED SCHNEIDER 40SCHSC510K, Full HD, 100 cm"
              stoc="in stoc"
              price={11}
              image="/images/Promotii/2.jpg"
              rating={5}
            />
          </div>
        </ContentProduct>
      </ContentPromotii>
      <Footer />
    </Container>
  );
}

export default Promotii;

const Container = styled.div``;

const ContentFiltru = styled.div`
  margin-left: 31.5%;
  margin-right: 16%;
  padding-top: 10px;

  h2 {
    margin: 12px 0px;
    color: #000;
    font-size: 32px;
    font-weight: 500;
  }

  .input {
    display: flex;
    padding: 0px 16px 4px 0px;
    align-items: center;

    p {
      color: #000;
    }

    .input-text {
      margin-right: 20px;
      margin-left: 20px;
      width: 210px;
      height: 45px;
      border: none;
      border: 1px solid lightgray;
      border-bottom-left-radius: 12px;
      border-top-right-radius: 12px;
      outline : none;
      padding: 10px
    }
  }
`;

const ContentProduct = styled.div`
  padding-bottom: 100px;
`;

const ContentPromotii = styled.div`
  margin-left: 16%;
  margin-right: 16%;
  margin-top: 60px;
  display: flex;

  .home_row {
    display: flex;
    z-index: 1;
  }
`;

const ContentSearch = styled.div`
  cursor: pointer;
  width: 50%;

  .search {
    border: 1px solid lightgray;
    border-radius: 12px;
    margin-right: 15px;

    .line {
      border-bottom: 1px solid lightgray;
    }

    p {
      margin: 12px;
      font-size: 14px;

      &:hover {
        color: #d9023b;
      }
    }
  }
`;

const ContentBanner = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 25vh;
  }
`;
