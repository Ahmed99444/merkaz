import React, { useContext } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";
import { Container } from "../../home-page/About";

import aplaton from "../../../assets/aplaton.jpg";

export default function Welcome() {

  // eslint-disable-next-line no-unused-vars
  const [userInfo, setUserInfo, lang] = useContext(UpdateDataContext);

  return (
    <Container >
      <Image src={aplaton} alt="אפלטון" />
      <div>
        <h2 style={{ color: "393637ff" }}>
          {data[lang].aplaton_quote}
          <p style={{ color: "393637ff" }}>{data[lang].aplaton_name}</p>
        </h2>
      </div>
    </Container>
  );
}

const Image = styled.img`
  width: 700px;
  height: 320px;
`;
