import React, { useContext, useState } from "react";
import styled from "styled-components";
import ReactToPdf from "react-to-pdf";

import { Container } from "../../home-page/About";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";
import MyLifeXray from "./MyLifeXray";

const ref = React.createRef();

// import Background from "../../../assets/finish.png";

const pdfOptions = {
  format: [350, 400],
};

export default function FinalPageStrngths() {
  const [rednerPDF, setRednerPDF] = useState(false);
  const [, , lang] = useContext(UpdateDataContext);

  const createPDFOnClick = () => {
    if (!rednerPDF) {
      setRednerPDF(true);
    } else {
      setRednerPDF(false);
    }
  };

  return !rednerPDF ? (
    <Container style={{ width: "100vh", marginBottom: "auto", marginTop: "0" }}>
      <GreyBackgroundDiv>
        <BlueSpan>{data[lang].final_stage_strengths[0]}</BlueSpan>
        {data[lang].final_stage_strengths[1]}
        <br />
        {data[lang].final_stage_strengths[2]}
      </GreyBackgroundDiv>
      <Button onClick={createPDFOnClick}>
        {data[lang].final_stage_strengths_button}
      </Button>
    </Container>
  ) : (
    <>
      <div ref={ref}>
        <MyLifeXray />
      </div>{" "}
      <ReactToPdf
        targetRef={ref}
        filename="code-example.pdf"
        options={pdfOptions}
      >
        {({ toPdf }) => (
          <Button
          style={{
            padding: "1.5rem",
            backgroundColor: "black",
            border: '2px solid rgb(138, 202, 40)'
          }}
          onClick={toPdf}
        >
          הורד PDF
        </Button>
        )}
      </ReactToPdf>{" "}
    </>
  );
}

const GreyBackgroundDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgb(230, 227, 227);
  background: radial-gradient(
    circle,
    rgba(230, 227, 227, 1) 0%,
    rgba(230, 227, 227, 1) 48%,
    rgba(255, 255, 255, 1) 100%
  );
  height: 400px;
  width: 1662px;
  font-size: 1.5rem;
  margin-top: -32px;
`;

const BlueSpan = styled.span`
  color: #4faddf;
  font-weight: 600;
`;

const Button = styled.button`
  background-color: #4faddf;
  color: white;
  font-weight: 600;
  padding: 1rem;
  border: 6px solid white;
  font-size: 1.2rem;
  border-radius: 30px;
  margin-top: -35px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
