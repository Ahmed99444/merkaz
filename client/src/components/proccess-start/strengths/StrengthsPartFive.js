import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";
export default function StrengthsPartFive() {
  const [userInfo, setUserInfo, lang] = useContext(UpdateDataContext);

  const { strengthsPartFour } = userInfo;
  const { todayRate, tomorrowRate, pastRate } = strengthsPartFour || [];
  const defaultArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const { arrOfStrengths } = strengthsPartFour || defaultArr;

  const options = {
    data: {
      labels: [
        arrOfStrengths && arrOfStrengths[0],
        arrOfStrengths && arrOfStrengths[2],
        arrOfStrengths && arrOfStrengths[4],
        arrOfStrengths && arrOfStrengths[6],
        arrOfStrengths && arrOfStrengths[8],
        arrOfStrengths && arrOfStrengths[10],
        arrOfStrengths && arrOfStrengths[12],
      ],
      datasets: [
        {
          label: "עתיד",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgb(240, 140, 19)",
          borderColor: "rgb(240, 140, 19)", // The main line color
          borderCapStyle: "square",
          borderDash: [], // try [5, 15] for instance
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(240, 140, 19)",
          pointBackgroundColor: "rgb(240, 140, 19)",
          pointBorderWidth: 1,
          pointHoverRadius: 8,
          pointHoverBackgroundColor: "rgb(240, 140, 19)",
          pointHoverBorderColor: "rgb(240, 140, 19)",
          pointHoverBorderWidth: 2,
          pointRadius: 4,
          pointHitRadius: 10,
          // notice the gap in the data and the spanGaps: true
          data: tomorrowRate && tomorrowRate.map((rate) => rate),
          spanGaps: true,
        },
        {
          label: "עבר",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#8aca28",
          borderColor: "#8aca28", // The main line color
          borderCapStyle: "square",
          borderDash: [], // try [5, 15] for instance
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#8aca28",
          pointBackgroundColor: "#8aca28",
          pointBorderWidth: 1,
          pointHoverRadius: 8,
          pointHoverBackgroundColor: "#8aca28",
          pointHoverBorderColor: "#8aca28",
          pointHoverBorderWidth: 2,
          pointRadius: 4,
          pointHitRadius: 10,
          // notice the gap in the data and the spanGaps: true
          data: pastRate && pastRate.map((rate) => rate),
          spanGaps: true,
        },
        {
          label: "הווה",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#4faddf",
          borderColor: "#4faddf", // The main line color
          borderCapStyle: "square",
          borderDash: [], // try [5, 15] for instance
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#4faddf",
          pointBackgroundColor: "#4faddf",
          pointBorderWidth: 1,
          pointHoverRadius: 8,
          pointHoverBackgroundColor: "#4faddf",
          pointHoverBorderColor: "#4faddf",
          pointHoverBorderWidth: 2,
          pointRadius: 4,
          pointHitRadius: 10,
          // notice the gap in the data and the spanGaps: true
          data: todayRate && todayRate.map((rate) => rate),
          spanGaps: true,
        },
      ],
    },
    options: {
      interaction: {
        mode: "index",
        intersect: false,
      },
      responsive: false,
      scales: {
        x: {
          ticks: {
            color: "#4faddf",
            font: {
              size: 18,
              weight: "bold", // 'size' now within object 'font {}'
            },
          },
        },
        y: {
          ticks: {
            font: {
              size: 18,
              weight: "bold", // 'size' now within object 'font {}'
            },
          },
        },
      },
    },
  };

  return (
    <Container>
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
          <Td>{arrOfStrengths && arrOfStrengths[0]}</Td>
          <Td>{arrOfStrengths && arrOfStrengths[1]}</Td>
        </tr>
        <tr>
          <Td>2</Td>
          <Td>{arrOfStrengths && arrOfStrengths[2]}</Td>
          <Td>{arrOfStrengths && arrOfStrengths[3]}</Td>
        </tr>
        <tr>
          <Td>3</Td>
          <Td>{arrOfStrengths && arrOfStrengths[4]}</Td>
          <Td>{arrOfStrengths && arrOfStrengths[5]}</Td>
        </tr>
        <tr>
          <Td>4</Td>
          <Td>{arrOfStrengths && arrOfStrengths[6]}</Td>
          <Td>{arrOfStrengths && arrOfStrengths[7]}</Td>
        </tr>
        <tr>
          <Td>5</Td>
          <Td>{arrOfStrengths && arrOfStrengths[8]}</Td>
          <Td>{arrOfStrengths && arrOfStrengths[9]}</Td>
        </tr>
        <tr>
          <Td>6</Td>
          <Td>{arrOfStrengths && arrOfStrengths[10]}</Td>
          <Td>{arrOfStrengths && arrOfStrengths[11]}</Td>
        </tr>
      </Table>
      <Line
        options={options.options}
        data={options.data}
        width={"500"}
        height={"500"}
        style={{ fontSize: "20px", marginRight: "200px" }}
      />
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
