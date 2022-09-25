import React, { useContext } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";
import { Container } from "../../home-page/About";

import marden from "../../../assets/marden.jpg";

export default function Marden() {
  // eslint-disable-next-line no-unused-vars
  const [userInfo, setUserInfo, lang] = useContext(UpdateDataContext);

  return (
    <Container style={{ color: "#5f6062ff" }}>
      <Image src={marden} alt="מרדן" />
      <Container>
        <h3 style={{ color: "393637ff", width: "60%" }}>
          {data[lang].marden_quote}
          <p style={{ color: "393637ff", fontSize: "16px" }}>{data[lang].marden_name}</p>
        </h3>
      </Container>
    </Container>
  );
}

const Image = styled.img`
  width: 600px;
  height: 320px;
`;
