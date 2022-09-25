import React, { useContext } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";
import { Container } from "../../home-page/About";
import { Div } from "../fulfillment/NeedIdentificationPartFour";

export default function DesirblePartFive() {
  const [userInfo, , lang] = useContext(UpdateDataContext);

  const { desirblePartThree } = userInfo;
  const { mainGoal } = desirblePartThree || "";

  return (
    <Container style={{ marginBottom: "auto" }}>
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
      <p
        style={{
          width: "50%",
          fontWeight: "700",
          marginTop: "50px",
        }}
      >
        {data[lang].desirable_part_five_description}
      </p>
      <h2 style={{ color: "#4faddf" }}>
        {data[lang].desirable_part_five_blue_text[0]}
        <br />
        {data[lang].desirable_part_five_blue_text[1]}
      </h2>
      <ul style={{ marginTop: "-10px" }}>
        {data[lang].desirable_part_five_list.map((text, id) => (
          <Item key={id}>
            <p
              style={{
                color: "black",
                fontSize: "18px",
                marginRight: "10px",
                textAlign: "right",
              }}
            >
              {text}
            </p>
          </Item>
        ))}
      </ul>
    </Container>
  );
}

const Item = styled.li`
  color: #f08c13ff;
  font-size: 22px;
`;
