import React, { useContext } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";
import { Image } from "../../home-page/LetsStart";

import thinking from "../../../assets/thinking.jpg";

export default function StrengthsWelcomePage() {
  const [userInfo, setUserInfo, lang] = useContext(UpdateDataContext);

  return (
    <Container>
      <Container
        style={{
          flexDirection: "column",
          width: "50%",
          margin: "0 auto",
          marginLeft: "80px",
        }}
      >
        <h2 style={{ color: "rgb(95, 96, 98)" }}>
          {data[lang].strenghts_welcome_page_title[0]}
          <br />
          {data[lang].strenghts_welcome_page_title[1]}
        </h2>
        <p style={{color: "#4faddf", fontWeight: "bold", fontSize: "1.7rem"}}>{data[lang].strenghts_welcome_page_description[0]}</p>
        <p>{data[lang].strenghts_welcome_page_description[1]}</p>
        <p>{data[lang].strenghts_welcome_page_description[2]}</p>
        <p style={{color: "#8aca28", fontWeight: "bold"}}>{data[lang].strenghts_welcome_page_description[3]}</p>
      </Container>
      <Image
        src={thinking}
        alt="thinking"
        style={{ width: "50%", height: "600px", border: "1rem solid white" }}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
