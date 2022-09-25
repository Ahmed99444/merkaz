import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";

export default function XrayPartOne() {
  const [text, setText] = useState("");
  const [userInfo, setUserInfo, lang] = useContext(UpdateDataContext);

  useEffect(() => {
    setUserInfo((prevState) => ({
      ...prevState,
      xrayPartOne: {
        text
      },
    }));
  }, [text, setUserInfo]);

  return (
    <Container>
      <p style={{ textAlign: "right" }}>
        {data[lang].xray_part_one_description[0]}
      </p>
      <TextArea
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      <GridContainer>
      <span style={{ fontSize: "8rem" }}>!</span>

        <p style={{marginTop: "80px"}}>
          {data[lang].xray_part_one_description[1]}{" "}
          <br />
          {data[lang].xray_part_one_description[2]}
        </p>
      </GridContainer>
    </Container>
  );
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 1fr;
`;

const Container = styled.div`
  margin-top: 20px;
  margin-bottom: auto;
  text-align: right;
`;

const TextArea = styled.input`
  width: 700px;
  height: 150px;
  color: "#b9babaff";
  border: 1px solid #b9babaff;
  font-size: 1rem;
`;
