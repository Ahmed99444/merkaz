import React, { useContext } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../context/UpdateDataContext";
import data from "../../translations/trans";

import wonder from "../../assets/wonder.jfif";

export default function StivieWonder() {
  const [, , lang] = useContext(UpdateDataContext);

  return (
    <>
      <Container>
        <img src={wonder} alt="pic" style={{width: "500px", height: "250px"}} />
        <h2 style={{width: "38%"}}>{data[lang].wonder_quote}</h2>
        <p style={{ color: "#5f6062ff", fontWeight: "bold" }}>
          {data[lang].wonder_name}
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
