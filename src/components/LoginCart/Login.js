import React from "react";
import styled from "styled-components";
import { useRef, useState } from "react";
import useClickOutside from "../ComponentsExpand/useClickOutside";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setIsVisible(false));

  return (
    <Container>
      <div ref={ref}>
        <div type="button" onClick={() => setIsVisible(!isVisible)}>
          <div className="cont">
            <PermIdentityIcon />
            Cont
            <KeyboardArrowDownIcon />
          </div>
        </div>
        {isVisible && (
          <ContentLog>
            <div className="login">
              <p className="text-login">
                Introdu adresa de email <strong>*</strong>
              </p>
              <form>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Introdu adresa de email"
                  required={true}
                />

                <p className="text-login">
                  Parola <strong>*</strong>
                </p>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Parola"
                  required={true}
                />
                <div className="auth">
                  <a href="/">
                    <button>Autentificare</button>
                  </a>
                </div>
              </form>

              <div className="account">
                <a href="/">Recupereaza parola</a> <br />
                <a href="/">Inregistrare</a>
              </div>
            </div>
          </ContentLog>
        )}
      </div>
    </Container>
  );
}

export default Login;
const Container = styled.div`
  .cont {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ContentLog = styled.div`
  position: absolute;
  margin-top: 15px;
  right: -50px;
  width: 300px;
  height: 345px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
  border-radius: 6px;

  .login {
    .text-login {
      margin: 10px 0;
      font-size: 14px;
      display: flex;

      strong {
        color: red;
        font-size: 20px;
        margin: 0 5px;
      }

      :after {
        content: "";
        position: absolute;
        right: 66px;
        width: 8px;
        height: 8px;
        border-top: 1px solid lightgray;
        border-left: 1px solid lightgray;
        background-color: #fff;
        top: -5.2px;
        transform: rotate(45deg);
      }
    }

    form {
      input {
        border: none;
        border: 1px solid lightgray;
        border-bottom-left-radius: 12px;
        border-top-right-radius: 12px;
        width: 250px;
        height: 45px;
        background-color: #E8FOFE;
        padding: 11px 15px 12px;
        font-style: italic;
      }
    }

    .auth {
      button {
        border: none;
        border-bottom-left-radius: 12px;
        border-top-right-radius: 12px;
        background-color: #f9c113;
        width: 250px;
        height: 45px;
        margin: 20px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        padding: 12px;
      }
    }

    .account {
      text-align: center;
      margin: 0 0 8px;
      line-height: 1.5;
      a {
        color: #c00033;
        text-decoration-line: underline;
      }
    }
  }
`;
