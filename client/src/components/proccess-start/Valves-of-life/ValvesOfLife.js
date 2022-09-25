import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";


export default function ValvesOfLife() {
  const [, setUserInfo, lang] = useContext(UpdateDataContext);
  const [arr, setArr] = useState([{}]);
  const [sum, setSum] = useState([{}]);
  const intialState = new Array(data[lang].valves_of_life_table_options.length).fill(0)
  const resultIntialState = new Array(data[lang].valves_of_life_table_options.length).fill([0])
  const [firstNumber, setFirstNumber] = useState(intialState);
  const [secondNumber, setSecondNumber] = useState(intialState);
  const [thirdNumber, setThirdNumber] = useState(intialState);
  const [fourthNumber, setFourthNumber] = useState(intialState);
  const [result, setResult] = useState(resultIntialState);

  useEffect(() => {
    const arrData = localStorage.getItem("arr");
    const parseArr = arrData && JSON.parse(arrData);

    const sumData = localStorage.getItem("sum");
    const parseSum = sumData && JSON.parse(sumData);

    const resultData = localStorage.getItem("result");
    const parseResult = resultData && JSON.parse(resultData);

    const getFirstNumberData = localStorage.getItem("first-number");
    const parseFirstNumberData = resultData && JSON.parse(getFirstNumberData);

    const getSecondNumberData = localStorage.getItem("second-number");
    const parseSecondNumberData = resultData && JSON.parse(getSecondNumberData);

    const getThirdNumberData = localStorage.getItem("third-number");
    const parseThirdNumberData = resultData && JSON.parse(getThirdNumberData);

    const getFourthNumberData = localStorage.getItem("fourth-number");
    const parseFourthNumberData = resultData && JSON.parse(getFourthNumberData);
    if (parseArr) {
      setArr([...parseArr]);
    }

    if (parseSum) {
      setSum([...parseSum]);
    }

    if (parseResult) {
      setResult(parseResult);
    }

    if (parseFirstNumberData) {
      setFirstNumber([...parseFirstNumberData]);
    }

    if (parseSecondNumberData) {
      setSecondNumber([...parseSecondNumberData]);
    }

    if (parseThirdNumberData) {
      setThirdNumber([...parseThirdNumberData]);
    }

    if (parseFourthNumberData) {
      setFourthNumber([...parseFourthNumberData]);
    }
  }, []);

  useEffect(() => {
    setUserInfo((prevState) => ({
      ...prevState,
      ValvesOfLife: {
        arr,
        sum,
        result
      },
    }));

    localStorage.setItem("arr", JSON.stringify(arr));
    localStorage.setItem("sum", JSON.stringify(sum));
    localStorage.setItem("result", JSON.stringify(result));
    localStorage.setItem("first-number", JSON.stringify(firstNumber));
    localStorage.setItem("second-number", JSON.stringify(secondNumber));
    localStorage.setItem("third-number", JSON.stringify(thirdNumber));
    localStorage.setItem("fourth-number", JSON.stringify(fourthNumber));
  }, [
    arr,
    setUserInfo,
    sum,
    result,
    firstNumber,
    secondNumber,
    thirdNumber,
    fourthNumber,
  ]);

  const handleChange = (value, index, option, numberIndex) => {
    const num = Number(value);
    const reducer = (previousValue, currentValue) =>
      previousValue + currentValue;

    switch (numberIndex) {
      case "first":
        {
          const firstNumberNewState = [...firstNumber];
          firstNumberNewState[index] = num;
          setFirstNumber(firstNumberNewState);

          const newResultState = [...result];
          newResultState[index] = [
            num,
            secondNumber[index],
            thirdNumber[index],
            fourthNumber[index],
          ];
          newResultState[index] = newResultState[index].reduce(reducer);

          setResult(newResultState);
        }
        break;
      case "second":
        {
          const secondNumberNewState = [...secondNumber];
          secondNumberNewState[index] = num;
          setSecondNumber(secondNumberNewState);

          const newResultState = [...result];
          newResultState[index] = [
            num,
            firstNumber[index],
            thirdNumber[index],
            fourthNumber[index],
          ];
          newResultState[index] = newResultState[index].reduce(reducer);
          setResult(newResultState);
        }
        break;
      case "third":
        {
          const thirdNumberNewState = [...thirdNumber];
          thirdNumberNewState[index] = num;
          setThirdNumber(thirdNumberNewState);
          const newResultState = [...result];

          newResultState[index] = [
            num,
            firstNumber[index],
            secondNumber[index],
            fourthNumber[index],
          ];
          newResultState[index] = newResultState[index].reduce(reducer);

          setResult(newResultState);
        }
        break;
      case "fourth":
        {
          const fourthNumberNewState = [...fourthNumber];
          fourthNumberNewState[index] = num;
          setFourthNumber(fourthNumberNewState);
          const newResultState = [...result];

          newResultState[index] = [
            num,
            firstNumber[index],
            secondNumber[index],
            thirdNumber[index],
          ];

          newResultState[index] = newResultState[index].reduce(reducer);
          setResult(newResultState);
        }
        break;
      default:
        break;
    }

    setArr((prev) => [
      ...prev,
      {
        [option]: num,
      },
    ]);


    setSum((prevState) => {
      prevState[index] = { name: [option], value: result[index] };
      return [...prevState];
    });

    // setSum((prev) =>
    //   prev[option] >= 0
    //     ? {
    //         ...prev,
    //         [option]: prev[option] + num,
    //       }
    //     : {
    //         ...prev,
    //         [option]: 0 + num,
    //       }
    // );
  };
  
  return (
    <div style={{ marginBottom: "auto", overflow: "auto" }}>
      <p>
        {data[lang].valves_of_life_description[0]}
        <br />
        {data[lang].valves_of_life_description[1]}
        <span
          style={{ color: "#4faddf", fontWeight: "700", fontSize: "1.2rem" }}
        >
          {data[lang].valves_of_life_description[2]}
        </span>{" "}
        {data[lang].valves_of_life_description[3]}

      </p>
      <Table>
        <tr>
          {data[lang].valves_of_life_table_titles.map((title, id) => {
            return (
              <Th key={id}>
                <div style={{ width: "50%", margin: "0 auto" }}>{title}</div>
              </Th>
            );
          })}
        </tr>
        {data[lang].valves_of_life_table_options.map((option, id) => {
          return (
            <tr key={id}>
              <Td
                style={{
                  backgroundColor: "#4faddf",
                  color: "#e9e9e9",
                  fontWeight: "450",
                }}
              >
                {option}
              </Td>
              <Td>
                <select
                  type="text"
                  value={firstNumber[id]}
                  onChange={(e) =>
                    handleChange(e.target.value, id, option, "first")
                  }
                >
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
                  value={secondNumber[id]}
                  onChange={(e) =>
                    handleChange(e.target.value, id, option, "second")
                  }
                >
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
                  value={thirdNumber[id]}
                  onChange={(e) =>
                    handleChange(e.target.value, id, option, "third")
                  }
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
                  value={fourthNumber[id]}
                  onChange={(e) =>
                    handleChange(e.target.value, id, option, "fourth")
                  }
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
  width: 400px;
`;
