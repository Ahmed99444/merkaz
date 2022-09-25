import React, { useContext } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../context/UpdateDataContext";
import data from "../../translations/trans";
import { Image } from "../home-page/LetsStart";

import needs from "../../assets/needs.jpg";

export default function NeedsAndValues() {

  // eslint-disable-next-line no-unused-vars
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
          {data[lang].needs_and_values_title}
        </h2>
        <p>
          {data[lang].needs_and_values_paragraph[0]}
          <span style={{ color: "#f08c13", fontWeight: "bold" }}>
            {data[lang].needs_and_values_paragraph[1]}{" "}
          </span>
          {data[lang].needs_and_values_paragraph[2]} <br />
          {data[lang].needs_and_values_paragraph[3]}
          <span style={{ color: "#4faddf", fontWeight: "bold" }}>
            {data[lang].needs_and_values_paragraph[4]} {" "}
          </span>
          {data[lang].needs_and_values_paragraph[5]}.
        </p>
        <p>
          {" "}
          {data[lang].needs_and_values_paragraph_two[0]}
          {" "}
          <span style={{ color: "#4faddf", fontWeight: "bold" }}>
            {data[lang].needs_and_values_paragraph_two[1]}
          </span>.
        </p>
        <p>{data[lang].needs_and_values_paragraph_three}</p>
        <p>
          {data[lang].needs_and_values_paragraph_four[0]}{" "}
          <span style={{ color: "#4faddf", fontWeight: "bold" }}>
            {data[lang].needs_and_values_paragraph_four[1]}
          </span>
          <br />

          {data[lang].needs_and_values_paragraph_four[2]}
        </p>
      </Container>
      <Image
        src={needs}
        alt="needs"
        style={{ width: "50%", height: "500px" }}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;