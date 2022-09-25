import React, { useState, useContext, useEffect, useCallback } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";

export default function StrengthsTable() {
  const [, setUserInfo, lang] = useContext(UpdateDataContext);
  const [arr, setArr] = useState([{}]);
  const [sum, setSum] = useState([{}]);
  const intialState = new Array(data[lang].strengths_table_options.length).fill(
    0
  );
  const resultIntialState = new Array(
    data[lang].strengths_table_options.length
  ).fill([0]);

  const [firstNumber, setFirstNumber] = useState(intialState);
  const [secondNumber, setSecondNumber] = useState(intialState);
  const [thirdNumber, setThirdNumber] = useState(intialState);
  const [result, setResult] = useState(resultIntialState);

  useEffect(() => {
    console.log("sum: ", sum);
  }, [sum]);

  useEffect(() => {
    const arrData = localStorage.getItem("arr-strengths");
    const parseArr = arrData && JSON.parse(arrData);

    const sumData = localStorage.getItem("sum-strengths");
    const parseSum = sumData && JSON.parse(sumData);

    const resultData = localStorage.getItem("result-strengths");
    const parseResult = resultData && JSON.parse(resultData);

    const getFirstNumberData = localStorage.getItem("first-number-strengths");
    const parseFirstNumberData = resultData && JSON.parse(getFirstNumberData);

    const getSecondNumberData = localStorage.getItem("second-number-strengths");
    const parseSecondNumberData = resultData && JSON.parse(getSecondNumberData);

    const getThirdNumberData = localStorage.getItem("third-number-strengths");
    const parseThirdNumberData = resultData && JSON.parse(getThirdNumberData);

    if (parseArr) {
      setArr(parseArr);
    }

    if (parseSum) {
      setSum(parseSum);
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
  }, []);

  useEffect(() => {
    const arrOfSum = sum;
    setUserInfo((prevState) => ({
      ...prevState,
      strengths_table: {
        arrOfStrengths: arrOfSum,
        arr,
        result,
      },
    }));

    localStorage.setItem("arr-strengths", JSON.stringify(arr));
    localStorage.setItem("sum-strengths", JSON.stringify(sum));
    localStorage.setItem("result-strengths", JSON.stringify(result));
    localStorage.setItem("first-number-strengths", JSON.stringify(firstNumber));
    localStorage.setItem(
      "second-number-strengths",
      JSON.stringify(secondNumber)
    );
    localStorage.setItem("third-number-strengths", JSON.stringify(thirdNumber));
  }, [setUserInfo, sum, arr, result, firstNumber, secondNumber, thirdNumber]);

  const handleChange = async (value, index, option, numberIndex) => {
    const num = Number(value);
    const reducer = (previousValue, currentValue) =>
      previousValue + currentValue;

    switch (numberIndex) {
      case "first":
        {
          const firstNumberNewState = [...firstNumber];
          firstNumberNewState[index] = num;
          setFirstNumber(firstNumberNewState);

          // const newResultState = [...result];
          // newResultState[index] = [
          //   num,
          //   secondNumber[index],
          //   thirdNumber[index],
          // ];
          // newResultState[index] = newResultState[index].reduce(reducer);

          setResult((prevState) => {
            prevState[index] = [num, secondNumber[index], thirdNumber[index]];
            prevState[index] = prevState[index].reduce(reducer);

            return [...prevState];
          });
        }
        break;
      case "second":
        {
          const secondNumberNewState = [...secondNumber];
          secondNumberNewState[index] = num;
          setSecondNumber(secondNumberNewState);

          setResult((prevState) => {
            prevState[index] = [num, firstNumber[index], thirdNumber[index]];
            prevState[index] = prevState[index].reduce(reducer);

            return [...prevState];
          });
        }
        break;
      case "third":
        {
          const thirdNumberNewState = [...thirdNumber];
          thirdNumberNewState[index] = num;
          setThirdNumber(thirdNumberNewState);

          // const newResultState = [...result];
          // newResultState[index] = [
          //   num,
          //   firstNumber[index],
          //   secondNumber[index],
          // ];
          // newResultState[index] = newResultState[index].reduce(reducer);

          setResult((prevState) => {
            prevState[index] = [num, firstNumber[index], secondNumber[index]];
            prevState[index] = prevState[index].reduce(reducer);

            return [...prevState];
          });
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
      prevState[index] = { [option]: result[index] };
      return [...prevState];
    });
  };

  // const handleChange = (value, index, option, numberIndex) => {
  //   const num = Number(value);
  //   const reducer = (previousValue, currentValue) =>
  //     previousValue + currentValue;

  //   switch (numberIndex) {
  //     case "first":
  //       {
  //         const firstNumberNewState = [...firstNumber];
  //         firstNumberNewState[index] = num;
  //         setFirstNumber(firstNumberNewState);

  //         const newResultState = [...result];
  //         newResultState[index] = [
  //           num,
  //           secondNumber[index],
  //           thirdNumber[index],
  //         ];
  //         newResultState[index] = newResultState[index].reduce(reducer);

  //         setResult(newResultState);
  //       }
  //       break;
  //     case "second":
  //       {
  //         const secondNumberNewState = [...secondNumber];
  //         secondNumberNewState[index] = num;
  //         setSecondNumber(secondNumberNewState);

  //         const newResultState = [...result];
  //         newResultState[index] = [num, firstNumber[index], thirdNumber[index]];
  //         newResultState[index] = newResultState[index].reduce(reducer);
  //         setResult(newResultState);
  //       }
  //       break;
  //     case "third":
  //       {
  //         const thirdNumberNewState = [...thirdNumber];
  //         thirdNumberNewState[index] = num;
  //         setThirdNumber(thirdNumberNewState);
  //         const newResultState = [...result];

  //         newResultState[index] = [
  //           num,
  //           firstNumber[index],
  //           secondNumber[index],
  //         ];
  //         newResultState[index] = newResultState[index].reduce(reducer);

  //         setResult(newResultState);
  //       }
  //       break;
  //     default:
  //       break;
  //   }

  //   setArr((prev) => [
  //     ...prev,
  //     {
  //       [option]: num,
  //     },
  //   ]);

  //   setSum((prevState) => {
  //     prevState[index] = { [option]: result[index] };
  //     return [...prevState];
  //   });
  // };

  return (
    <div style={{ marginBottom: "auto", overflow: "auto" }}>
      <p>
        {data[lang].strengths_table_description[0]}
        <span
          style={{ color: "#4faddf", fontWeight: "700", fontSize: "1.2rem" }}
        >
          {data[lang].strengths_table_description[1]}
        </span>{" "}
        {data[lang].strengths_table_description[2]}
        <br />
        {data[lang].strengths_table_description[3]}
        <span
          style={{ color: "#4faddf", fontWeight: "700", fontSize: "1.2rem" }}
        >
          {data[lang].strengths_table_description[4]}
        </span>{" "}
        {data[lang].strengths_table_description[5]}
        <br />
        {data[lang].strengths_table_description[6]}
      </p>
      <Table>
        <tr>
          {data[lang].strengths_table_titles.map((title, id) => {
            return (
              <Th key={id}>
                <div style={{ width: "50%", margin: "0 auto" }}>{title}</div>
              </Th>
            );
          })}
        </tr>
        {data[lang].strengths_table_options.map((option, id) => {
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
