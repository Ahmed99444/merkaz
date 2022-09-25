import React, { useContext } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";

import michelangelo from "../../../assets/michelangelo.jfif";

export default function Michelangelo() {
  const [, , lang] = useContext(UpdateDataContext);

  return (
    <>
      <Container>
        <img
          src={michelangelo}
          alt="pic"
          style={{ width: "500px", height: "250px" }}
        />
        <h2 style={{ width: "38%" }}>{data[lang].michelangelo_quote}</h2>
        <p style={{ color: "#5f6062ff", fontWeight: "bold" }}>
          {data[lang].michelangelo_name}
        </p>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: rgb(95, 96, 98);
  margin-bottom: 10%;
`;
