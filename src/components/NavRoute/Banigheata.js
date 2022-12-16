import React from "react";
import styled from "styled-components";
import Footer from "../Footer";

function Banigheata() {
  return (
    <Container>
      <Content>
        <div className="home">
          <a href="/">
            <p>
              <small>Acasa</small> / Credit Nevoi Personale | Altex
            </p>
          </a>
          <div className="banner">
            <img src="/images/Banigheata/banner.jpg" alt="" />
          </div>

          <div className="text">
            <h2>Orice planuri ai avea, noi te ajutăm să devină realitate!</h2>
          </div>

          <div className="planuri">
            <p>
              Ai in plan de mult sa mobilezi si restul casei sau frigiderul s-a
              stricat si ai nevoie de unul nou? Sau poate strangi bani pentru
              mult visata vacanta in Maldive? Nu mai amana aceste planuri!
              Creditul de Nevoi Personale este aici sa te ajute. Poti solicita
              un credit de nevoi personale fara costuri ascunse pentru ca tu sa
              iti indeplinesti toate dorintele. <br />
              <strong>
                Credit nevoi personale cu BANI GHEATA, ajutorul tau de nadejde,
                in orice situatie
              </strong>
            </p>
            <br />
            <p>
              Perfect pentru situatii neprevazute, un credit de nevoi personale
              este o alegere buna, indiferent daca ai planuri mici sau mari.
            </p>
            <br />
            <p>
              Poti aplica pentru creditul de nevoi personale in orice magazin
              Altex, de unde ai posibilitatea sa ridici pana la 10.000 lei bani
              cash, pe loc, direct din magazin. Daca optezi pentru un credit cu
              o valoare mai mare de 10.000 lei, banii vor fi transferati intr-un
              cont bancar al beneficiarului.
            </p>
            <br />
            <p>
              Sau poti opta pentru Creditul de Nevoi personale cu aplicare
              online, fara vizite in magazin sau stat la cozi. Completezi
              datele, semnezi contractul si, dupa aprobare, noi iti transferam
              banii intr-un cont bancar.
            </p>
            <div className="AplicaAici">
              <button>Aplica aici</button>
            </div>
            <p>
              <strong>Iti transformam dorintele in realitate!</strong>
            </p>
            <br />
            <p>
              Noi credem in planurile si visurile tale. Aplica pentru un credit
              de nevoi personale si transtorma-ti dorintele in realitate. Poti
              opta pentru o valoare a creditului cuprinsa intre 1.000 si 20.000
              de lei pe o perioada de creditare cuprinsa intre 6-59 de luni.
            </p>
            <br />
            <p>
              <strong>Criterii de eligibilitate:</strong>
            </p>
            <br />
            <p>- Apasa butonul de mai jos</p>
            <p>- Completeaza datele solicitate</p>
            <p>- Semneaza electronic contractul</p>
            <p>- Dupa aprobare, iti transferam banii in contul tau bancar</p>
            <div className="AplicaAici">
              <button>Aplica aici</button>
            </div>
            <p>
              In cazul in care iti este mai usor, te asteptam intr-un magazin
              Altex, unde un consultant de credit iti va oferi suportul necesar
              in procesul de aplicare. Dupa aprobarea creditului de nevoi
              personale, poti pleca cu banii CASH, pe loc, direct din magazin
              (valabil pentru contractele cu o valoare de maxim 10.000 lei).
              Creditul de nevoi personale "BANI GHEATA" este acordat de catre
              Credex IFN, partener Altex Romania in intermedierea creditelor de
              nevoi personale.
              <br />
              <strong>Exemplu reprezentativ credit de nevoi personale:</strong>
            </p>
            <br />
            <p>
              Pentru un credit cu dobanda de 9.99% Pentru un credit de nevoi
              personale in valoare de 15.000 Lei, rambursat in 60 luni, rata
              anuala a dobanzii este 9.99% (fixa pe toata durata contractului),
              comisionul de analiza a dosarului (finantat de creditor) este de
              290 lei, comisionul lunar de administrare este de 10 lei, rata
              lunara este de 334,79 lei, valoarea totala platibila este de
              20.087.53 lei si dobanda anuala efectiva (DAE) este de 12,85%.
            </p>
            <div className="regulament">
              <button>Regulament Campanie</button>
            </div>
          </div>
        </div>
      </Content>

      <Footer />
    </Container>
  );
}

export default Banigheata;

const Container = styled.div``;

const Content = styled.div`
  margin-left: 16%;
  margin-right: 16%;
  margin-bottom: 100px;

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

  .banner {
    margin-top: 30px;

    img {
      width: 100%;
      height: 60vh;
      border-radius: 8px;
    }
  }

  .text {
    color: #fff;
    margin-top: 15px;
    background-color: #bc003b;
    border-radius: 8px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    h2 {
      font-size: 16px;
    }
  }

  .planuri {
    margin-top: 2px;

    p {
      font-size: 16px;
    }
  }

  .AplicaAici {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      margin: 16px 0px;
      font-size: 16px;
      border: none;
      border: 1px solid lightgray;
      color: #d71440;
      width: 275px;
      height: 45px;
      background: #ffc348;
      border-bottom-left-radius: 12px;
      border-top-right-radius: 12px;
      cursor: pointer;
    }
  }

  .regulament {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    button {
      margin: 16px 0px;
      font-size: 16px;
      border: none;
      border: 1px solid lightgray;
      color: #d71440;
      width: 365px;
      height: 45px;
      background: #ffc348;
      border-bottom-left-radius: 12px;
      border-top-right-radius: 12px;
      cursor: pointer;
    }
  }
`;
