import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <Container>
      <ContentBestBuy>
        <div className="bestbuy-content">
          <div className="bestbuy-img">
            <img src="images/imagesHomepage/bb1.jpg" alt="" />
            <img src="images/imagesHomepage/bb1.jpg" alt="" />
          </div>
          <div className="bestbuy-text">
            <h2>Cel mai bun raport calitate-pret</h2>
            <p>
              Conform sondajului Best Buy Award 2021/2022 efectuat de
              organizatia iCertias.
            </p>
          </div>
        </div>
      </ContentBestBuy>

      <div className="footer">
        <div className="despre-altex">
          <h2>Despre Altex</h2>
          <div className="line"></div>
          <p>Despre noi</p>
          <p>Cariere</p>
          <p>Branduri disponibile</p>
          <p>Categorii produse</p>
          <p>Protectia mediului</p>
          <p>Vanzari corporate</p>
          <p>Tax free</p>
        </div>

        <div className="suport-clienti">
          <h2>Suport clienti</h2>
          <div className="line"></div>
          <p>Articole suport</p>
          <p>Contact</p>
          <p>Returneaza produse</p>
          <p>Reclamatii</p>
          <p>Reteaua de magazine Altex</p>
        </div>

        <div className="informatii-legale">
          <h2>Informatii legale</h2>
          <div className="line"></div>
          <p>Termeni si conditii</p>
          <p>Politica cookie-uri</p>
          <p>Informatii privind DEEE</p>
          <p>A.N.P.C</p>
          <p>A.N.P.C. - SAL</p>
          <p>
            Protectia datelor cu caracter <br></br> personal
          </p>
          <p>ODR</p>
          <a href="https://anpc.ro/ce-este-sal/">
            <img src="images/imagesHomepage/anpc-sal.png" alt="" />
          </a>
          <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO">
            <img src="images/imagesHomepage/anpc-sol.png" alt="" />
          </a>
        </div>

        <div className="contact">
          <h2>Contact</h2>
          <div className="line"></div>
          <p>Telefon: 0123 012 12</p>
          <p>Fax: 012 / 123 123 12</p>
        </div>

        <div className="social">
          <h2>Urmareste-ne</h2>
          <div className="line"></div>

          <div className="social-icons">
            <FacebookIcon />
            <InstagramIcon />
            <LinkedInIcon />
            <YouTubeIcon />
          </div>

          <h2>Comunicare</h2>
          <div className="line"></div>
          <p>Abonare newsletter</p>

          <div className="fundatia-altex">
            <p>FUNDATIA</p>
            <img src="images/logo/logo1.png" alt="" />
          </div>
        </div>
      </div>

      <div className="sc-altex">
        <p>
          Cel mai mic pret din Romania! Daca gasesti in alta parte mai ieftin
          primesti de doua ori diferenta
        </p>
        <p>
          S.C. ALTEX ROMANIA S.R.L. este inregistrata cu numarul 600 / 2006 in
          registrul de evidenta a prelucrarilor de date cu caracter personal
        </p>
      </div>
    </Container>
  );
}

export default Footer;

const ContentBestBuy = styled.div`
  height: 120px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: start;

  .bestbuy-content {
    display: flex;
    margin-left: 16%;
    margin-right: 16%;

    .bestbuy-img {
      img {
        width: 40px;
        border-radius: 50%;
        margin-left: 10px;
      }
    }

    .bestbuy-text {
      margin-left: 20px;
      h2 {
        font-size: 0.9em;
        color: #f5cb38;
      }

      p {
        margin-top: 5px;
        color: #fff;
        font-size: 0.8em;
      }
    }
  }
`;


const Container = styled.div`
  background-color: #2a2d30;
  width: 100%;
  height: 650px;
  

  .footer {
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
    margin-left: 16%;
    margin-right: 16%;
    font-size: 14px;
    color: #fff;

    .line {
      border: 1px solid #deb31d;
      background-color: #deb31d;
      margin: 10px 0 16px;
      width: 30px;
    }

    .despre-altex {
      h2 {
        margin: 6px 0 0;
        color: #9f9f9f;
      }

      p {
        padding: 4px 0;
        cursor: pointer;
        text-decoration: none;

        &:hover{
          color:  #3366ff;
        }
      }
    }

    .suport-clienti {
      h2 {
        margin: 6px 0 0;
        color: #9f9f9f;
      }
      p {
        padding: 4px 0;
        cursor: pointer;
        text-decoration: none;

        &:hover{
          color:  #3366ff;
        }
      }
    }

    .informatii-legale {

      h2 {
        margin: 6px 0 0;
        color: #9f9f9f;
      }

      p {
        padding: 4px 0;
        cursor: pointer;
        text-decoration: none;

        &:hover{
          color:  #3366ff;
        }
      }

      img {
        margin-top: 5px;
        display: flex;
        padding: 4px 0;
        width: 235px;
        height: 60px;
      }
    }

    .contact {
      h2 {
        margin: 6px 0 0;
        color: #9f9f9f;
      }

      p {
        padding: 4px 0;
        cursor: pointer;
        text-decoration: none;

        &:hover{
          color:  #3366ff;
        }
      }
    }

    .social {
      .social-icons {
        color: lightgray;
        margin-bottom: 25px;
        cursor: pointer;
        &:hover{
          color: #f5cb38;
        }
      }

      .fundatia-altex {
        margin-top: 5px;
        display: flex;
        align-items: center;

        p {
          margin-top: 7px;
          margin-right: 5px;
          font-size: 12px;
          cursor: pointer;
          text-decoration: none;
    
            &:hover{
              color:  #3366ff;
            }
          }
        }

        img {
          width: 60px;
        }
      }
      h2 {
        margin: 6px 0 0;
        color: #9f9f9f;
      }

      p {
        padding: 4px 0;
        text-decoration: underline;
        cursor: pointer;

        &:hover{
          color:  #3366ff;
        }
      }
    }
  }

  .sc-altex {
    margin-left: 18%;
    margin-right: 16%;
    margin-top: 50px;
    color: #fff;

    p {
      margin-top: 5px;
      font-size: 0.7em;
    }
  }
`;
