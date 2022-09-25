import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";

export default function EthicsPartOne() {
  const [, setUserInfo, lang] = useContext(UpdateDataContext);
  const [userValues, setUserValues] = useState([]);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("ethics-part-one-data");
    const parse = JSON.parse(data);
    if (parse) {
      parse.length >= 2 || parse.length <= 4 ? setArr([...parse]) : setArr([]);
      parse.length >= 2 || parse.length <= 4
        ? setUserValues([...parse])
        : console.log(parse);
    }
  }, []);

  useEffect(() => {
    setUserInfo((prevState) => ({
      ...prevState,
      ethicsPartOne: {
        userValues: userValues,
      },
    }));
    userValues.length > 1 &&
      localStorage.setItem("ethics-part-one-data", JSON.stringify(userValues));
  }, [userValues, setUserInfo]);

  const handleClickOnValue = (value, e) => {
    if (e.target.style.backgroundColor === "rgb(230, 230, 230)") {
      e.target.style.backgroundColor = "#84c128ff";
      e.target.style.color = "white";
      setUserValues((prevState) => [...prevState, value]);
    } else if (e.target.style.backgroundColor === "rgb(132, 193, 40)") {
      e.target.style.backgroundColor = "#E6E6E6";
      e.target.style.color = "black";
      setUserValues((prevState) => [
        ...prevState.filter((option) => option !== value),
      ]);
    }
  };

  return (
    <div
      style={{
        marginBottom: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p style={{  marginBottom: "20px" }}>
        {data[lang].ethics_description[0]}{" "}
        <span
          style={{ color: "#4595d5ff", fontWeight: "700", fontSize: "1.3rem" }}
        >
          {data[lang].ethics_description[1]}
        </span>{" "}
        {data[lang].ethics_description[2]}
      </p>

      <Container>
        {data[lang].ethics_values &&
          data[lang].ethics_values.map((value, id) =>
            arr.includes(value) ? (
              <Div
                key={id}
                onClick={(e) => handleClickOnValue(value, e)}
                style={{ backgroundColor: "#84c128ff", color: "white" }}
              >
                {value}
              </Div>
            ) : (
              <Div
                key={id}
                onClick={(e) => handleClickOnValue(value, e)}
                style={{ backgroundColor: "#E6E6E6" }}
              >
                {value}
              </Div>
            )
          )}
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.1fr);
  gap: 10px;
`;

const Div = styled.div`
  width: 120px;
  height: 45px;
  text-align: center;
  font-size: 16px;
  overflow: auto;
  font-style: normal;
  color: "#b9babaff";
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.9;
  }
`;
