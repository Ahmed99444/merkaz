import React, { useContext } from "react";
import styled from "styled-components";
import { LeftOutlined } from "@ant-design/icons";

import { UpdateDataContext } from "../../context/UpdateDataContext";
import data from "../../translations/trans";
import { GreenCircle, BlueCircle, OrangeCircle } from "./Goals";
import { Grid } from "./About";

export default function TheSystem() {
  const [, , lang] = useContext(UpdateDataContext);

  return (
    <Conatainer>
      <h1 style={{ color: "#111111" }}>{data[lang].the_system_titles[0]}</h1>
      <p
        style={{
          width: "40%",
          marginBottom: "50px",
          marginTop: "-20px",
          color: "#111111",
        }}
      >
        {data[lang].the_system_text}
      </p>
      <Grid style={{ gridTemplateColumns: "repeat(5, 0.6fr)" }}>
        <OrangeCircle style={{ width: "100px", height: "100px" }}>
          <h5 style={{ color: "#111111" }}>
            {data[lang].the_system_titles[1]}
          </h5>
          <h5 style={{ color: "white" }}>{data[lang].the_system_titles[2]}</h5>
        </OrangeCircle>
        <LeftOutlined style={{ fontSize: "2.5rem", margin: "auto" }} />
        <BlueCircle style={{ width: "100px", height: "100px" }}>
          {" "}
          <h5 style={{ color: "#111111" }}>
            {data[lang].the_system_titles[3]}
          </h5>
          <h5 style={{ color: "white" }}>{data[lang].the_system_titles[4]}</h5>
        </BlueCircle>
        <LeftOutlined style={{ fontSize: "2.5rem", margin: "auto" }} />
        <GreenCircle style={{ width: "100px", height: "100px" }}>
          {" "}
          <h5 style={{ color: "#111111" }}>
            {data[lang].the_system_titles[5]}
          </h5>
          <h5 style={{ color: "white" }}>{data[lang].the_system_titles[6]}</h5>
        </GreenCircle>
      </Grid>
    </Conatainer>
  );
}

export const Conatainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f5f4f5ff;
  margin-top: 80px;
`;
