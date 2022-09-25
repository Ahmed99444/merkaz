import React, { useContext } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../context/UpdateDataContext";
import data from "../../translations/trans";

import peres from "../../assets/peres.jfif";

export default function Peres(props) {
  // eslint-disable-next-line no-unused-vars
  const [userInfo, setUserInfo, lang] = useContext(UpdateDataContext);

  return (
    <>
      <Container>
        <img
          src={peres}
          alt="pic"
          style={{ width: "700px", height: "350px" }}
        />
        <h2 style={{ width: "38%" }}>{data[lang].peres_quote}</h2>
        <p style={{ color: "#5f6062ff", fontWeight: "bold" }}>
          {data[lang].peres_name}
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
