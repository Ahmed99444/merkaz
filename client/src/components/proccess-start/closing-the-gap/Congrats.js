import React, { useContext } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";

import elonMuskSecondPic from "../../../assets/elonMuskSecondPic.jpg";

export default function Congrats() {
  const [, , lang] = useContext(UpdateDataContext);

  return (
    <>
      <Container style={{ fontSize: "1.4rem" }}>
        <img
          src={elonMuskSecondPic}
          alt="pic"
          style={{ width: "920px", height: "500px" }}
        />
        <h2 style={{ width: "38%", fontWeight: "bold", color: "#4faddf" }}>
          {data[lang].congrats_green_text}
        </h2>
        <p>
          {data[lang].congrats_description[0]}{" "}
          <p style={{ color: "#5f6062ff", fontWeight: "bold", marginTop: "-5px" }}>
            {data[lang].congrats_description[1]}
          </p>
        </p>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  color: rgb(95, 96, 98);
`;
