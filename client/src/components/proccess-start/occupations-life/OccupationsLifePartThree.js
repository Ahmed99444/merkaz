import React, { useContext } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";
import rightLogo from "../../../assets/LOGO TRANS.png";

export default function OccupationsLifePartThree(props) {
  // eslint-disable-next-line no-unused-vars
  const [userInfo, setUserInfo, lang] = useContext(UpdateDataContext);

  return (
    <>
      <Container>
        <img src={rightLogo} alt="logo" />
        <h2 style={{ width: "38%" }}>
          {data[lang].occupationsLifePartThree_quote}
        </h2>
        <p style={{ color: "#5f6062ff", fontWeight: "bold" }}>
          מרכז הגשמה מבית{" "}
          <span style={{ color: "#8aca28ff", fontWeight: "bold" }}>H</span>
          <span style={{ color: "#4faddfff", fontWeight: "bold" }}>R</span>
          <span style={{ color: "#f08c13ff", fontWeight: "bold" }}>C</span>{" "}
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
