import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../context/UpdateDataContext";
import data from "../../translations/trans";
import { Container } from "../home-page/About";

export default function Decision() {
  const [userDecision, setUserDecision] = useState("");
  const [circumstances, setCircumstances] = useState("");
  const [profit, setProfit] = useState("");
  const [characterizes, setCharacterizes] = useState("");
  const [unsuccessfulDecision, setUnsuccessfulDecision] = useState("");

  const [, setUserInfo, lang] = useContext(UpdateDataContext);

  useEffect(() => {
    setUserInfo((prevState) => ({
      ...prevState,
      decision: {
        userDecision,
        circumstances,
        profit,
        characterizes,
        unsuccessfulDecision,
      },
    }));
  }, [
    userDecision,
    circumstances,
    setUserInfo,
    profit,
    characterizes,
    unsuccessfulDecision,
  ]);

  return (
    <div style={{ marginBottom: "auto" }}>
      <Numbers>
        <Item>7</Item>
        <Item style={{ backgroundColor: "orange" }}>6</Item>
        <Item style={{ backgroundColor: "lightgrey" }}>5</Item>
        <Item style={{ backgroundColor: "lightgrey" }}>4</Item>
        <Item style={{ backgroundColor: "lightgrey" }}>3</Item>
        <Item style={{ backgroundColor: "lightgrey" }}>2</Item>
        <Item style={{ backgroundColor: "lightgrey" }}>1</Item>
      </Numbers>
      <Container>
        <label
          style={{
            alignSelf: "flex-start",
            marginBottom: "5px",
          }}
        >
          {data[lang].decision_first_label}
        </label>
        <Input
          type="text"
          style={{ alignSelf: "flex-start" }}
          value={userDecision}
          onChange={(e) => setUserDecision(e.target.value)}
        />
        <label
          style={{
            alignSelf: "flex-start",
            marginBottom: "5px",
          }}
        >
          {data[lang].decision_second_label}
        </label>
        <Input
          type="text"
          style={{ alignSelf: "flex-start" }}
          value={circumstances}
          onChange={(e) => setCircumstances(e.target.value)}
        />
        <label
          style={{
            alignSelf: "flex-start",
            marginBottom: "5px",
          }}
        >
          {data[lang].decision_third_label}
        </label>
        <Input
          type="text"
          style={{ alignSelf: "flex-start" }}
          value={profit}
          onChange={(e) => setProfit(e.target.value)}
        />
        <label
          style={{
            alignSelf: "flex-start",
            marginBottom: "5px",
          }}
        >
          {data[lang].decision_forth_label}
        </label>
        <Input
          type="text"
          style={{ alignSelf: "flex-start" }}
          value={characterizes}
          onChange={(e) => setCharacterizes(e.target.value)}
        />
        <label
          style={{
            alignSelf: "flex-start",
            marginBottom: "5px",
          }}
        >
          {data[lang].decision_fifth_label}
        </label>
        <Input
          type="text"
          style={{ alignSelf: "flex-start" }}
          value={unsuccessfulDecision}
          onChange={(e) => setUnsuccessfulDecision(e.target.value)}
        />
      </Container>
    </div>
  );
}

const Numbers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-bottom: 130px;
  font-weight: bold;

`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  border: 1px grey solid;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: white;
  margin: 15px;
  font-size: 25px;
`;

const Input = styled.input`
  width: 800px;
  height: 45px;
  text-align: start;
  font-size: 18px;
  overflow: auto;
  font-style: normal;
  margin-bottom: 20px;
  border-radius: 5px;
  color: "#b9babaff";
  border: 2px solid #b9babaff;
`;
