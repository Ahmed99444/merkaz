import React, { useContext } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../context/UpdateDataContext";
import data from "../../translations/trans";

import maslo from "../../assets/maslo.jfif"

export default function Maslo() {
  const [, , lang] = useContext(UpdateDataContext);

  return (
    <>
      <Container>
        <img src={maslo} alt="pic" style={{width: "500px", height: "250px"}} />
        <h2 style={{width: "38%"}}>{data[lang].maslo_quote}</h2>
        <p style={{ color: "#5f6062ff", fontWeight: "bold" }}>
          {data[lang].maslo_name}
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
