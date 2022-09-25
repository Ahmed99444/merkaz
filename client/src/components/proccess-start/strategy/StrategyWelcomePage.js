import React, { useContext } from "react";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";
import { Container } from "../../home-page/About";
import friendship from "../../../assets/friendship.jfif"
import { Image } from "../../home-page/LetsStart";
export default function StrategyWelcomePage() {
  const [userInfo, setUserInfo, lang] = useContext(UpdateDataContext);

  return (
    <Container style={{ marginBottom: "auto" }}>
      <p
        style={{
          fontSize: "1.5rem",
          fontWeight: "700",
          width: "70%",
          color: "rgb(95, 96, 98)",
        }}
      >
        <span style={{ color: "#4595d5ff" }}>
          {data[lang].strategy_definition[0]}
        </span>
        {data[lang].strategy_definition[1]}
      </p>
      <p
        style={{
          fontSize: "1.5rem",
          fontWeight: "700",
          width: "70%",
          color: "rgb(95, 96, 98)",
        }}
      >
        <span style={{ color: "#4595d5ff" }}>
          {data[lang].strategy_definition[2]}
        </span>
        {data[lang].strategy_definition[3]}
      </p>
      <Image style={{width: "700px", height: "350px"}} src={friendship} alt="friendship"/>
    </Container>
  );
}
