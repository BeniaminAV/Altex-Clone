import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Footer from "../Footer";

function Magazine() {
  return (
    <Container>
      <ContentHome>
        <div className="home">
          <a href="/">
            <p>
              <small>Acasa / Suport clienti / </small> Magazine
            </p>
          </a>
        </div>
      </ContentHome>

      <Content>
        <ContentServicii>
          <div className="search">
            <p>Comenzi</p>
            <div className="line"></div>
            <p>Servicii</p>
            <div className="line"></div>
            <p>Cont Client</p>
            <div className="line"></div>
            <p>Informatii generale</p>
            <div className="line"></div>
            <p>Magazine</p>
            <div className="line"></div>
            <p>Contacteaza-ne</p>
          </div>
        </ContentServicii>

        <ContentPage>
          <div className="header_search">
            <input
              className="header_searchInput"
              type="text"
              placeholder="Cauta in articolele de suport"
            />
            <SearchIcon className="header_searchIcon" />
          </div>

          <div className="magazine">
            <div className="title">
              <h2>Magazine</h2>
              <p>
                Prin reteaua nationala de magazine, Altex iti ofera o gama
                variata de produse, la cele mai avantajoase preturi, sustinute
                de solutii optime de finantare, adaptate fiecarui tip de buget.
              </p>
              <div className="regiuni">
                <label className="label">
                  <p>Magazinele Altex din</p>
                  <select className="select">
                    <option>Toate Regiunile</option>
                    <option>Bacau</option>
                    <option>Bucuresti</option>
                    <option>Bistrita</option>
                    <option>Timisoara</option>
                    <option>Arad</option>
                    <option>Cluj</option>
                    <option>Oradea</option>
                    <option>Salaj</option>
                    <option>Sibiu</option>
                    <option>Constanta</option>
                  </select>
                </label>
              </div>
              <div className="maps">
                <img src="/images/magazin/1.png" alt="" />
              </div>
            </div>
          </div>

          <div className="city">
            <div className="dimension">
              <div className="title">
                <h4>Altex Bacau Cora</h4>
                <p>Centrul Comercial Cora, Str. Milcov, Nr. 2A, Bacau</p>
                <div className="description">
                  <p>Luni — Duminică:</p>
                  <p>09:00 - 21:00</p>
                </div>
                <div className="btn">
                  <button>
                    <p>Vezi detalii</p>
                  </button>
                </div>
              </div>
            </div>

            <div className="dimension">
              <div className="title">
                <h4>Altex Bucuresti Bucur Obor</h4>
                <p>Sos. Colentina, Bl. ALMO, Bucuresti</p>
                <div className="description">
                  <p>Luni — Duminică:</p>
                  <p>09:00 - 21:00</p>
                </div>
                <div className="btn">
                  <button>
                    <p>Vezi detalii</p>
                  </button>
                </div>
              </div>
            </div>

            <div className="dimension">
              <div className="title">
                <h4>Altex Bistrita Greenfield</h4>
                <p>Calea Moldovei, nr.15, Bistrita, Jud. Bistrita-Nasaud</p>
                <div className="description">
                  <p>Luni — Duminică:</p>
                  <p>09:00 - 21:00</p>
                </div>
                <div className="btn">
                  <button>
                    <p>Vezi detalii</p>
                  </button>
                </div>
              </div>
            </div>

            <div className="dimension">
              <div className="title">
                <h4>Altex Timisoara Auchan</h4>
                <p>Str. Calea Sagului, Nr. 223, Timisoara, Jud. Timis</p>
                <div className="description">
                  <p>Luni — Duminică:</p>
                  <p>09:00 - 21:00</p>
                </div>
                <div className="btn">
                  <button>
                    <p>Vezi detalii</p>
                  </button>
                </div>
              </div>
            </div>

            <div className="dimension">
              <div className="title">
                <h4>Altex Arad Greenfield</h4>
                <p>Calea Radnei, Nr 294A, Arad, Jud. Arad</p>
                <div className="description">
                  <p>Luni — Duminică:</p>
                  <p>09:00 - 21:00</p>
                </div>
                <div className="btn">
                  <button>
                    <p>Vezi detalii</p>
                  </button>
                </div>
              </div>
            </div>

            <div className="dimension">
              <div className="title">
                <h4>Altex Oradea Era Shopping Park</h4>
                <p>Calea Aradului, Nr. 62, DN 79, Oradea, Jud. Bihor</p>
                <div className="description">
                  <p>Luni — Duminică:</p>
                  <p>09:00 - 21:00</p>
                </div>
                <div className="btn">
                  <button>
                    <p>Vezi detalii</p>
                  </button>
                </div>
              </div>
            </div>

            <div className="dimension">
              <div className="title">
                <h4>Altex Cluj Auchan</h4>
                <p>Bdul. Muncii, Nr. 1-15, Complex Aushopping Iris, Cluj-Napoca, Jud. Cluj</p>
                <div className="description">
                  <p>Luni — Duminică:</p>
                  <p>09:00 - 21:00</p>
                </div>
                <div className="btn">
                  <button>
                    <p>Vezi detalii</p>
                  </button>
                </div>
              </div>
            </div>

            <div className="dimension">
              <div className="title">
                <h4>Altex Zalau Value Centre</h4>
                <p>Bd.Mihai Viteazul 58  Zalau, Jud.Salaj</p>
                <div className="description">
                  <p>Luni — Duminică:</p>
                  <p>09:00 - 21:00</p>
                </div>
                <div className="btn">
                  <button>
                    <p>Vezi detalii</p>
                  </button>
                </div>
              </div>
            </div>

            <div className="dimension">
              <div className="title">
                <h4>Altex Promenada Sibiu</h4>
                <p>Strada Lector 1-3 A, in cadrul Sibiu Promenada Mall, etaj 2, oras Sibiu</p>
                <div className="description">
                  <p>Luni — Duminică:</p>
                  <p>09:00 - 21:00</p>
                </div>
                <div className="btn">
                  <button>
                    <p>Vezi detalii</p>
                  </button>
                </div>
              </div>
            </div>

            <div className="dimension">
              <div className="title">
                <h4>Altex City Park Constanta</h4>
                <p>B-dul Alexandru Lapusneanu, Nr. 116C, Constanta, Jud. Constanta</p>
                <div className="description">
                  <p>Luni — Duminică:</p>
                  <p>09:00 - 21:00</p>
                </div>
                <div className="btn">
                  <button>
                    <p>Vezi detalii</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ContentPage>
      </Content>
      <Footer />
    </Container>
  );
}

export default Magazine;

const Container = styled.div``;

const Content = styled.div`
  margin-left: 16%;
  margin-right: 16%;
  display: flex;
`;

const ContentHome = styled.div`
  margin-left: 16%;
  margin-right: 16%;

  .home {
    padding-top: 15px;

    small {
      font-size: 14px;
      color: #c00033;
    }

    p {
      color: #000;
      font-size: 14px;
    }
  }
`;

const ContentServicii = styled.div`
  cursor: pointer;
  width: 500px;
  padding: 150px 0;

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

const ContentPage = styled.div`
  padding: 52px 12px 12px 20px;

  .header_search {
    display: flex;
    flex: 1;
    align-items: center;
    border-radius: 24px;
  }

  .header_searchInput {
    height: 46px;
    padding: 10px;
    border: none;
    width: 505px;
    margin-top: 8px;
    border: 1px solid lightgray;
    border-bottom-left-radius: 12px;
    border-right: none;
    font-style: italic;
    outline: none;
  }

  .header_searchIcon {
    width: 40px;
    padding: 6px;
    height: 46px !important;
    background: #fff;
    color: lightgray;
    margin-top: 8px;
    border: 1px solid lightgray;
    border-top-right-radius: 12px;
    border-left: none;
  }

  .magazine {
    padding: 40px 0 0;

    h2 {
      font-size: 32px;
      font-weight: 500;
      color: #000;
    }

    p {
      padding: 12px 32px 0 0;
      font-size: 16px;
      color: #000;
      line-height: 1.5;
    }
  }

  .regiuni {
    margin: 26px 0;

    .label {
      display: flex;
      align-items: center;
      justify-content: start;

      p {
        font-size: 16px;
        margin: 0 12px 0 0;
      }

      .select {
        cursor: pointer;
        border: none;
        border: 1px solid lightgray;
        border-bottom-left-radius: 12px;
        border-top-right-radius: 12px;
        width: 260px;
        height: 44px;
        padding: 2px;
        margin: 2px 0;
      }
    }
  }

  .maps {
    img {
      width: 100%;
      height: 40vh;
    }
  }

  .city {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;

    .dimension{
      margin: 1rem;
      width: 100%;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .title {
      h4 {
        color: #000;
        font-size: 18px;
        margin: 0 0 8px;
      }

      p {
        color: #000;
        font-size: 14px;
        margin: 0 0 12px;
      }
    }

    .description {
      display: flex;

      p {
        margin: 0 4px 0 0;
        color: 000;
      }

      p {
        font-size: 14px;
      }
    }

    .btn {
      button {
        margin: 15px 0;
        border: none;
        border: 1px solid #f5cb38;
        width: 140px;
        height: 45px;
        border-bottom-right-radius: 12px;
        border-top-left-radius: 12px;
        background-color: #f5cb38;

        p {
          font-size: 16px;
          padding: 12px;
        }
      }
    }
  }
`;
