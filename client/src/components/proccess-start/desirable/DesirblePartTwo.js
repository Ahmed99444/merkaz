import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";

export default function DesirblePartTwo() {
  const [goal, setGoal] = useState([]);
  const [futureGoal, setFutureGoal] = useState([]);
  const [max, setMax] = useState([{}]);
  const [firstNumber, setFirstNumber] = useState([0, 0, 0, 0, 0, 0]);
  const [secondNumber, setSecondNumber] = useState([0, 0, 0, 0, 0, 0]);
  const [result, setResult] = useState([0, 0, 0, 0, 0, 0]);
  const [, setUserInfo, lang] = useContext(UpdateDataContext);

  useEffect(() => {
    const getMax = localStorage.getItem("max-data");
    const parseMax = JSON.parse(getMax);

    if (parseMax) {
      setMax(parseMax);
    }

    const getFirstNumber = localStorage.getItem("first-number");
    const parseFirstNumber = JSON.parse(getFirstNumber);

    if (parseFirstNumber) {
      setFirstNumber(parseFirstNumber);
    }

    const getSecondNumber = localStorage.getItem("second-number");
    const parseSecondNumber = JSON.parse(getSecondNumber);

    if (parseSecondNumber) {
      setSecondNumber(parseSecondNumber);
    }

    const getResult = localStorage.getItem("result-data");
    const parseResult = JSON.parse(getResult);

    if (parseResult) {
      setResult(parseResult);
    }

    const getGoal = localStorage.getItem("goal-data");
    const parseGoal = JSON.parse(getGoal);

    if (parseGoal) {
      setGoal(parseGoal);
    }

    const getFutureGoal = localStorage.getItem("future-goal-data");
    const parseFutureGoal = JSON.parse(getFutureGoal);

    if (parseFutureGoal) {
      setFutureGoal(parseFutureGoal);
    }
  }, []);

  useEffect(() => {
    const arrange = goal.map((userGoal, id) => {
      return {
        [userGoal]: result[id],
      };
    });

    setMax(arrange);
  }, [goal, result]);

  useEffect(() => {
    setUserInfo((prevState) => ({
      ...prevState,
      desirblePartTwo: {
        goals: max,
      },
    }));

    localStorage.setItem("max-data", JSON.stringify(max));
    localStorage.setItem("first-number", JSON.stringify(firstNumber));
    localStorage.setItem("second-number", JSON.stringify(secondNumber));
    localStorage.setItem("result-data", JSON.stringify(result));
    localStorage.setItem("goal-data", JSON.stringify(goal));
    localStorage.setItem("future-goal-data", JSON.stringify(futureGoal));

  }, [setUserInfo, max, firstNumber, secondNumber, result, goal, futureGoal]);

  const handleFirstNumberChange = (value, index) => {
    const newState = [...firstNumber];
    newState[index] = value;
    setFirstNumber(newState);

    const newResultState = [...result];
    newResultState[index] = value;
    setResult(newResultState);
  };

  const handleSecondNumberChange = (value, index, key) => {
    const newState = [...secondNumber];
    newState[index] = value;
    setSecondNumber(newState);

    const newResultState = [...result];
    newResultState[index] = firstNumber[index] + value;
    setResult(newResultState);
  };

  const handleGoalOnChange = (value, index) => {
    const newState = [...goal];
    newState[index] = value;
    setGoal(newState);
  };

  const handleFutureGoalOnChange = (value, index) => {
    const newState = [...futureGoal];
    newState[index] = value;
    setFutureGoal(newState);
  };


  return (
    <div style={{ marginTop: "-100px", overflow: "auto" }}>
      <GreyerBox>
        <p
          style={{ fontWeight: "700", textAlign: "right", marginRight: "20%" }}
        >
          {data[lang].desirable_part_two_description[0]}
        </p>
        <div>
          <p style={{ textAlign: "right", marginRight: "20%" }}>
            <span style={{ color: "#4faddf", fontWeight: "700" }}>
              {data[lang].desirable_part_two_description[1]}{" "}
            </span>
            {data[lang].desirable_part_two_description[2]}
          </p>
        </div>
        <div>
          <p style={{ textAlign: "right", marginRight: "20%" }}>
            <span style={{ color: "#8aca28", fontWeight: "700" }}>
              {data[lang].desirable_part_two_description[3]}{" "}
            </span>
            {data[lang].desirable_part_two_description[4]}
          </p>
        </div>
        <div>
          <p style={{ textAlign: "right", marginRight: "20%" }}>
            <span style={{ color: "#f08c13", fontWeight: "700" }}>
              {" "}
              {data[lang].desirable_part_two_description[5]}{" "}
            </span>
            {data[lang].desirable_part_two_description[6]}
          </p>
        </div>
      </GreyerBox>
      <p>{data[lang].desirable_part_two_description[7]}</p>
      <Table>
        <tr>
          {data[lang].desirable_part_two_table_titles.map((title, id) => {
            return (
              <Th key={id}>
                <div style={{ width: "50%", margin: "0 auto" }}>{title}</div>
              </Th>
            );
          })}
        </tr>
        {data[lang].desirable_part_two_table_options.map((option, id) => {
          return (
            <tr key={id}>
              <Td
                style={{
                  backgroundColor: "#4faddf",
                  color: "#e9e9e9",
                  fontWeight: "450",
                  width: "",
                }}
              >
                {option}
              </Td>
              <Td>
                <Input
                  value={futureGoal[id]}
                  onChange={(e) => handleFutureGoalOnChange(e.target.value, id)}
                />
              </Td>
              <Td>
                <Input
                  value={goal[id]}
                  onChange={(e) => handleGoalOnChange(e.target.value, id)}
                />
              </Td>
              <Td>
                <select
                  type="text"
                  onChange={(e) =>
                    handleFirstNumberChange(Number(e.target.value), id, option)
                  }
                  value={firstNumber[id]}
                >
                  {" "}
                  <option value={0}>0</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </Td>
              <Td>
                <select
                  type="text"
                  onChange={(e) =>
                    handleSecondNumberChange(Number(e.target.value), id, option)
                  }
                  value={secondNumber[id]}
                >
                  {" "}
                  <option value={0}>0</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </Td>
              <Td>
                <div>{result[id]}</div>
              </Td>
            </tr>
          );
        })}
      </Table>
    </div>
  );
}

const Table = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  height: max-content;
`;

const Td = styled.td`
  border: 5px solid #f5f4f5ff;
  text-align: center;
  padding: 1rem;
  background-color: #e9e9e9;
`;
const Th = styled.td`
  border: 5px solid #f5f4f5ff;
  padding: 9px;
  background-color: #4faddf;
  color: white;
  font-weight: bold;
  letter-spacing: 1.2px;
  width: 300px;
`;

const Input = styled.input`
  background-color: #e9e9e9;
  border: none;
  font-size: 1rem;
`;

const GreyerBox = styled.div`
  background: "rgb(230,227,227)";
  background: linear-gradient(
    90deg,
    rgba(230, 227, 227, 1) 0%,
    rgba(255, 255, 255, 1) 48%,
    rgba(230, 227, 227, 1) 100%
  );
  padding: 1rem;
  width: 102%;
`;
