import React from "react";
import styled from "styled-components";
import { useState } from "react";

function ExpandTXT() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const data = [
    {
      question: "Retur produse",
      questions: "Nu sunt multumit de produsul primit. Cum il pot returna?",
      answer:
        "Renuntarea la o achizitie reprezinta un serviciu gratuit oferit clientilor ALTEX ROMANIA S.R.L. Acestia pot fi persoane fizice  sau persoane juridice care au achizitionat produse din reteaua de magazine ALTEX  sau de pe www.altex.ro, fiind titularii facturii sau ai bonului fiscal (persoane fizice) sau reprezentantii persoanei juridice titulare a facturii fiscale ALTEX. Pentru produsele achizitionate online tot ce trebuie sa faci este sa inregistrezi cererea de retur din sectiunea “Retur produse” a contului tau de pe site sau din aplicatia mobila ALTEX. Termenul de retur pentru comenzile online este de 14 zile calendaristice din momentul intrarii in posesie a produsului. Produsul trebuie sa fie returnat cu ambalajul original si toate accesoriile primite. Produsul cumparat poate fi returnat in orice magazin ALTEX din tara, cumparatorul predand personal produsul unui reprezentant ALTEX.",
      result: "produs",
      result1: "garantie",
      result2: "x2 diferenta",
      result3: "pret",
      help: "Ti-a fost de ajutor acest raspuns?",
      yes: "Da",
      no: "Nu",
    },
    {
      question: "Retur produse",
      questions:
        "Exista produse pe care nu le pot returna daca au fost desigilate?",
      answer:
        "Da, unele produse nu se pot returna daca au fost desigilate. Cateva exemple sunt: licentele software, jocurile, produsele de ingrijire si igiena personala, consumabilele, accesoriile medicale precum termometrele etc. Consulta regulamentul complet pentru renuntarea la cumparare.",
      result: "produs",
      result1: "garantie",
      result2: "x2 diferenta",
      result3: "pret",
      help: "Ti-a fost de ajutor acest raspuns?",
      yes: "Da",
      no: "Nu",
    },
    {
      question: "Garantia produselor",
      questions:
        "Care este termenul de reparatie a produsului in perioada de garantie?",
      answer:
        "Termenul de aducere la conformitate a produsului aflat in perioada de garantie este de maxim 15 zile calendaristice din momentul in care se preda sau se trimite produsul catre unitatea vanzatoare sau service-ul autorizat. In unele situatii, defectele minore, se pot identifica si repara pe loc, iar pentru toate celelalte situatii produsul se trimite catre specialistii din service-ul autorizat. Termenul de 15 zile calendaristice este maximal si include urmatoarele etape: trimiterea produsului in service-ul autorizat, diagnosticarea defectului de catre inginerii service-ului, comandarea piselor necesare reparatiei, raparatia produsului si trimiterea lui catre client sau unitatea vanzatoare In cazul in care produsul se afla inca in garantie si nu se mai poate repara, se ofera fisa de negatie prin care fie se poate inlocui produsul, daca este in stoc, fie se restituie banii platiti la momentul achizitiei. Pentru defectele neacoperite de garantie sau iesite din garantie, reparatia se face doar contra cost si se ofera garantie pentru manopera si piesa/piesele schimbate. ",
      result: "produs",
      result1: "garantie",
      result2: "x2 diferenta",
      result3: "pret",
      help: "Ti-a fost de ajutor acest raspuns?",
      yes: "Da",
      no: "Nu",
    },
    {
      question: "Retur produse",
      questions: "Care este termenul de solutionare a unei cereri de retur?",
      answer:
        "Termenul maxim de solutionare este de 14 zile calendaristice de la inregistrarea cererii de retur. Te tinem la curent privind evolutia solicitarii tale.",
      result: "produs",
      result1: "garantie",
      result2: "x2 diferenta",
      result3: "pret",
      help: "Ti-a fost de ajutor acest raspuns?",
      yes: "Da",
      no: "Nu",
    },
    {
      question: "Livrare",
      questions: "Cum pot afla unde este coletul meu?",
      answer:
        "Poti folosi AWB-ul primit in e-mail-ul de confirmare al comenzii tale online pentru a verifica statusul livrarii direct pe site-ul partenerului de curierat.",
      result: "produs",
      result1: "garantie",
      result2: "x2 diferenta",
      result3: "pret",
      help: "Ti-a fost de ajutor acest raspuns?",
      yes: "Da",
      no: "Nu",
    },
  ];

  return (
    <Container>
      <div className="wrapper">
        <div className="accordion">
          {data.map((item, i) => (
            <div className="item">
              <div className="title" onClick={() => toggle(i)}>
                <span>
                  <p>{item.question}</p>
                  <p className="strong">{item.questions}</p>
                </span>
                <span>{selected === i ? "-" : "+"}</span>
              </div>
              <div className={selected === i ? "content show" : "content"}>
                {item.answer}
                <div className="result">
                  <div className="results">
                    <p>{item.result}</p>
                    <p>{item.result1}</p>
                    <p>{item.result2}</p>
                    <p>{item.result3}</p>
                  </div>
                </div>
              </div>
              <div className={selected === i ? "content show-next" : "content"}>
                <div className="help">
                  <div className="text">{item.help}</div>
                  <div className="choose">
                    <a href="/">
                      <p className="border-1">{item.yes}</p>
                    </a>
                    <a href="/">
                      <p className="border-2">{item.no}</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default ExpandTXT;

const Container = styled.div`
margin-top: 10px;

  .wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }

  .accordion {
    width: 600px;
    height: auto;
  }

  .item {
    border: 1px solid lightgray;
    border-top-right-radius: 12px;
    border-bottom-left-radius: 12px;
    margin-bottom: 5px;
  }

  .title {
    color: #8b8b8b;
    font-size: 14px;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    display: flex;
    padding: 10px 20px;

    p {
      margin: 0 0 6px;
    }

    .strong {
      color: #000;
      font-size: 16px;
    }
  }

  .content {
    font-size: 14px;
    color: #8b7f75;
    max-height: 0;
    overflow: hidden;
  }

  .content.show {
    padding: 10px 40px;
    border-top: 1px solid lightgray;
    height: auto;
    max-height: 9999px;
    color: #000;

    .results {
      display: flex;
    }

    .result {
      display: flex;
      padding: 16px 0 0 0;

      p {
        margin: 0 0 8px 8px;
        padding: 4px 8px;
        font-size: 13px;
        color: #000;
        border-top-right-radius: 12px;
        border-bottom-left-radius: 12px;
        border: 1px solid #fdeac0;
        background-color: #fdeac0;
      }
    }
  }

  .content.show-next {
    height: auto;
    max-height: 9999px;
    padding: 12px 16px;
    color: #000;
    background-color: #f6f9ff;
    border: 1px solid #f6f9ff;
    border-top: 1px solid lightgray;
    border-bottom: none;
    border-right: none;
    border-bottom-left-radius: 12px;

    .help {
      display: flex;
      align-items: center;
      justify-content: start;
      padding: 4px 8px;
    }

    .choose {
      display: flex;
      margin: 0px 10px;

      .border-1 {
        padding: 6px 8px;
        margin: 0px 5px;

        border-radius: 6px;
        font-size: 14px;
        background-color: #51c1ed;
        color: #fff;
      }

      .border-2 {
        padding: 6px 8px;
        margin: 0px 5px;
        border-radius: 6px;
        font-size: 14px;
        background-color: #51c1ed;
        color: #fff;
      }
    }
  }
`;
