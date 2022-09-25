import React, {useContext } from "react";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";
import { Container } from "../../home-page/About";
import { Div } from "../fulfillment/NeedIdentificationPartFour";
import bottle from "../../../assets/bottle.png";

export default function DesirblePartFour() {
  const [userInfo, , lang] = useContext(UpdateDataContext);

  const { desirblePartThree } = userInfo;
  const { mainGoal } = desirblePartThree || "";
  console.log("mainGoal: ", mainGoal)
  return (
    <Container style={{ marginBottom: "0" }}>
      <Container style={{ flexDirection: "row", marginTop: "80px" }}>
        <Div style={{ backgroundColor: "black", width: "150px" }}>
          {data[lang].desirable_part_four_list_title}
        </Div>
        <Div
          style={{
            marginRight: "10px",
            width: "300px",
            justifyContent: "normal",
          }}
        >
          <div style={{ marginRight: "30px" }}>{mainGoal}</div>
        </Div>
      </Container>
      <p>
        <span style={{ fontWeight: "700", color: "#f08c13" }}>
          {data[lang].desirable_part_four_description[0]}
        </span>
        {data[lang].desirable_part_four_description[1]}
      </p>
      <div style={{ marginTop: "100px" }}>
        <img src={bottle} alt="bottle" width="170px" height="300px" />
      </div>
      <div
        style={{
          color: "#4faddf",
          fontWeight: "700",
          fontSize: "1.1rem",
          padding: "1rem",
          margin: "0",
          position: "relative",
          top: "36.5px",
        }}
      >
        "{data[lang].desirable_part_four_quote}"
      </div>
    </Container>
  );
}
