import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";

export default function StrengthsPartThree() {
  const [arr, setArr] = useState([]);
  const [, setUserInfo, lang] = useContext(UpdateDataContext);

  useEffect(() => {
    const data = localStorage.getItem("arrOfStrengths")
    const parse = data &&  JSON.parse(data)

    if(parse) {
      setArr(parse)
    }
  }, [])

  useEffect(() => {
    setUserInfo((prevState) => ({
      ...prevState,
      strengthsPartThree: {
        arrOfStrengths: arr || [],
      },
    }));

    localStorage.setItem("arrOfStrengths", JSON.stringify(arr))
  }, [setUserInfo, arr]);

  const handleChange = (value, index) => {
    let newState = [...arr];
    newState[index] = value;
    setArr([...newState]);
  };

  const handleClick = (value, index, style) => {
    if (style.color === "") {
      style.color = "#84c128ff";
      style.fontWeight = "600";
      handleChange(value, index);
    } else {
      style.color = "";
      style.fontWeight = "";
      handleChange(value, index);
    }
  };

  return (
    <div style={{ marginBottom: "auto", overflow: "auto" }}>
      <Table>
        <tr>
          {data[lang].strengths_part_three_table_titles.map((title, id) => {
            return (
              <Th key={id}>
                <div style={{ margin: "0 auto", fontSize: "0.9rem" }}>
                  {title}
                </div>
              </Th>
            );
          })}
        </tr>
        <tr>
          <Td>
            <Input
              placeholder={
                data[lang].strengths_part_three_table_plcaeholders[0]
              }
              value={arr[0]}
              onChange={(e) => handleChange(e.target.value, 0)}
            />{" "}
          </Td>
          <Td>
            <Input
              placeholder={
                data[lang].strengths_part_three_table_plcaeholders[1]
              }
              value={arr[1]}
              onChange={(e) => handleChange(e.target.value, 1)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              placeholder={
                data[lang].strengths_part_three_table_plcaeholders[2]
              }
              value={arr[2]}
              onChange={(e) => handleChange(e.target.value, 2)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              placeholder={
                data[lang].strengths_part_three_table_plcaeholders[3]
              }
              value={arr[3]}
              onChange={(e) => handleChange(e.target.value, 3)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              placeholder={
                data[lang].strengths_part_three_table_plcaeholders[4]
              }
              value={arr[4]}
              onChange={(e) => handleChange(e.target.value, 4)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              placeholder={
                data[lang].strengths_part_three_table_plcaeholders[6]
              }
              value={arr[5]}
              onChange={(e) => handleChange(e.target.value, 5)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              placeholder={
                data[lang].strengths_part_three_table_plcaeholders[8]
              }
              value={arr[6]}
              onChange={(e) => handleChange(e.target.value, 6)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              placeholder={`${data[lang].strengths_part_three_table_plcaeholders[11]}, ${data[lang].strengths_part_three_table_plcaeholders[12]}`}
              value={arr[7]}
              onChange={(e) => handleChange(e.target.value, 7)}
            />{" "}
          </Td>{" "}
          <Td>
            <div
              value={arr[9]}
              onClick={(e) => handleClick(e.target.value, 9, e.target.style)}
              style={{ cursor: "pointer", fontSize: "16px" }}
            >
              {data[lang].strengths_part_three_communications_styles[0]}
            </div>
          </Td>{" "}
        </tr>
        <tr>
          <Td>
            <Input
              value={arr[12]}
              onChange={(e) => handleChange(e.target.value, 12)}
            />{" "}
          </Td>
          <Td>
            <Input
              value={arr[13]}
              onChange={(e) => handleChange(e.target.value, 13)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[14]}
              onChange={(e) => handleChange(e.target.value, 14)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[15]}
              onChange={(e) => handleChange(e.target.value, 15)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[16]}
              onChange={(e) => handleChange(e.target.value, 16)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[17]}
              onChange={(e) => handleChange(e.target.value, 17)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[18]}
              onChange={(e) => handleChange(e.target.value, 18)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[19]}
              onChange={(e) => handleChange(e.target.value, 19)}
            />{" "}
          </Td>{" "}
          <Td>
            <div
              value={arr[21]}
              onClick={(e) => handleClick(e.target.value, 21, e.target.style)}
              style={{ cursor: "pointer", fontSize: "16px" }}
            >
              {data[lang].strengths_part_three_communications_styles[1]}
            </div>
          </Td>{" "}
        </tr>{" "}
        <tr>
          <Td>
            <Input
              value={arr[24]}
              onChange={(e) => handleChange(e.target.value, 24)}
            />{" "}
          </Td>
          <Td>
            <Input
              value={arr[25]}
              onChange={(e) => handleChange(e.target.value, 25)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[26]}
              onChange={(e) => handleChange(e.target.value, 26)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[27]}
              onChange={(e) => handleChange(e.target.value, 27)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[28]}
              onChange={(e) => handleChange(e.target.value, 28)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[29]}
              onChange={(e) => handleChange(e.target.value, 29)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[30]}
              onChange={(e) => handleChange(e.target.value, 30)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[31]}
              onChange={(e) => handleChange(e.target.value, 31)}
            />{" "}
          </Td>{" "}
          <Td>
            <div
              value={arr[33]}
              onClick={(e) => handleClick(e.target.value, 33, e.target.style)}
              style={{ cursor: "pointer", fontSize: "16px" }}
            >
              {data[lang].strengths_part_three_communications_styles[2]}
            </div>
          </Td>{" "}
        </tr>{" "}
        <tr>
          <Td>
            <Input
              value={arr[36]}
              onChange={(e) => handleChange(e.target.value, 36)}
            />{" "}
          </Td>
          <Td>
            <Input
              value={arr[37]}
              onChange={(e) => handleChange(e.target.value, 37)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[38]}
              onChange={(e) => handleChange(e.target.value, 38)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[39]}
              onChange={(e) => handleChange(e.target.value, 39)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[40]}
              onChange={(e) => handleChange(e.target.value, 40)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[41]}
              onChange={(e) => handleChange(e.target.value, 41)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[42]}
              onChange={(e) => handleChange(e.target.value, 42)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[43]}
              onChange={(e) => handleChange(e.target.value, 43)}
            />{" "}
          </Td>{" "}
          <Td>
            <div
              value={arr[45]}
              onClick={(e) => handleClick(e.target.value, 45, e.target.style)}
              style={{ cursor: "pointer", fontSize: "16px" }}
            >
              {data[lang].strengths_part_three_communications_styles[3]}
            </div>
          </Td>{" "}
        </tr>{" "}
        <tr>
          <Td>
            <Input
              value={arr[48]}
              onChange={(e) => handleChange(e.target.value, 48)}
            />{" "}
          </Td>
          <Td>
            <Input
              value={arr[49]}
              onChange={(e) => handleChange(e.target.value, 49)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[50]}
              onChange={(e) => handleChange(e.target.value, 50)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[51]}
              onChange={(e) => handleChange(e.target.value, 51)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[52]}
              onChange={(e) => handleChange(e.target.value, 52)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[53]}
              onChange={(e) => handleChange(e.target.value, 53)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[54]}
              onChange={(e) => handleChange(e.target.value, 54)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[55]}
              onChange={(e) => handleChange(e.target.value, 55)}
            />{" "}
          </Td>{" "}
          <Td>
            <div
              value={arr[57]}
              onClick={(e) => handleClick(e.target.value, 57, e.target.style)}
              style={{ cursor: "pointer", fontSize: "16px" }}
            >
              {data[lang].strengths_part_three_communications_styles[4]}
            </div>
          </Td>{" "}
        </tr>{" "}
        <tr>
          <Td>
            <Input
              value={arr[60]}
              onChange={(e) => handleChange(e.target.value, 60)}
            />{" "}
          </Td>
          <Td>
            <Input
              value={arr[61]}
              onChange={(e) => handleChange(e.target.value, 61)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[62]}
              onChange={(e) => handleChange(e.target.value, 62)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[63]}
              onChange={(e) => handleChange(e.target.value, 63)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[64]}
              onChange={(e) => handleChange(e.target.value, 64)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[65]}
              onChange={(e) => handleChange(e.target.value, 65)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[66]}
              onChange={(e) => handleChange(e.target.value, 66)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[67]}
              onChange={(e) => handleChange(e.target.value, 67)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[69]}
              onClick={(e) => handleChange(e.target.value, 69, e.target.style)}
            />{" "}
          </Td>{" "}
        </tr>{" "}
        <tr>
          <Td>
            <Input
              value={arr[72]}
              onChange={(e) => handleChange(e.target.value, 72)}
            />{" "}
          </Td>
          <Td>
            <Input
              value={arr[73]}
              onChange={(e) => handleChange(e.target.value, 73)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[74]}
              onChange={(e) => handleChange(e.target.value, 74)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[75]}
              onChange={(e) => handleChange(e.target.value, 75)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[76]}
              onChange={(e) => handleChange(e.target.value, 76)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[77]}
              onChange={(e) => handleChange(e.target.value, 77)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[78]}
              onChange={(e) => handleChange(e.target.value, 78)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[79]}
              onChange={(e) => handleChange(e.target.value, 79)}
            />{" "}
          </Td>{" "}
          <Td>
            <Input
              value={arr[81]}
              onChange={(e) => handleChange(e.target.value, 81)}
            />{" "}
          </Td>{" "}
        </tr>
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
  width: 300px;
  font-size: 1rem;
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

  &::placeholder {
    color: darkgray;
  }
`;
