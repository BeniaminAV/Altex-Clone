import React from "react";
import styled from "styled-components";
import Footer from "../Footer";

function Diferenta() {
  return (
    <Container>
      <ContentDiferenta>
        <div className="acasa">
          <a href="/">
            <p>
              <small>Acasa</small> / 2x Diferenta
            </p>
            <p className="diferentatxt">2xDiferenta</p>
          </a>
        </div>
        <div className="diferentaImg">
          <img src="/images/return/return.png" alt="" />
        </div>

        <p>
          Vrem sa ne asiguram ca te bucuri de cele mai competitive preturi
          atunci cand cumperi din magazinele ALTEX sau de pe https://altex.ro,
          asa ca iti vom returna de 2 ori diferenta, pentru produsul cumparat,
          in conditiile descrise mai jos.
        </p>
        <br />
        <p>Conditiile de validare a cererii de 2x Diferenta:</p>
        <br />
        <p>
          Pentru ca un client ALTEX sa poata beneficia de aceasta promotie,
          trebuie sa intruneasca cumulativ urmatoarele conditii:
        </p>
        <br />
        <p>
          1. Clientul este eligibil pentru rambursarea dublului diferentei daca
          a achizitionat si platit produse de pe site-ul https://altex.ro/ sau
          din magazinele Altex, avand creat un cont de utilizator si achizitia
          asociata contului sau. Pentru achizitiile din magazinul fizic
          autentificarea se face la casa de marcat prin oferirea unui numar de
          telefon valid si alocarea vanzarii in contul clientului. In cazul in
          care nu se identifica un cont de client, angajatul din magazin creeaza
          unul in sistemele interne urmand ca la momentul inregistrarii contului
          online clientul sa utilizeze acelasi numar de telefon oferit.
        </p>
        <br />
        <p>
          2. Clientul sa gaseasca spre comercializare acelasi produs, acelasi
          brand si acelasi cod de produs, intr-unul dintre magazinele sau
          site-urile mentionate la art. 3.4. si 3.5. din prezentul regulament,
          insa la un pret mai mic celui practicat in magazinele ALTEX sau pe
          https://altex.ro .
        </p>
        <br />
        <p>
          3. Pretul mai mic trebuie sa fie acelasi in magazinul concurent (fizic
          sau online), prin aceasta intelegandu-se o suma fixa exprimata in lei,
          aceeasi unitate monetara, aceleasi subunitati/zecimale, pentru minimum
          24 de ore, de la momentul completarii formularului de rambursare.
          Clientul trebuie sa probeze pretul mai mic prin fotografii datate sau
          print screen-uri/URL in cazul achizitiei online (maxim 7 zile
          calendaristice de la data achizitiei specificata pe bonul
          fiscal/factura). Clientul va trimite in scris, ca reply la mail-ul de
          inregistrare a cererii de rambursare, dovada ca pretul mai mic a fost
          mentinut la un alt vanzator pentru o perioada de 24 de ore; in acest
          sens, se va trimite un mail initial cu dovada pretului mai mic si un
          mail secundar, dupa o perioada de minim 24 de ore din care sa reiasa
          ca produsul respectiv a avut un pret mai mic in acest interval de
          timp.
        </p>
        <br />
        <p>
          4. Produsul achizitionat de pe site-ul https://altex.ro, trebuie sa
          fie disponibil in stocul concurentului pe toata durata de referinta,
          respectiv 24 de ore calculate de la data completarii formularului de
          rambursare.
        </p>
        <br />
        <p>
          5. Produsul al carui pret este mai mic in magazinul concurent trebuie
          sa poata fi achizitionat in aceleasi conditii de comercializare in
          care a fost achizitionat din magazinele ALTEX sau de pe www.altex.ro:{" "}
          <br />
          a. Finantare – numerar sau sistem de plata in rate; <br />
          b. Servicii oferite – garantie si costuri de livrare; <br />
          c. Termenul de garantie al produsului si garantia asigurata de
          reprezentantii autorizati. <br />
        </p>
        <br />
        <p>
          6. Clientul sa nu fi returnat produsul achizitionat din magazinele
          ALTEX sau de pe www.altex.ro.
        </p>
        <br />
        <p>
          Compararea pretului va fi facuta intre pretul din ziua achizitiei
          produsului din magazinul ALTEX sau de pe https://altex.ro, dupa
          aplicarea oricaror forme de reducere – discount, voucher, cupon, etc -
          fara a tine cont de pretul altor servicii asociate (exemplu: cost de
          transport, extragarantie, asigurare etc.), si pretul de vânzare oferit
          de catre magazinele sau platformele de comert online mentionate la
          art.3.4 si 3.5 din Regulamentul Campaniei.
        </p>
        <br />
        <p>
          Pentru alte detalii, te rugam sa consulti Regulamentul campaniei ”De
          2xDiferenta la toate produsele” .
        </p>
      </ContentDiferenta>
      <Footer />
    </Container>
  );
}

export default Diferenta;

const Container = styled.div``;

const ContentDiferenta = styled.div`
  margin-left: 16%;
  margin-right: 16%;
  margin-bottom: 100px;
  line-height: 1.5;

  .acasa {
    padding: 12px 0;

    p {
      color: #000;
      font-size: 14px;
    }

    small {
      color: #c00033;
      font-size: 14px;
    }

    .diferentatxt {
      padding: 12px 0;
      font-size: 15px;
    }
  }

  .diferentaImg {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;
      height: auto;
    }
  }
`;
