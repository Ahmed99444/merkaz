import React, { useContext } from "react";

import { UpdateDataContext } from "../../context/UpdateDataContext";
import data from "../../translations/trans";
import { Container } from "../home-page/About";

import rightLogo from "../../assets/LOGO TRANS.png";

export default function Decision() {
  
  // eslint-disable-next-line no-unused-vars
  const [userInfo, setUserInfo, lang] = useContext(UpdateDataContext);

  return (
    <Container>
      <img src={rightLogo} alt="logo" />
      <h2>{data[lang].logo_second_title}</h2>
      <p style={{ color: "#5f6062ff", fontWeight: "bold" }}>
      {data[lang].logo_text} - {" "}
        <span style={{ color: "#8aca28ff", fontWeight: "bold" }}>H</span>
        <span style={{ color: "#4faddfff", fontWeight: "bold" }}>R</span>
        <span style={{ color: "#f08c13ff", fontWeight: "bold" }}>C</span>{" "}
      </p>
    </Container>
  );
}
