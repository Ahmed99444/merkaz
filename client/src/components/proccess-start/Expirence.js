import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../context/UpdateDataContext";
import data from "../../translations/trans";
import { Container } from "../home-page/About";

export default function Expirence() {
  const [familyExpireince, setFamilyExpireince] = useState("");
  const [carrer, setCarrer] = useState("");
  const [firends, setFirends] = useState("");
  const [hapinness, setHapinness] = useState("");

  const [, setUserInfo, lang] = useContext(UpdateDataContext);

  useEffect(() => {
    setUserInfo((prevState) => ({
      ...prevState,
      expireince: {
        family: familyExpireince,
        carrer,
        firends,
        hapinness,
      },
    }));
  }, [carrer, familyExpireince, setUserInfo, firends, hapinness]);

  return (
    <div style={{ marginBottom: "auto" }}>
      <Numbers>
        <Item>7</Item>
        <Item>6</Item>
        <Item>5</Item>
        <Item>4</Item>
        <Item style={{ backgroundColor: "orange" }}>3</Item>
        <Item style={{ backgroundColor: "lightgrey" }}>2</Item>
        <Item style={{ backgroundColor: "lightgrey" }}>1</Item>
      </Numbers>
      <Container>
        <label style={{ alignSelf: "flex-start", marginBottom: "5px" }}>
          {data[lang].expirence_description}
        </label>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <label
            style={{
              alignSelf: "flex-start",
              marginBottom: "5px",
              color: "#4faddf",
              marginTop: "10px",
              marginLeft: "45px",
              fontWeight: 800,
            }}
          >
            {data[lang].expirence_first_label}
            <br />
            {data[lang].expirence_first_label_part_two}
          </label>
          <Input
            type="text"
            style={{ alignSelf: "flex-start" }}
            value={familyExpireince}
            onChange={(e) => setFamilyExpireince(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "20px",
          }}
        >
          <label
            style={{
              alignSelf: "flex-start",
              marginBottom: "5px",
              color: "#4faddf",
              marginTop: "10px",
              marginLeft: "50px",
              fontWeight: 800,
            }}
          >
            {data[lang].expirence_second_label}
          </label>
          <Input
            type="text"
            style={{ alignSelf: "flex-start" }}
            value={carrer}
            onChange={(e) => setCarrer(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "20px",
          }}
        >
          <label
            style={{
              alignSelf: "flex-start",
              marginBottom: "5px",
              color: "#4faddf",
              marginTop: "10px",
              marginLeft: "50px",
              fontWeight: 800,
            }}
          >
            {data[lang].expirence_third_label}
          </label>
          <Input
            type="text"
            style={{ alignSelf: "flex-start" }}
            value={firends}
            onChange={(e) => setFirends(e.target.value)}
          />
        </div>
        <label style={{ alignSelf: "flex-start", marginBottom: "5px" }}>
          {data[lang].expirence_forth_label}
        </label>
        <Input
          type="text"
          style={{ alignSelf: "flex-start" }}
          value={hapinness}
          onChange={(e) => setHapinness(e.target.value)}
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
  height: 45px;
  text-align: start;
  overflow: auto;
  font-style: normal;
  margin-bottom: 20px;
  border-radius: 5px;
  color: "#b9babaff";
  border: 2px solid #b9babaff;
`;
