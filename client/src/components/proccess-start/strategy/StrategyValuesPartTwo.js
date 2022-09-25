import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";

export default function StrategyValuesPartTwo() {
  // eslint-disable-next-line no-unused-vars
  const [userInfo, setUserInfo, lang] = useContext(UpdateDataContext);
  const [userFreindsValues, setUserFreindsValues] = useState([]);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    console.log("userFreindsValues: ", userFreindsValues)
  })

  useEffect(() => {
    const data = localStorage.getItem("strategy-part-two-data");
    const parse = data && JSON.parse(data);
    if (parse) {
      setArr([...parse]);
      setUserFreindsValues([...parse]);
    } else {
      setUserFreindsValues([])
    }
  }, []);

  const arrOfValues = data[lang].strategey_values;
  useEffect(() => {
    setUserInfo((prevState) => ({
      ...prevState,
      strategyValuesPartTwo: {
        userFriendsValues: userFreindsValues,
      },
    }));
    localStorage.setItem(
      "strategy-part-two-data",
      JSON.stringify(userFreindsValues)
    );
  }, [userFreindsValues, setUserInfo]);

  const handleClickOnNeed = (value, e) => {
    if (e.target.style.backgroundColor === "rgb(69, 149, 213)") {
      e.target.style.backgroundColor = "#84c128ff";
      e.target.style.color = "white";
      setUserFreindsValues((prevState) => [...prevState, value]);
    } else if (e.target.style.backgroundColor === "rgb(132, 193, 40)") {
      e.target.style.backgroundColor = "rgb(69, 149, 213)";
      e.target.style.color = "white";
      setUserFreindsValues((prevState) => [
        ...prevState.filter((option) => option !== value),
      ]);
    }
  };

  return (
    <div style={{ marginBottom: "0", display: "block" }}>
      <p style={{ fontSize: "1.5rem", marginBottom: "20px" }}>
        {data[lang].strategey_values_part_two_desription[0]}
      </p>

      <Container>
        {arrOfValues &&
          arrOfValues.map((value, id) =>
            arr.includes(value) ? (
              <Div
                key={id}
                onClick={(e) => handleClickOnNeed(value, e)}
                style={{
                  backgroundColor: "rgb(132, 193, 40)",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                {value}
              </Div>
            ) : (
              <Div
                key={id}
                onClick={(e) => handleClickOnNeed(value, e)}
                style={{
                  backgroundColor: "rgb(69, 149, 213)",
                  color: "white",
                  fontWeight: "600",
                }}
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
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin: 0;
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
