import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";
import { Container, Grid } from "../../home-page/About";
import { Div } from "../actions-to-success/ActionToSuccessPartThree";

export default function XrayPartThree() {
  const [isDragged, setIsDragged] = useState(false);
  const [userInfo, setUserInfo, lang] = useContext(UpdateDataContext);

  return (
    <Container
      style={{
        marginBottom: "auto",
        marginLeft: "80px",
      }}
    >
      <Container
        style={{
          flexDirection: "row",
          marginBottom: "auto",
        }}
      >
        <div>
          {data[lang].xray_part_three_successful.map((successHabit, id) => (
            <Div
              key={id}
              style={{
                width: "300px",
                backgroundColor: "#8aca28",
                color: "white",
              }}
            >
              {successHabit}
            </Div>
          ))}
        </div>
        <div>
          {data[lang].xray_part_three_unsuccessful.map((unsuccessHabit, id) => (
            <Div
              key={id}
              style={{
                width: "300px",
                backgroundColor: "#e9e9e9",
                color: "rgb(95, 96, 98)",
              }}
            >
              {unsuccessHabit}
            </Div>
          ))}
        </div>
        <br />
      </Container>
      <p style={{ color: "#4faddf", fontSize: "1.5rem" }}>
        {data[lang].xray_part_three_successful_text}
      </p>
    </Container>
  );
}
