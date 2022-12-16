import React from "react";
import styled from "styled-components";
import Product from "./ComponentsExpand/Product";
import DiamondTwoToneIcon from "@mui/icons-material/DiamondTwoTone";
import ImageSlider from "./ComponentsExpand/ImageSlider";
import Footer from "./Footer";

function Home() {
  return (
    <Container>
      <ImageSlider />
      <Content>
        <ContentCard>
          <div className="content-card">
            <a href="termeni-conditii-livrare">
              <img src="images/imagesHomepage/1.svg" alt="" />
              <p>Transport la orice produs.</p>
            </a>
          </div>

          <div className="content-card">
            <a href="renuntarea-cumparare">
              <img src="images/imagesHomepage/2.svg" alt="" />
              <p>
                Te-ai razgandit? Poti returna <br></br>produsul in 14 zile.
              </p>
            </a>
          </div>

          <div className="content-card">
            <a href="altex-dublul-diferentei-online">
              <img src="images/imagesHomepage/3.svg" alt="" />
              <p>
                Primesti de doua ori diferenta la <br></br> orice produs.
              </p>
            </a>
          </div>

          <div className="content-card">
            <a href="extragarantie">
              <img src="images/imagesHomepage/4.svg" alt="" />
              <p>
                Protejeaza-ti investitia cu <br></br> extragarantie.
              </p>
            </a>
          </div>
        </ContentCard>

        <ContentTopOferte>
          <h2>Top Oferte</h2>
          <div className="home_row">
            <Product
              id="1"
              title="Masina de spalat vase incorporabila ELECTROLUX EEM48321L, 14 seturi, 8 programe, 60 cm, Clasa D, panou comanda negru"
              stoc="in stoc"
              reduction={2.619}
              price={1.964}
              image="images/HomeProduct/1.jpg"
              rating={5}
            />

            <Product
              id="2"
              title="Cuptor microunde cu grill BEKO MGF20210X, 20l, 800W, argintiu"
              stoc="in stoc"
              reduction={529.9}
              price={439.82}
              image="images/HomeProduct/2.jpg"
              rating={5}
            />

            <Product
              id="3"
              title="Set cutite TEFAL Ingenio Ice Force K232S414, 4 piese, 11cm, otel, negru"
              stoc="in stoc"
              reduction={179.9}
              price={98.95}
              image="images/HomeProduct/3.jpg"
              rating={5}
            />

            <Product
              id="4"
              title="Gin Bobby's, 0.7L + 2 Pahare"
              stoc="in stoc"
              reduction={249.99}
              price={169.99}
              image="images/HomeProduct/4.jpg"
              rating={5}
            />

            <Product
              id="5"
              title="LEGO Friends: Centru de echitatie din padure 41683, 7 ani+, 511 piese"
              stoc="in stoc"
              reduction={279.9}
              price={226.72}
              image="images/HomeProduct/5.jpg"
              rating={5}
            />
          </div>

          <div className="home_row">
            <Product
              id="6"
              title="Set 3 becuri LED Smart LEDVANCE Candle 40, E14, 5W, 470lm, Wi-Fi, RGB"
              stoc="in stoc"
              reduction={139.9}
              price={99.33}
              image="images/HomeProduct/6.jpg"
              rating={5}
            />

            <Product
              id="7"
              title="Periuta de dinti electrica PHILIPS Sonicare HX6807/28, 62.000 miscari/min, 1 program, 1 capat, alb"
              stoc="in stoc"
              reduction={269.0}
              price={237.51}
              image="images/HomeProduct/7.jpg"
              rating={5}
            />

            <Product
              id="8"
              title="Trambulina MYRIA MY7226, D 100cm, greutate suportata 100kg, negru-verde"
              stoc="in stoc"
              reduction={209.99}
              price={188.96}
              image="images/HomeProduct/8.jpg"
              rating={5}
            />

            <Product
              id="9"
              title="Tigaie MYRIA MC4001, 26cm, inox, argintiu"
              stoc="in stoc"
              reduction={87.45}
              price={74.33}
              image="images/HomeProduct/9.jpg"
              rating={5}
            />

            <Product
              id="10"
              title="Placa video ASUS TUF AMD Radeon RX 6900 XT TOP Edition, 16GB GDDR6, 256bit, TUF-RX6900XT-T16G-GA"
              stoc="in stoc"
              reduction={9.766}
              price={5.879}
              image="images/HomeProduct/10.jpg"
              rating={5}
            />
          </div>
        </ContentTopOferte>

        <ContentPromotii>
          <h2>Promotii</h2>
          <div className="home_row">
            <Product
              id="11"
              title="Laptop Gaming Lenovo Legion Y520-15IKBM cu procesor Intel® Core™ i7-7700HQ 2.80 GHz,"
              stoc="in stoc"
              reduction={2299.99}
              price={799.99}
              image="images/HomeProduct/11.jpg"
              rating={5}
            />

            <Product
              id="12"
              title="Laptop Gaming Lenovo Legion Y520-15IKBM cu procesor Intel® Core™ i7-7700HQ 2.80 GHz,"
              stoc="in stoc"
              reduction={2299.99}
              price={799.99}
              image="images/HomeProduct/12.jpg"
              rating={5}
            />

            <Product
              id="13"
              title="Laptop Gaming Lenovo Legion Y520-15IKBM cu procesor Intel® Core™ i7-7700HQ 2.80 GHz,"
              stoc="in stoc"
              reduction={2299.99}
              price={799.99}
              image="images/HomeProduct/13.jpg"
              rating={5}
            />

            <Product
              id="14"
              title="Laptop Gaming Lenovo Legion Y520-15IKBM cu procesor Intel® Core™ i7-7700HQ 2.80 GHz,"
              stoc="in stoc"
              reduction={2299.99}
              price={799.99}
              image="images/HomeProduct/14.jpg"
              rating={5}
            />

            <Product
              id="15"
              title="Laptop Gaming Lenovo Legion Y520-15IKBM cu procesor Intel® Core™ i7-7700HQ 2.80 GHz,"
              stoc="in stoc"
              reduction={2299.99}
              price={799.99}
              image="images/HomeProduct/15.jpg"
              rating={5}
            />
          </div>

          <div className="home_row">
            <Product
              id="16"
              title="Laptop Gaming Lenovo Legion Y520-15IKBM cu procesor Intel® Core™ i7-7700HQ 2.80 GHz,"
              stoc="in stoc"
              reduction={2299.99}
              price={799.99}
              image="images/HomeProduct/16.jpg"
              rating={5}
            />

            <Product
              id="17"
              title="Laptop Gaming Lenovo Legion Y520-15IKBM cu procesor Intel® Core™ i7-7700HQ 2.80 GHz,"
              stoc="in stoc"
              reduction={2299.99}
              price={799.99}
              image="images/HomeProduct/17.jpg"
              rating={5}
            />

            <Product
              id="18"
              title="Laptop Gaming Lenovo Legion Y520-15IKBM cu procesor Intel® Core™ i7-7700HQ 2.80 GHz,"
              stoc="in stoc"
              reduction={2299.99}
              price={799.99}
              image="images/HomeProduct/18.jpg"
              rating={5}
            />

            <Product
              id="19"
              title="Laptop Gaming Lenovo Legion Y520-15IKBM cu procesor Intel® Core™ i7-7700HQ 2.80 GHz,"
              stoc="in stoc"
              reduction={2299.99}
              price={799.99}
              image="images/HomeProduct/19.jpg"
              rating={5}
            />

            <Product
              id="20"
              title="Laptop Gaming Lenovo Legion Y520-15IKBM cu procesor Intel® Core™ i7-7700HQ 2.80 GHz,"
              stoc="in stoc"
              reduction={2299.99}
              price={799.99}
              image="images/HomeProduct/20.jpg"
              rating={5}
            />
          </div>
        </ContentPromotii>

        <ContentTravel>
          <div className="travel">
            <img src="images/imagesHomepage/altex-travel.webp" alt="" />
          </div>
        </ContentTravel>

        <ContentBanner>
          <div className="banner">
            <div className="lego">
              <img src="images/imagesHomepage/lego.png" alt="" />
            </div>

            <div className="huawei">
              <img src="images/imagesHomepage/huawei.png" alt="" />
            </div>
          </div>
        </ContentBanner>

        <ContentNews>
          <div className="contentNews">
            <div className="content-text">
              <h2>
                Inscrie-te acum si fii primul care afla de cele mai noi promotii
              </h2>
              <p>
                <DiamondTwoToneIcon className="icon-diamond" />
                Primesti ofertele la cel mai mic pret
              </p>
              <p>
                <DiamondTwoToneIcon className="icon-diamond" />
                Afli primul startul promotiilor si cand se lanseaza produse noi
              </p>
              <p>
                <DiamondTwoToneIcon className="icon-diamond" />
                Beneficiezi de ofertele si serviciile dedicate abonatilor
              </p>
              <div className="input-news">
                <input
                  className="input"
                  type="text"
                  placeholder="Introdu adresa de email"
                />

                <button className="btn-news">Aboneaza-te</button>
              </div>
              <small>
                Prin abonarea la newsletter confirm ca am peste 16 ani si sunt
                de acord cu Termenii si conditiile de utilizare a site-ului
                altex.ro
              </small>
            </div>
            <div className="bg-content">
              <img
                src="images/imagesHomepage/banner-newsletter-bg.webp"
                alt=""
              />
            </div>
          </div>
        </ContentNews>
      </Content>
      <Footer />
    </Container>
  );
}

export default Home;

const Container = styled.div``;

const Content = styled.div`
  margin-left: 16%;
  margin-right: 16%;
`;

const ContentCard = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  p {
    font-size: 16px;
    color: #000;
  }
`;

const ContentTopOferte = styled.div`
  h2 {
    display: flex;
    align-items: center;
    justify-content: start;
    margin-top: 50px;
    margin-bottom: 20px;
    font-size: 1.7em;
    font-weight: 300;
  }

  .home_row {
    display: flex;
    align-items: center;
    z-index: 1;
  }
`;

const ContentPromotii = styled.div`
  .home_row {
    display: flex;
    align-items: center;
    z-index: 1;
  }

  h2 {
    display: flex;
    align-items: center;
    justify-content: start;
    margin-top: 50px;
    margin-bottom: 20px;
    font-size: 1.7em;
    font-weight: 300;
  }
`;

const ContentTravel = styled.div`
  margin-top: 20px;

  .travel {
    img {
      width: 100%;
      object-fit: contain;
    }
  }
`;

const ContentBanner = styled.div`
  margin-top: 50px;
  .banner {
    display: flex;
    align-items: center;

    .lego {
      margin-right: 20px;
      img {
        width: 100%;
        object-fit: contain;
      }
    }

    .huawei {
      margin-left: 20px;
      img {
        width: 100%;
        object-fit: contain;
      }
    }
  }
`;

const ContentNews = styled.div`
  .contentNews {
    background-color: #fff2d6;
    display: flex;
    justify-content: space-between;

    .content-text {
      margin: 30px;

      .icon-diamond {
        color: #c00033;
        margin-right: 10px;
        font-size: 12px;
      }

      h2 {
        font-size: 1.6em;
      }

      p {
        margin-top: 5px;
        font-size: 0.9em;
      }

      small {
        font-size: 0.7em;
      }

      .input-news {
        margin-top: 20px;
        margin-bottom: 20px;

        input {
          width: 340px;
          height: 45px;
          border: 1px solid #f5cb38;
          border-bottom-left-radius: 12px;
          border-top-right-radius: 12px;
          margin-right: 30px;
          font-style: italic;
          color: lightgray;
          padding: 10px;
        }

        .btn-news {
          background-color: #f5cb38;
          width: 140px;
          height: 45px;
          border: none;
          border-bottom-left-radius: 12px;
          border-top-right-radius: 12px;
          font-size: 1em;
          font-weight: 500;
          cursor: pointer;

          &:hover {
            background-color: #deb31d;
          }
        }
      }
    }
  }
`;

