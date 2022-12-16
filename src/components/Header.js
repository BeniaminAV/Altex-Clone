import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Produse from "./NavRoute/Produse";
import Finantare from "./NavRoute/Finantare";
import Login from "./LoginCart/Login";
import Cart from "./LoginCart/Cart";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();

  return (
    <>
      <Container>
        <ContentHeader>
          <div className="header">
            <Link to="/">
              <img
                src="/images/logo/logo1.png"
                alt="header_img"
                className="header_logo"
              />
            </Link>

            <div className="header_search">
              <input
                className="header_searchInput"
                type="text"
                placeholder="Cauta produsul dorit"
              />
              <SearchIcon className="header_searchIcon" />
            </div>

            <div className="header_nav">
              <span className="header_cart">
                <p className="counter">{basket?.length}</p>
                <Cart />
              </span>

              <div className="header_option">
                <span className="header_contOne">
                  <Login />
                </span>
              </div>
            </div>
          </div>
        </ContentHeader>

        <ContentNav>
          <NavMenu>
            <div className="nav">
              <div className="homeColor">
                <span className="colorOne">
                  <Produse />
                </span>
              </div>
            </div>

            <div className="nav">
              <Link to={"/Promotii"}>
                <span>Promotii</span>
              </Link>
            </div>

            <div className="nav">
              <Link to={"/BANI&GHEATA"}>
                <span className="bani">Bani Gheata</span>
              </Link>
            </div>

            <div className="nav">
              <a href="/branduri">
                <span>Branduri</span>
              </a>
            </div>

            <div className="nav">
              <div className="finantare">
                <Finantare />
              </div>
            </div>

            <div className="nav">
              <a href="/suport&clienti">
                <span>Suport clienti</span>
              </a>
            </div>

            <div className="nav">
              <a href="/magazine">
                <span>Magazine</span>
              </a>
            </div>

            <div className="nav">
              <a href="/altex&travel">
                <span>Altex Travel</span>
              </a>
            </div>
          </NavMenu>
        </ContentNav>
      </Container>
    </>
  );
}

export default Header;

const Container = styled.div``;

const ContentNav = styled.div`
  background-color: #c00033;
  height: 47px;
  width: 100%;
`;

const NavMenu = styled.div`
  cursor: pointer;
  color: #fff;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin-left: 16%;
  margin-right: 16%;

  .nav {
    border-right: 1px solid rgba(255,255,255,.5);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #8a0f06;
    }
  }

  .bani {
    background-color: #f9c113;
    width: 162px;
    height: 47px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;

    &:hover {
      background-color: #8a0f06;
      color: #fff;
    }
  }

  a {
    align-items: center;
    justify-content: center;
    display: flex;
    color: #fff;
  }

  .homeColor {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d9023b;
    width: 100%;
    height: 100%;
  }

  .finantare {
    display: flex;
    align-items: center;
  }
`;

const ContentHeader = styled.div`
  .header {
    height: 75px;
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    margin-left: 15%;
    margin-right: 16%;

    .header_logo {
      width: 129px;
      object-fit: contain;
      margin: 0 20px;
    }

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
      width: 405px;
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

    .header_nav {
      display: flex;
      justify-content: space-evenly;

      .header_cart {
        cursor: pointer;
        display: flex;
        align-items: center;
        color: #000;
        font-weight: 500;
        font-size: 14px;

        .counter {
          font-size: 12px;
          background-color: #319d10;
          border-radius: 6px;
          width: 23px;
          height: 19px;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .header_option {
        display: flex;
        justify-content: space-evenly;
        margin-left: 10px;
        margin-right: 10px;
        color: #000;

        .header_contOne {
          cursor: pointer;
          display: flex;
          align-items: center;
          font-weight: 500;
          font-size: 14px;
        }
      }
    }
  }
`;
