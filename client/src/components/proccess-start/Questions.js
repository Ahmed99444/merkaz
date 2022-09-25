import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../context/UpdateDataContext";
import data from "../../translations/trans";
import { Container } from "../home-page/About";

export default function Questions() {
  const [bestTime, setBestTime] = useState("");
  const [help, setHelp] = useState("");
  const [, setUserInfo, lang] = useContext(UpdateDataContext);

  useEffect(() => {
    setUserInfo((prevState) => ({
      ...prevState,
      best_time: bestTime,
      help_question: help,
    }));
  }, [bestTime, help, setUserInfo]);

  return (
    <div style={{ marginBottom: "auto" }}>
      <Numbers>
        <Item>7</Item>
        <Item>6</Item>
        <Item>5</Item>
        <Item>4</Item>
        <Item>3</Item>
        <Item style={{ backgroundColor: "orange" }}>2</Item>
        <Item style={{ backgroundColor: "lightgrey" }}>1</Item>
      </Numbers>
      <Container>
        <label style={{ alignSelf: "flex-start", marginBottom: "5px" }}>
          {data[lang].first_questions}
        </label>
       <Input
          style={{ alignSelf: "flex-start" }}
          value={bestTime}
          onChange={(e) => setBestTime(e.target.value)}
        />
        <label style={{ alignSelf: "flex-start", marginBottom: "5px" }}>
          {data[lang].second_questions}
        </label>
        <Input
          type="text"
          style={{ alignSelf: "flex-start" }}
          value={help.childhood_memory}
          onChange={(e) => setHelp(e.target.value)}
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
  width: 500px;
  height: 50px;
  font-size: 1.3rem;
  font-weight: bold;
  text-align: start;
  overflow: auto;
  font-style: normal;
  margin-bottom: 20px;
  border-radius: 5px;
  color: "#b9babaff";
  border: 2px solid #b9babaff;
`;
