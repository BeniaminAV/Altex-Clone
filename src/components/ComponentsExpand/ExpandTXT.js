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
      question: "Documente achizitie",
      questions:
        "Nu gasesc certificatul de garantie al produsului, ce pot face?",
      answer:
        "Produsele vin insotite de certificate de garantie oferite de producator. In situatia in care nu il gasiti sau l-ati pierdut, il puteti solicita in orice magazin fizic Altex/ Media Galaxy sau ne puteti apela la numarul de contact de pe site si vi-l trimitem pe e-mail.",
      result: "produs",
      result1: "garantie",
      result2: "x2 diferenta",
      result3: "pret",
      help: "Ti-a fost de ajutor acest raspuns?",
      yes: "Da",
      no: "Nu",
    },
    {
      question: "Metode de plata",
      questions:
        "Am selectat metoda de plata “Numerar la livrare”, insa pot plati cu cardul la curier?",
      answer: "Da, se poate efectua plata utilizand cardul la livrare.",
      result: "produs",
      result1: "garantie",
      result2: "x2 diferenta",
      result3: "pret",
      help: "Ti-a fost de ajutor acest raspuns?",
      yes: "Da",
      no: "Nu",
    },
    {
      question: "2X Diferenta",
      questions:
        "In cat timp primesc un raspuns pentru solicitarea inregistrata 2x Diferenta?",
      answer:
        "Termenul maxim pentru a primi rezultatul verificarii este de 5 zile lucratoare. Imediat ce ai intregistrat cererea o sa primesti un e-mail de confirmare din partea noastra.",
      result: "produs",
      result1: "garantie",
      result2: "x2 diferenta",
      result3: "pret",
      help: "Ti-a fost de ajutor acest raspuns?",
      yes: "Da",
      no: "Nu",
    },
    {
      question: "2X Diferenta",
      questions:
        "Care este termenul in care pot aplica pentru serviciul 2x Diferenta?",
      answer:
        "Inregistrarea solicitarii poate fi efectuata din contul tau de client direct din site sau aplicatia mobila ALTEX, in termen de 7 zile calendaristice de la data plasarii comenzii.",
      result: "produs",
      result1: "garantie",
      result2: "x2 diferenta",
      result3: "pret",
      help: "Ti-a fost de ajutor acest raspuns?",
      yes: "Da",
      no: "Nu",
    },
    {
      question: "Documente achizitie",
      questions: "Nu am primit factura in colet, de unde o pot obtine?",
      answer:
        "Poti intra in posesia facturii din contul tau de client accesand sectiunea Comenzi atat din aplicatia mobila Altex, cat si din site. Tot ce trebuie sa faci este sa selectezi comanda, sa generezi factura si ulterior sa o descarci. Poti obtine factura si in magazinele fizice Altex/ Media Galaxy.",
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
