import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";

export default function StrengthsPartFour() {
  const [arr, setArr] = useState([]);
  const [todayRate, setTodayRate] = useState([]);
  const [pastRate, setPastRate] = useState([]);
  const [tomorrowRate, setTomorrowRate] = useState([]);
  const [, setUserInfo, lang] = useContext(UpdateDataContext);

  useEffect(() => {
    const getArr = localStorage.getItem("arrOfStrengths2");
    const parseArr = getArr && JSON.parse(getArr);

    if (parseArr) {
      setArr(parseArr);
    }

    const getTodayRate = localStorage.getItem("todayRate");
    const parseTodayRate = getArr && JSON.parse(getTodayRate);
    console.log("parseTodayRate: ", parseTodayRate);
    if (parseTodayRate) {
      setTodayRate([...parseTodayRate]);
    }

    const getTomorrowRate = localStorage.getItem("tomorrowRate");
    const parseTomorrowRate = getArr && JSON.parse(getTomorrowRate);

    if (parseTomorrowRate) {
      setTomorrowRate(parseTomorrowRate);
    }

    const getPastRate = localStorage.getItem("pastRate");
    const parsePastRate = getArr && JSON.parse(getPastRate);
    console.log("parsePastRate: ", parsePastRate);
    if (parsePastRate) {
      setPastRate(parsePastRate);
    }
  }, []);

  useEffect(() => {
    setUserInfo((prevState) => ({
      ...prevState,
      strengthsPartFour: {
        arrOfStrengths: arr,
        todayRate,
        tomorrowRate,
        pastRate,
      },
    }));

    localStorage.setItem("arrOfStrengths2", JSON.stringify(arr));
    localStorage.setItem("todayRate", JSON.stringify(todayRate));
    localStorage.setItem("tomorrowRate", JSON.stringify(tomorrowRate));
    localStorage.setItem("pastRate", JSON.stringify(pastRate));
  }, [setUserInfo, arr, todayRate, tomorrowRate, pastRate]);

  const handleChange = (value, index) => {
    let newState = [...arr];
    newState[index] = value;
    setArr([...newState]);
  };

  const handleRatingChange = (value, strength, time) => {
    if (time === "היום") {
      setTodayRate([...todayRate, value]);
    } else if (time === "היית בעבר") {
      setPastRate([...pastRate, value]);
    } else {
      setTomorrowRate([...tomorrowRate, value]);
    }
  };

  return (
    <Container style={{ marginTop: "80px" }}>
      <Table>
        <tr>
          {data[lang].strengths_part_four_table_one_titles.map((title, id) => (
            <Th key={id}>
              <div style={{ margin: "0 auto" }}>{title}</div>
            </Th>
          ))}
        </tr>
        <tr>
          <Td>1</Td>
          <Td>
            <Input
              placeholder={
                data[lang].strengths_part_four_table_one_placeholders[0]
              }
              value={arr[0]}
              onChange={(e) => handleChange(e.target.value, 0)}
            ></Input>
          </Td>
          <Td>
            <Input
              placeholder={
                data[lang].strengths_part_four_table_one_placeholders[1]
              }
              value={arr[1]}
              onChange={(e) => handleChange(e.target.value, 1)}
            ></Input>
          </Td>
        </tr>{" "}
        <tr>
          <Td>2</Td>
          <Td>
            <Input
              placeholder={
                data[lang].strengths_part_four_table_one_placeholders[2]
              }
              value={arr[2]}
              onChange={(e) => handleChange(e.target.value, 2)}
            ></Input>
          </Td>
          <Td>
            <Input
              placeholder={
                data[lang].strengths_part_four_table_one_placeholders[3]
              }
              value={arr[3]}
              onChange={(e) => handleChange(e.target.value, 3)}
            ></Input>
          </Td>
        </tr>
        <tr>
          <Td>3</Td>
          <Td>
            <Input
              placeholder={
                data[lang].strengths_part_four_table_one_placeholders[4]
              }
              value={arr[4]}
              onChange={(e) => handleChange(e.target.value, 4)}
            ></Input>
          </Td>
          <Td>
            <Input
              placeholder={
                data[lang].strengths_part_four_table_one_placeholders[5]
              }
              value={arr[5]}
              onChange={(e) => handleChange(e.target.value, 5)}
            ></Input>
          </Td>
        </tr>
        <tr>
          <Td>4</Td>
          <Td>
            <Input
              placeholder={
                data[lang].strengths_part_four_table_one_placeholders[6]
              }
              value={arr[6]}
              onChange={(e) => handleChange(e.target.value, 6)}
            ></Input>
          </Td>
          <Td>
            <Input
              placeholder={
                data[lang].strengths_part_four_table_one_placeholders[7]
              }
              value={arr[7]}
              onChange={(e) => handleChange(e.target.value, 7)}
            ></Input>
          </Td>
        </tr>
        <tr>
          <Td>5</Td>
          <Td>
            <Input
              placeholder={
                data[lang].strengths_part_four_table_one_placeholders[8]
              }
              value={arr[8]}
              onChange={(e) => handleChange(e.target.value, 8)}
            ></Input>
          </Td>
          <Td>
            <Input
              placeholder={
                data[lang].strengths_part_four_table_one_placeholders[9]
              }
              value={arr[9]}
              onChange={(e) => handleChange(e.target.value, 9)}
            ></Input>
          </Td>
        </tr>
        <tr>
          <Td>6</Td>
          <Td>
            <Input
              placeholder={
                data[lang].strengths_part_four_table_one_placeholders[10]
              }
              value={arr[10]}
              onChange={(e) => handleChange(e.target.value, 10)}
            ></Input>
          </Td>
          <Td>
            <Input
              placeholder={
                data[lang].strengths_part_four_table_one_placeholders[11]
              }
              value={arr[11]}
              onChange={(e) => handleChange(e.target.value, 11)}
            ></Input>
          </Td>
        </tr>
      </Table>

      <Table style={{ marginTop: "-68px", marginRight: "-20px" }}>
        <Table>
          <div
            style={{
              backgroundColor: "#f08c13",
              color: "white",
              height: "50px",
              borderRadius: "999px",
              border: "1px solid white",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              position: "relative",
              right: "157px",
              marginBottom: "19.5px",
            }}
          >
            {" "}
            <div>{data[lang].strengths_part_four_table_two_titles[0]}:</div>
          </div>
        </Table>
        <tr></tr>
        <tr>
          <Th>
            {" "}
            <div style={{ margin: "0 auto" }}>
              {data[lang].strengths_part_four_table_two_titles[1]}
            </div>
          </Th>
          <Th style={{ backgroundColor: "#8aca28" }}>
            {" "}
            <div style={{ margin: "0 auto" }}>
              {data[lang].strengths_part_four_table_two_titles[2]}
            </div>
          </Th>
          <Th style={{ backgroundColor: "#f08c13" }}>
            {" "}
            <div style={{ margin: "0 auto" }}>
              {data[lang].strengths_part_four_table_two_titles[3]}
            </div>
          </Th>
        </tr>
        <tr>
          <Td>
            <select
              type="number"
              value={todayRate[0]}
              style={{
                backgroundColor: "#e9e9e9",
                width: "100px",
                border: "none",
              }}
              onChange={(e) =>
                handleRatingChange(e.target.value, arr[0], "היום")
              }
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </Td>{" "}
          <Td>
            <select
              type="number"
              value={pastRate[0]}
              style={{
                backgroundColor: "#e9e9e9",
                width: "100px",
                border: "none",
              }}
              onChange={(e) =>
                handleRatingChange(e.target.value, arr[0], "היית בעבר")
              }
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </Td>{" "}
          <Td>
            <select
              type="number"
              value={tomorrowRate[0]}
              style={{
                backgroundColor: "#e9e9e9",
                width: "100px",
                border: "none",
              }}
              onChange={(e) =>
                handleRatingChange(e.target.value, arr[0], "הייתי רוצה בעתיד")
              }
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </Td>{" "}
        </tr>
        <tr>
          <Td>
            <select
              value={todayRate[1]}
              type="number"
              style={{
                backgroundColor: "#e9e9e9",
                width: "100px",
                border: "none",
              }}
              onChange={(e) =>
                handleRatingChange(e.target.value, arr[2], "היום")
              }
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </Td>{" "}
          <Td>
            <select
              value={pastRate[1]}
              type="number"
              style={{
                backgroundColor: "#e9e9e9",
                width: "100px",
                border: "none",
              }}
              onChange={(e) =>
                handleRatingChange(e.target.value, arr[2], "היית בעבר")
              }
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </Td>{" "}
          <Td>
            <select
              value={tomorrowRate[1]}
              type="number"
              style={{
                backgroundColor: "#e9e9e9",
                width: "100px",
                border: "none",
              }}
              onChange={(e) =>
                handleRatingChange(e.target.value, arr[2], "הייתי רוצה בעתיד")
              }
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </Td>{" "}
        </tr>
        <tr>
          <Td>
            <select
              type="number"
              value={todayRate[2]}
              style={{
                backgroundColor: "#e9e9e9",
                width: "100px",
                border: "none",
              }}
              onChange={(e) =>
                handleRatingChange(e.target.value, arr[4], "היום")
              }
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </Td>{" "}
          <Td>
            <select
              value={pastRate[2]}
              type="number"
              style={{
                backgroundColor: "#e9e9e9",
                width: "100px",
                border: "none",
              }}
              onChange={(e) =>
                handleRatingChange(e.target.value, arr[4], "היית בעבר")
              }
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </Td>{" "}
          <Td>
            <select
              value={tomorrowRate[2]}
              type="number"
              style={{
                backgroundColor: "#e9e9e9",
                width: "100px",
                border: "none",
              }}
              onChange={(e) =>
                handleRatingChange(e.target.value, arr[4], "הייתי רוצה בעתיד")
              }
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </Td>{" "}
        </tr>
        <tr>
          <Td>
            <select
              value={todayRate[3]}
              type="number"
              style={{
                backgroundColor: "#e9e9e9",
                width: "100px",
                border: "none",
              }}
              onChange={(e) =>
                handleRatingChange(e.target.value, arr[6], "היום")
              }
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </Td>{" "}
          <Td>
            <select
              type="number"
              value={pastRate[3]}
              style={{
                backgroundColor: "#e9e9e9",
                width: "100px",
                border: "none",
              }}
              onChange={(e) =>
                handleRatingChange(e.target.value, arr[6], "היית בעבר")
              }
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </Td>{" "}
          <Td>
            <select
              value={tomorrowRate[3]}
              type="number"
              style={{
                backgroundColor: "#e9e9e9",
                width: "100px",
                border: "none",
              }}
              onChange={(e) =>
                handleRatingChange(e.target.value, arr[6], "הייתי רוצה בעתיד")
              }
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </Td>{" "}
        </tr>
        <tr>
          <Td>
            <select
              value={todayRate[4]}
              type="number"
              style={{
                backgroundColor: "#e9e9e9",
                width: "100px",
                border: "none",
              }}
              onChange={(e) =>
                handleRatingChange(e.target.value, arr[8], "היום")
              }
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </Td>{" "}
          <Td>
            <select
              value={pastRate[4]}
              type="number"
              style={{
                backgroundColor: "#e9e9e9",
                width: "100px",
                border: "none",
              }}
              onChange={(e) =>
                handleRatingChange(e.target.value, arr[8], "היית בעבר")
              }
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </Td>{" "}
          <Td>
            <select
              type="number"
              value={tomorrowRate[4]}
              style={{
                backgroundColor: "#e9e9e9",
                width: "100px",
                border: "none",
              }}
              onChange={(e) =>
                handleRatingChange(e.target.value, arr[8], "הייתי רוצה בעתיד")
              }
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </Td>{" "}
        </tr>
        <tr>
          <Td>
            <select
              value={todayRate[5]}
              type="number"
              style={{
                backgroundColor: "#e9e9e9",
                width: "100px",
                border: "none",
              }}
              onChange={(e) =>
                handleRatingChange(e.target.value, arr[10], "היום")
              }
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </Td>{" "}
          <Td>
            <select
              value={pastRate[5]}
              type="number"
              style={{
                backgroundColor: "#e9e9e9",
                width: "100px",
                border: "none",
              }}
              onChange={(e) =>
                handleRatingChange(e.target.value, arr[10], "היית בעבר")
              }
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </Td>{" "}
          <Td>
            <select
              value={tomorrowRate[5]}
              type="number"
              style={{
                backgroundColor: "#e9e9e9",
                width: "100px",
                border: "none",
              }}
              onChange={(e) =>
                handleRatingChange(e.target.value, arr[10], "הייתי רוצה בעתיד")
              }
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </Td>{" "}
        </tr>
        {/* <tr>
          <Td>
            <select
              type="number"
              style={{
                backgroundColor: "#e9e9e9",
                width: "100px",
                border: "none",
              }}
              onChange={(e) =>
                handleRatingChange(e.target.value, arr[12], "היום")
              }
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </Td>{" "}
          <Td>
            <select
              type="number"
              style={{
                backgroundColor: "#e9e9e9",
                width: "100px",
                border: "none",
              }}
              onChange={(e) =>
                handleRatingChange(e.target.value, arr[12], "היית בעבר")
              }
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </Td>{" "}
          <Td>
            <select
              type="text"
              style={{
                backgroundColor: "#e9e9e9",
                width: "100px",
                border: "none",
              }}
              onChange={(e) =>
                handleRatingChange(e.target.value, arr[12], "הייתי רוצה בעתיד")
              }
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </Td>{" "}
        </tr> */}
      </Table>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const Table = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  height: max-content;
  margin-bottom: auto;
  margin-right: 5%;
`;

const Td = styled.td`
  border: 5px solid #f5f4f5ff;
  text-align: center;
  padding: 1rem;
  background-color: #e9e9e9;
  width: 50px;
  height: 20px;
`;
const Th = styled.td`
  border: 5px solid #f5f4f5ff;
  padding: 9px;
  background-color: #4faddf;
  color: white;
  font-weight: bold;
  letter-spacing: 1.2px;
  width: 150px;
  height: 50px;
  font-size: 1.2rem;
`;

const Input = styled.input`
  background-color: #e9e9e9;
  border: none;
  font-size: 0.8rem;
  width: 100%;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  text-align: center;
  &::placeholder {
    color: darkgray;
  }
`;
