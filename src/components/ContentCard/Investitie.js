import React from "react";
import styled from "styled-components";
import Footer from "../Footer";

function Investitie() {
  return (
    <Container>
      <ContentInvestitie>
        <div className="acasa">
          <a href="/">
            <p>
              <small>Acasa</small> / Extragarantie - protejeaza-ti investitia
            </p>
          </a>
        </div>

        <p>Extragarantie</p>
        <br />
        <p className="extra">CE ESTE EXTRAGARANTIA?</p>
        <p>
          Un serviciu care se achizitioneaza optional impreuna cu produsul sau
          retroactiv pe perioada de garantie, contra cost si care pe parcursul
          valabilitatii ofera utilizatorului urmatoarele beneficii:
        </p>
        <p>Remedierea defectelor de fabricatie;</p>
        <p>
          Transportul produsului defect de la client la unitatea de service si
          retur;
        </p>
        <p>
          Inlocuirea produsului in cazul in care nu se poate remedia defectul,
          in conditiile definite de prezentul document.
        </p>
        <p>
          <strong>La ce te ajuta extragarantia?</strong>
          <br />
          Acest serviciu asigura extinderea perioadei de acoperire a garantiei
          cu unul sau doi ani peste perioada de garantie standard, oferita de
          furnizori.
        </p>
        <p>
          <strong>Cum functioneza extragarantia?</strong>
          <br />
          Serviciul poate fi achizitionat de orice fel de client, fie el
          persoana fizica sau juridica, indiferent de modalitatea in care a
          facut achizitia produsului: online, din magazine, sau prin comanda
          telefonica.
        </p>
        <p>
          <strong>Cum cumpar acest serviciu?</strong>
          <br />
          La momentul cumpararii acestui serviciu, clientul va plati
          contravaloarea lui, potrivit ofertei afisate pe site.
        </p>
        <p><strong>Alte clauze:</strong><br />
        Produsul se va repara intr-un interval de pana la 15 zile calendaristice de la data predarii produsului reprezentantului unitatii de service. <br />
        Produsul reparat va beneficia de perioada de garantie extinsa ramasa pana la expirarea acesteia. <br />
        Daca reparatia nu se poate efectua, compania de service se obliga sa inlocuiasca produsul cu un produs identic daca acesta se afla disponibil in stocul unitatii vanzatoare. <br />
        Produsul inlocuit beneficiaza de garantie comerciala noua, care va curge din momentul inlocuirii produsului. <br />
        Daca nici inlocuirea produsului nu este posibila, vanzatorul va restitui suma achitata initial pentru produsul ce beneficiaza de garantia extinsa. <br />
        La expedierea produsului prin curier clientul va ambala produsul in ambalajul original sau in alt ambalaj care sa transmita transportul in siguranta. <br />
        Orice modificare pe certificatul de extragarantie duce la anularea documentului si pierderea extragarantiei. <br />
        Extragarantia este valabila doar insotita de urmatoarele documente in original: documentul de achizitie al produsului, certificatul de garantie, documentul de achizitie al serviciului de extragarantie, certificatul de extragarantie completat. <br />
        Conditiile de acordare ale extragarantiei le gasiti <strong className="aici">aici</strong>.
        </p>
      </ContentInvestitie>

      <Footer/>
    </Container>
  );
}

export default Investitie;

const Container = styled.div``;

const ContentInvestitie = styled.div`
  margin-left: 16%;
  margin-right: 16%;
  margin-bottom: 100px;
  line-height: 1.5;
  font-size: 16px;

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

  .extra {
    font-size: 14px;
  }

  .aici{
    color: #C00033;
    font-size: 16px;
  }
`;
