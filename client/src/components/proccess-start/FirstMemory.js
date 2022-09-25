import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../context/UpdateDataContext";
import data from "../../translations/trans";
import { Container } from "../home-page/About";

export default function FirstMemory() {
  const [text, setText] = useState("");
  const [, setUserInfo, lang] = useContext(UpdateDataContext);

  useEffect(() => {
    setUserInfo((prevState) => ({
      ...prevState,
      childhood_memory: text,
    }));
  }, [text, setUserInfo]);

  return (
    <div style={{ marginBottom: "auto" }}>
      <Numbers>
        <Item>7</Item>
        <Item>6</Item>
        <Item>5</Item>
        <Item>4</Item>
        <Item>3</Item>
        <Item>2</Item>
        <Item style={{ backgroundColor: "orange" }}>1</Item>
      </Numbers>
      <Container>
        <label
          style={{
            alignSelf: "flex-start",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          {data[lang].childhood_description}
        </label>
        <Input
          type="text"
          style={{ alignSelf: "flex-start" }}
          value={text.childhood_memory}
          onChange={(e) => setText(e.target.value)}
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
  font-weight: bold;
`;

const Input = styled.input`
  width: 500px;
  height: 200px;
  text-align: start;
  font-size: 18px;
  overflow: auto;
  font-style: normal;
  border-radius: 5px;
  color: "#b9babaff";
  border: 2px solid #b9babaff;
  padding: 0.6rem;
  margin-bottom: 5px;
`;
