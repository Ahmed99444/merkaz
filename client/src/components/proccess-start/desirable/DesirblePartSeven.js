import React, { useContext } from "react";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";
import { Container } from "../../home-page/About";
import { Div } from "../fulfillment/NeedIdentificationPartFour";

export default function DesirblePartSeven() {
  const [userInfo, , lang] = useContext(UpdateDataContext);

  const { desirblePartThree } = userInfo;
  const { mainGoal } = desirblePartThree || "";

  return (
    <Container style={{ marginBottom: "10%" }}>
      <Div style={{ padding: "1.5rem", width: "500px", borderRadius: "40px", fontSize: "2rem" }}>
        {mainGoal}
      </Div>
      <p>{data[lang].desirable_part_seven_description}</p>

      <p>
        <span style={{ fontWeight: "bold", color: "#4faddf" }}>
          {data[lang].desirable_part_seven_next_step[0]}
        </span>{" "}
        {data[lang].desirable_part_seven_next_step[1]}
      </p>

      <p style={{ fontWeight: "bold" }}>
        {" "}
        {data[lang].desirable_part_seven_bold_text}
      </p>
    </Container>
  );
}
