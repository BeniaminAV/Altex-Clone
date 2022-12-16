import React from "react";
import styled from "styled-components";
import Footer from "../Footer";

function Transport() {
  return (
    <Container>
      <ContentTransport>
        <div className="acasa">
          <a href="/">
            <p>
              <small>Acasa</small> / Termeni si conditii de livrare
            </p>
          </a>
        </div>
        <p>
          Termeni si conditii de livrare
          <br />
          <strong>Livrare comenzi</strong>
        </p>
        <br />
        <p>
          Modalitatea si conditiile de livrare difera in functie de valoarea
          totala a comenzii, de locatia unde se face livrarea si greutatea si
          dimensiunile coletului, astfel: <br /> 1. prin serviciu de curierat
          door to door la adresa indicata in comanda <br /> 2. prin serviciu de
          livrare cu 2 oameni pentru articolele marcate "Livrare cu 2 oameni"
          pana in locuinta clientului, in locul indicat de acesta <br />
          Comenzile pot fi livrate doar pe teritoriul Romaniei.
        </p>
        <br />
        <p>
          Modalitate de plata acceptata la livrare: numerar, card credit/ debit,
          virament bancar <br /> Pentru comenzile cu valoare mai mica de 1000 de
          lei se percepe taxa de transport in valoare de 20 lei.
        </p>
        <br />
        <p>
          Pentru comenzile de produse fizice, cu valoare mai mare sau egala cu
          1000 de lei, fara servicii aditionale, transportul este gratuit.
        </p>
        <br />
        <p>
          Exceptii la calculul taxei de transport indiferent de valoarea
          comenzilor fac acele comenzi care contin produse din urmatoarele
          categorii:
        </p>
        <br />
        <p>
          1. Bauturi: pana in 30 de litri se va aplica taxa standard de 20 lei,
          la fiecare litru in plus fata de cei 30 de litri se va adauga 1 leu in
          plus pe langa cei 20 lei. <br /> 2. Articole agabaritice, marcate cu
          "Livrare cu 2 oameni", unde taxele de transport sunt urmatoarele:
        </p>
        <br />
        <p>
          - articole cu greutate pana in 75 kg - taxa de transport 50 lei/ prima
          bucata comandata si 20 lei / bucata suplimentara din categoria
          "Livrare cu 2 oameni"
        </p>
        <br />
        <p>
          - articole cu greutate peste 75 kg - taxa de transport 75 lei/ prima
          bucata comandata si 20 lei/ bucata suplimentara din categoria "Livrare
          cu 2 oameni"
        </p>
        <br />
        <p>
          3. Panouri Fotovoltaice - Solare, livrate pe paleti, pentru care se -
          aplica urmatoarele taxe de transport:
          <br />
          - categoria panouri fotovoltaice - taxa de transport 20 lei/ bucata
          comandata
          <br />- categoria sisteme fotovoltaice - taxa de transport 170 lei/
          palet cu greutate maxima de 500 kg
        </p>
        <br />
        <p>
          Taxa de transport va fi afisata in cosul de cumparaturi.
          <br />
          Pentru Livrarile Programate se percepe o taxa de 25 lei/ comanda.
        </p>

        <p>
          <strong>Durata de livrare</strong>
          <br />
          Termenul estimat de livrare este de 1-3 zile lucratoare de la
          confirmarea comenzii, dar nu mai mult de 15 zile de la data
          inregistrarii acesteia.
        </p>
        <br />
        <p>
          <p className="red-write">
            <strong>Procesarea comenzilor in perioada sarbatorilor</strong>
            <br />
            In perioada sarbatorilor de Paste, de iarna, a evenimentului Black
            Friday, precum si pe toata durata altor campanii ale companiei,
            procesarea unei comenzi precum si livrarea acesteia poate dura intre
            7-10 zile lucratoare, dar nu mai mult de 15 zile de la data
            inregistrarii comenzii.
          </p>
        </p>
      </ContentTransport>

      <Footer />
    </Container>
  );
}

export default Transport;

const Container = styled.div``;

const ContentTransport = styled.div`
  margin-left: 16%;
  margin-right: 16%;
  margin-bottom: 100px;

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

  p {
    margin-block-start: 1em;
    margin-block-end: 1em;
  }

  .red-write {
    color: red;

    strong{
      color: #000;
    }
  }
`;
