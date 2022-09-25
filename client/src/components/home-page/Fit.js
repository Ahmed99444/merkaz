import React, { useContext } from "react";
import { Container } from "./About";
import styled from "styled-components";

import { UpdateDataContext } from "../../context/UpdateDataContext";
import data from "../../translations/trans";

export default function Fit() {
  const [, , lang] = useContext(UpdateDataContext);

  return (
    <Container style={{ marginTop: "15px" }}>
      <h2>{data[lang].fit_title}</h2>
      <ul style={{ marginTop: "-10px" }}>
        <Item>
          <p
            style={{
              color: "black",
              fontSize: "18px",
              marginRight: "10px",
              textAlign: "right",
            }}
          >
            {data[lang].fit_description[0]}
          </p>
        </Item>
        <Item>
          <p
            style={{
              color: "black",
              fontSize: "18px",
              marginRight: "10px",
              textAlign: "right",
            }}
          >
            {data[lang].fit_description[1]}
          </p>
        </Item>
        <Item>
          <p
            style={{
              color: "black",
              fontSize: "18px",
              marginRight: "10px",
              textAlign: "right",
            }}
          >
            {data[lang].fit_description[2]}
          </p>
        </Item>
        <Item>
          <p
            style={{
              color: "black",
              fontSize: "18px",
              marginRight: "10px",
              textAlign: "right",
            }}
          >
            {data[lang].fit_description[3]}
          </p>
        </Item>
        <Item>
          <p
            style={{
              color: "black",
              fontSize: "18px",
              marginRight: "10px",
              textAlign: "right",
            }}
          >
            {data[lang].fit_description[4]}
          </p>
        </Item>
      </ul>
    </Container>
  );
}

const Item = styled.li`
  color: #f08c13ff;
  font-size: 22px;
`;
