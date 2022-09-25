import React, { useContext } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../context/UpdateDataContext";
import data from "../../translations/trans";

import churchill from "../../assets/curchill.jfif";

export default function Churchill() {
  const [, , lang] = useContext(UpdateDataContext);

  return (
    <>
      <Container>
        <img
          src={churchill}
          alt="pic"
          style={{ width: "700px", height: "350px" }}
        />
        <h2 style={{ width: "38%" }}>{data[lang].churchill_quote}</h2>
        <p style={{ color: "#5f6062ff", fontWeight: "bold" }}>
          {data[lang].churchill_name}
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
