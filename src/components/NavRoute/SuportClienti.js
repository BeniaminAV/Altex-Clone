import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ExpandTXT from "../ComponentsExpand/ExpandTXT";
import ExpandTXT1 from "../ComponentsExpand/ExpandTXT1";
import Footer from "../Footer";

function SuportClienti() {
  return (
    <Container>
      <Content>
        <div className="acasa">
          <a href="/">
            <p>
              <small>Acasa</small> / Suport Clienti
            </p>
          </a>
        </div>

        <ContentHelp>
          <div className="help">
            <h2 className="title">Cu ce te putem ajuta?</h2>
            <div className="header_search">
              <input
                className="header_searchInput"
                type="text"
                placeholder="Cu ce te putem ajuta?"
              />
              <SearchIcon className="header_searchIcon" />
            </div>
          </div>
        </ContentHelp>

        <ContentSearch>
          <div className="content">
            <div className="contentSearch">
              <h2>Comenzi</h2>
              <p>Inregistrare comanda online</p>
              <p>Livrare</p>
              <p>Stoc produse</p>
              <p>Metode de plata</p>
              <p>Documente achizitie</p>
            </div>
            <div className="contentSearch">
              <h2>Servicii</h2>
              <p>Retur produse</p>
              <p>Garantia produselor</p>
              <p>Rezerva in magazin</p>
              <p>Servicii de instalare</p>
              <p>Extragarantie</p>
              <p>Mobile protect</p>
              <p>2X Diferenta</p>
            </div>
            <div className="contentSearch">
              <h2>Cont Client</h2>
              <p>Creare cont</p>
              <p>Resetare parola</p>
              <p>Eroare actualizare date</p>
            </div>
            <div className="contentSearch">
              <h2>Sesizari si reclamatii</h2>
              <p>Formular contact</p>
              <p>Returneaza produse</p>
            </div>
          </div>
          <div className="center">
            <div className="contentSearch">
              <h2>Informatii generale</h2>
              <p>Termeni si conditii</p>
              <p>Protectia datelor cu caracter personal</p>
              <p>Informatii privind DEEE</p>
              <p>Politica cookie-uri</p>
            </div>
          </div>
        </ContentSearch>
      </Content>

      <ContentArticle>
        <div className="article">
          <h2>Cele mai citite articole de suport</h2>
          <div className="articles-1">
            <div className="articles">
              <p>Termeni si conditii</p>
              <span>
                Termeni si conditii de utilizare a site-ului
              </span>
            </div>

            <div className="articles">
              <p>Garantia produselor</p>
              <span>Informatii despre garantia produselor</span>
            </div>

            <div className="articles">
              <p>Inregistrare comanda online</p>
              <span>Cum comand online</span>
            </div>
          </div>

          <div className="articles-2">
            <div className="articles">
              <p>Mobile protect</p>
              <span>Asigura-ti produsul - Mobile Protect</span>
            </div>

            <div className="articles">
              <p>Politica cookie-uri</p>
              <span>Politica cookie-uri</span>
            </div>

            <div className="articles">
              <p>Informatii privind DEEE</p>
              <span>Informatii privind DEEE</span>
            </div>

            <div className="articles">
              <p>Creare cont</p>
              <span>Cum creez un cont nou pe site</span>
            </div>
          </div>

          <div className="articles-3">
            <div className="articles">
              <p>Documente achizitie</p>
              <span>Factura produselor tale</span>
            </div>

            <div className="articles">
              <p>Protectia datelor cu caracter personal</p>
              <span>Protectia datelor cu caracter personal</span>
            </div>

            <div className="articles">
              <p>Extragarantie</p>
              <span>Serviciul dedicat produselor tale - Extragarantie</span>
            </div>
          </div>
        </div>
      </ContentArticle>

      <ContentQuestion>
        <div className="title">
          <h3>Cele mai votate intrebari frecvente</h3>
        </div>
        <div className="question">
          <ExpandTXT question="Documente achizitie" />
          <ExpandTXT1 />
        </div>
      </ContentQuestion>

      <ContentContact>
        <div className="contact">
          <div className="contacts">
            <img src="images/SuportClienti/1.svg" alt="" />
            <div className="content">
              <h2>Contacteaza-ne</h2>
              <div className="content-explore-1">
                <a href="/">Date si formular de contact</a>
                <a href="/">Returneaza produse</a>
              </div>
            </div>
          </div>

          <div className="contacts">
            <img src="images/SuportClienti/2.svg" alt="" />
            <div className="content">
              <h2>Reteaua de magazine</h2>
              <div className="content-explore-2">
                <p>
                  Vezi adresele magazinelor, datele de contact si orarul de
                  functionare.
                </p>
                <a href="/">Lista magazinelor Altex</a>
              </div>
            </div>
          </div>

          <div className="contacts">
            <img src="images/SuportClienti/3.svg" alt="" />
            <div className="content">
              <h2>Informatii</h2>
              <div className="content-explore-3">
                <a href="/">Termeni si conditii</a>
                <a href="/">Politica cookie-uri</a>
                <a href="/">Informatii privind DEEE</a>
              </div>
            </div>
          </div>
        </div>
      </ContentContact>

      <Footer />
    </Container>
  );
}

export default SuportClienti;

const Container = styled.div``;

const Content = styled.div`
  margin-bottom: 100px;
  margin-left: 16%;
  margin-right: 16%;
  .acasa {
    padding: 12px 0;
    margin: 0 0 24px;

    p {
      color: #000;
      font-size: 14px;
    }

    small {
      color: #c00033;
      font-size: 14px;
    }
  }
`;

const ContentHelp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 48px 0 0;

  .help {
    .title {
      font-size: 30px;
      color: #000;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .header_search {
      display: flex;
    }

    .header_searchInput {
      height: 50px;
      padding: 10px;
      border: none;
      width: 525px;
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
      height: 50px !important;
      background: #fff;
      color: lightgray;
      margin-top: 8px;
      border: 1px solid lightgray;
      border-top-right-radius: 12px;
      border-left: none;
    }
  }
`;

const ContentSearch = styled.div`
  .content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;

    .contentSearch {
      margin: 48px 0 0;
      padding: 4px 40px 0;

      h2 {
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 10px;
      }

      p {
        line-height: 2;
        font-size: 14px;
      }
    }
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: center;

    .contentSearch {
        margin: 48px 0 0;
        padding: 4px 40px 0;
  
        h2 {
          font-size: 26px;
          font-weight: 500;
          margin-bottom: 10px;
        }
  
        p {
          line-height: 2;
          font-size: 14px;
        }
      }
    }
  }
`;

const ContentArticle = styled.div`
  background-color: #fff2d6;
  height: 60vh;

  .article {
    padding-top: 50px;
    margin-left: 16%;
    margin-right: 16%;
    display: grid;
    grid-gap: 2rem;

    h2 {
      font-size: 36px;
      font-weight: 500;
      margin: 0 0 8px;
    }

    p {
      color: #8b8b8b;
      margin: 12px 12px 6px;
      text-align: start;
    }

    span {
      margin-left: 12px;
      text-align: start;
      font-size: 14px;
    }

    .articles-1 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1rem;
      width: 100% auto;
      height: 70px;
    }

    .articles-2 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 1rem;
      width: 100% auto;
      height: 70px;
    }

    .articles-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1rem;
      width: 100% auto;
      height: 70px;
    }

    .articles {
      border: 1px solid lightgray;
      background-color: #fff;
      border-top-right-radius: 12px;
      border-bottom-left-radius: 12px;
      cursor: pointer;
    }
  }
`;

const ContentQuestion = styled.div`
  margin-left: 16%;
  margin-right: 16%;
  margin-top: 50px;

  .title {
    h3 {
      font-size: 36px;
      margin: 0 0 8px;
      font-weight: 500;
    }
  }

  .question {
    display: flex;
  }
`;

const ContentContact = styled.div`
  margin-left: 16%;
  margin-right: 16%;
  margin-bottom: 100px;

  .contact {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 150px;
      height: 150px;
    }

    .contacts {
      text-align: center;

      h2 {
        font-size: 26px;
        font-weight: 500;
        margin: 24px 0 0;
      }

      .content-explore-1 {
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          margin: 16px 0 0;
          color: #000;
        }
      }

      .content-explore-2 {
        p {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          margin: 16px 0 0;
          color: #000;
        }

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          margin: 16px 0 0;
          color: #000;
        }
      }

      .content-explore-3 {
        h2 {
        }
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          margin: 16px 0 0;
          color: #000;
        }
      }
    }
  }
`;
