import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../context/UpdateDataContext";
import data from "../../translations/trans";
import { Container } from "../home-page/About";

export default function Success() {
  const [userSuccess, setUserSuccess] = useState("");
  const [help, setHelp] = useState("");
  const [influence, setInfluence] = useState("");
  const [centralValue, setCentralValue] = useState("");

  const [, setUserInfo, lang] = useContext(UpdateDataContext);

  useEffect(() => {
    setUserInfo((prevState) => ({
      ...prevState,
      success: {
        userSuccess,
        help,
        influence,
        centralValue,
      },
    }));
  }, [userSuccess, help, setUserInfo, influence, centralValue]);

  return (
    <div style={{ marginBottom: "auto" }}>
      <Numbers>
        <Item style={{ backgroundColor: "orange" }}>7</Item>
        <Item style={{ backgroundColor: "lightgrey" }}>6</Item>
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
          {data[lang].success_first_label}
        </label>
        <Input
          type="text"
          style={{ alignSelf: "flex-start" }}
          value={userSuccess}
          onChange={(e) => setUserSuccess(e.target.value)}
        />
        <label
          style={{
            alignSelf: "flex-start",
            marginBottom: "5px",
          }}
        >
          {data[lang].success_second_label}
        </label>
        <Input
          type="text"
          style={{ alignSelf: "flex-start" }}
          value={help}
          onChange={(e) => setHelp(e.target.value)}
        />
        <label
          style={{
            alignSelf: "flex-start",
            marginBottom: "5px",
          }}
        >
          {data[lang].success_third_label}
        </label>
        <Input
          type="text"
          style={{ alignSelf: "flex-start" }}
          value={influence}
          onChange={(e) => setInfluence(e.target.value)}
        />
        <label
          style={{
            alignSelf: "flex-start",
            marginBottom: "5px",
          }}
        >
          {data[lang].success_forth_label}
        </label>
        <Input
          type="text"
          style={{ alignSelf: "flex-start" }}
          value={centralValue}
          onChange={(e) => setCentralValue(e.target.value)}
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
