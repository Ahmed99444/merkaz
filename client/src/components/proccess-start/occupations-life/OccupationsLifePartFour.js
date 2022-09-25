import React, { useEffect, useState, useContext } from "react";
// load the options file externally for better readability of the component.
// In the chartOptions object, make sure to add "dragData: true" etc.
import { Line } from "react-chartjs-2";
import "chartjs-plugin-dragdata";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";

// defaults.font.size = "20px"

export default function OccupationsLifePartFour() {
  const [points, setPoints] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [secondLinePoints, setSecondLinePoints] = useState([]);

  const [, setUserInfo, lang] = useContext(UpdateDataContext);

  useEffect(() => {
    let draining = {
      management: points[0],
      finance: points[1],
      marketing: points[2],
      hr: points[3],
      rAndD: points[4],
      operative: points[5],
    };

    const desirable = {
      management: secondLinePoints[0],
      finance: secondLinePoints[1],
      marketing: secondLinePoints[2],
      hr: secondLinePoints[3],
      rAndD: secondLinePoints[4],
      operative: secondLinePoints[5],
    };
    draining.operative &&
      setUserInfo((prevState) => ({
        ...prevState,
        line_chart_draining: points,
        line_chart_desirable: desirable,
        dataDescription: "גרף שמתאר את המצב הרצוי והמצוי",
      }));
  }, [points, setUserInfo, secondLinePoints]);

  const options = {
    data: {
      labels: ["ניהולי", "פיננסי", "שיווק", "כח אדם", "מו''פ", "תפעולי"],
      datasets: [
        {
          label: "רצוי",
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
          data: [1, 3, 5, 2, 4, 9, 7, 8, 6, 10],
          spanGaps: false,
        },
        {
          label: "מצוי",
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
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          spanGaps: false,
        },
        {
          label: "",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(46, 138, 138, 0)",
          borderColor: "rgba(46, 138, 138, 0)", // The main line color
          borderCapStyle: "square",
          borderDash: [], // try [5, 15] for instance
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(46, 138, 138, 0)",
          pointBackgroundColor: "rgba(46, 138, 138, 0)",
          pointHoverBackgroundColor: "rgba(46, 138, 138, 0)",
          pointHoverBorderColor: "rgba(46, 138, 138, 0)",
          data: [0, 1, 3, 5, 2, 4, 9, 7, 8, 6, 10],
          spanGaps: false,
        },
      ],
    },
    options: {
      legend: {
        labels: {
          fontSize: 25
        }
      },
      interaction: {
        mode: "index",
        intersect: false,
      },
      responsive: false,
      onHover: function (e) {
        const point = e.chart.getElementsAtEventForMode(
          e,
          "nearest",
          { intersect: true },
          false
        );
        if (point.length) {
          let userPointsValue = e.chart.config._config.data.datasets[0].data;
          let userSecondLinePointsValue =
            e.chart.config._config.data.datasets[1].data;
          setPoints(userPointsValue);
          setSecondLinePoints(userSecondLinePointsValue);
          e.native.target.style.cursor = "grab";
        } else e.native.target.style.cursor = "default";
      },
      plugins: {
        dragData: {
          round: 0,
          showTooltip: false,
          ondragstart: function (e) {},
          ondrag: function (e, datasetIndex, index, value) {
            e.target.style.cursor = "grabbing";
          },
          ondragend: function (e, datasetIndex, index, value) {
            e.target.style.cursor = "default";
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#4faddf",
            font: {
              size: 21,
              weight: "bold", // 'size' now within object 'font {}'
            },
          },
        },
        y: {
          ticks: {
            font: {
              size: 21,
              weight: "bold", // 'size' now within object 'font {}'
            },
          },
        },
      },
    },
  };

  return (
    <>
      <div
        style={{
          background: "rgb(230,227,227);",
          // eslint-disable-next-line no-dupe-keys
          background:
            "linear-gradient(90deg, rgba(230,227,227,1) 0%, rgba(255,255,255,1) 48%, rgba(230,227,227,1) 100%)",
          width: "102%",
          height: "250px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginBottom: "20px",
          marginTop: "-32px",
          padding: "1rem",
        }}
      >
        <p style={{ marginTop: "50px" }}>
          <span style={{ fontWeight: "bold", color: "#f08c13" }}>
            {data[lang].occupations_life_part_four_description_one[0]}
          </span>
          {data[lang].occupations_life_part_four_description_one[1]}
          <span style={{ fontWeight: "bold", color: "#4faddf" }}>
            {data[lang].occupations_life_part_four_description_one[2]}
          </span>{" "}
          {data[lang].occupations_life_part_four_description_one[3]}
        </p>
        <br />
        <p style={{ marginTop: "-20px" }}>
          <span style={{ fontWeight: "bold", color: "#8aca28" }}>
            {data[lang].occupations_life_part_four_description_one[4]}
          </span>
          {data[lang].occupations_life_part_four_description_one[5]}
          <span style={{ fontWeight: "bold", color: "#4faddf" }}>
            {data[lang].occupations_life_part_four_description_one[6]}
          </span>{" "}
          {data[lang].occupations_life_part_four_description_one[7]}
        </p>
        <p style={{ marginBottom: "50px" }}>
          {data[lang].occupations_life_part_four_description_one[8]}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "auto",
          flexDirection: "column",
        }}
      >
        <Line
          options={options.options}
          data={options.data}
          width={"500"}
          height={"500"}
          style={{ fontSize: "20px", marginRight: "200px" }}
        />
      </div>
    </>
  );
}
