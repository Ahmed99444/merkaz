import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";
import { Container } from "../../home-page/About";

export default function DesirablePartOne() {
  const [memory, setMemory] = useState("");
  const [why, setWhy] = useState("");
  const [value, setValue] = useState("");
  const [future, setFuture] = useState("");
  const [howTo, setHowTo] = useState("");

  const [, setUserInfo, lang] = useContext(UpdateDataContext);

  useEffect(() => {
    setUserInfo((prevState) => ({
      ...prevState,
      desirablePartOne: {
        memory,
        why,
        value,
        future,
        howTo,
      },
    }));
  }, [memory, why, setUserInfo, value, future, howTo]);

  return (
    <Container style={{ marginBottom: "auto" }}>
      <h1 style={{ color: "#4faddf" }}>
        {data[lang].desirable_welcome_part_one_description}
      </h1>
      <label
        style={{
          alignSelf: "flex-start",
          marginBottom: "5px",
  
        }}
      >
        {data[lang].desirable_welcome_part_one_labels[0]}
      </label>{" "}
      <Input
        type="text"
        // style={{ alignSelf: "flex-start" }}
        value={memory}
        onChange={(e) => setMemory(e.target.value)}
      />
      <label
        style={{
          alignSelf: "flex-start",
          marginBottom: "5px",
  
        }}
      >
        {data[lang].desirable_welcome_part_one_labels[1]}
      </label>{" "}
      <Input
        type="text"
        // style={{ alignSelf: "flex-start" }}
        value={why}
        onChange={(e) => setWhy(e.target.value)}
      />
      <label
        style={{
          alignSelf: "flex-start",
          marginBottom: "5px",
  
        }}
      >
        {data[lang].desirable_welcome_part_one_labels[2]}
      </label>{" "}
      <Input
        type="text"
        // style={{ alignSelf: "flex-start" }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <label
        style={{
          alignSelf: "flex-start",
          marginBottom: "5px",
  
        }}
      >
        {data[lang].desirable_welcome_part_one_labels[3]}
      </label>{" "}
      <Input
        type="text"
        // style={{ alignSelf: "flex-start" }}
        value={future}
        onChange={(e) => setFuture(e.target.value)}
      />
      <label
        style={{
          alignSelf: "flex-start",
          marginBottom: "5px",
  
        }}
      >
        {data[lang].desirable_welcome_part_one_labels[4]}
      </label>{" "}
      <Input
        type="text"
        // style={{ alignSelf: "flex-start" }}
        value={howTo}
        onChange={(e) => setHowTo(e.target.value)}
      />
    </Container>
  );
}
export const Input = styled.input`
  width: 800px;
  height: 45px;
  text-align: start;
  font-size: 18px;
  overflow: auto;
  font-style: normal;
  margin-bottom: 20px;
  border-radius: 5px;
  color: "#b9babaff";
  border: 1px solid #b9babaff;
`;
