import React from "react";
import styled from "styled-components";
import Footer from "../Footer";

function Return() {
  return (
    <Container>
      <ContentReturn>
        <div className="acasa">
          <a href="/">
            <p>
              <small>Acasa</small> / Procedura retur produse
            </p>
          </a>
        </div>
        <p>
          Renuntarea la cumparare
          <br />
          <strong>Regulament privind serviciul de retur gratuit</strong>
          <br />
          <strong>Renuntarea la cumparare</strong>reprezinta un serviciu gratuit
          oferit clientilor ALTEX ROMANIA S.R.L., societate comerciala cu
          raspundere limitata, organizata potrivit legii romane, cu sediul in
          Orasul Voluntari, judetul Ilfov, Soseaua Bucuresti-Nord nr.10, Global
          City Business Park, cladirea O 1.1., etajele 9 si 10, inregistrata la
          Registrul Comertului cu nr. J23/2611/2016, numar de inregistrare
          fiscala RO 2864518. <br />
          Prin acest serviciu, clientii ALTEX pot returna gratuit in termen de
          14 zile calendaristice produsele cumparate din magazinele din reteaua
          nationala ALTEX si de pe www.altex.ro , conform Termenilor si
          Conditiilor de retur prevazute in prezentul Regulament. <br />
          Acest serviciu nu afecteaza dreptul de retragere prevazut de O.U.G.
          34/2014 privind drepturile consumatorilor in cadrul contractelor
          incheiate cu profesionistii, pentru contractele incheiate la distanta
          sau contractele incheiate in afara spatiilor comerciale ALTEX.
          Clientii care renunta la cumparare, solicitand returul unui produs, se
          vor supune regulilor prezentului Regulament, acceptandu-l in
          integralitate. <br />
          Clientii ALTEX ROMANIA S.R.L. sunt beneficiarii directi ai acestui
          serviciu gratuit. <br />
          Acestia pot fi persoane fizice sau persoane juridice care au
          achizitionat produse din reteaua de magazine ALTEX sau de pe
          www.altex.ro, fiind titularii facturii sau ai bonului fiscal (persoane
          fizice) sau reprezentantii persoanei juridice titulare a facturii
          fiscale ALTEX. <br />
          In cazul contractelor de prestari servicii incheiate in magazinele
          ALTEX, odata ce serviciul comandat/achizitionat a fost integral
          prestat (de exemplu, produsul a fost instalat, dezinstalat, curatat
          etc), contractul de prestari servicii se considera complet executat,
          iar consumatorul nu mai poate solicita restituirea platii efectuate.
          Orice alt seriviciu solicitat separat / suplimentar (de exemplu,
          dezinstalare, instalarea unui nou produs etc) reprezinta un serviciu
          separat si va fi efectuat la solicitarea expresa a clientului,
          contra-cost. In situatia in care serviciul a fost achizitionat de pe
          www.altex.ro, consumatorul isi pierde dreptul de retragere prevazut de
          legislatia in vigoare odata ce serviciul comandat a fost prestat.{" "}
          <br />
          <strong>
            Cum puteti returna produsele achizitionate de la ALTEX?
          </strong>{" "}
          <br />
          Produsele cumparate din magazinele din reteaua ALTEX sau de pe
          www.altex.ro pot fi returnate in termen de 14 zile calendaristice.{" "}
          <br />
          <strong>Conditiile referitoare la produsul returnat</strong> <br />
          Se recomanda ca produsul returnat sa fie in aceeasi stare in care a
          fost cumparat sau livrat.
          <br />
          <strong>Produse care nu sunt acceptate la retur</strong>
          <br />
          Produse sigilate care nu pot fi returnate din motive de protectie a
          sanatatii sau din motive de igiena si care au fost desigilate de
          consumator, indiferent daca acestea au fost sau nu utilizate dupa
          desigilare (ex.: rezerve de periute dinti, casti in ear);
          <br />
          <strong>
            Costuri si taxe speciale pentru renuntarea la cumparare:
          </strong>{" "}
          toate costurile sunt suportate de catre Altex. <br />
          ALTEX poate refuza colaborarea cu consumatorii care au abuzat de
          dreptul de a renunta la cumparare. Notificarea acestora se va face
          anterior impunerii restrictiilor privind vanzarea de produse sau
          servicii.
        </p>
      </ContentReturn>
      <Footer/>
    </Container>
  );
}

export default Return;

const Container = styled.div``;

const ContentReturn = styled.div`
  margin-left: 16%;
  margin-right: 16%;
  margin-bottom: 100px;
  line-height: 1.5;  

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
