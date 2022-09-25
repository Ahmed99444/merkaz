// import "./styles.css";
import React, { useEffect, useState, useContext } from "react";
// load the options file externally for better readability of the component.
// In the chartOptions object, make sure to add "dragData: true" etc.
import { Radar } from "react-chartjs-2";

import "chartjs-plugin-dragdata";

import { UpdateDataContext } from "../../../context/UpdateDataContext";

export default function DoubleRadarChart() {
  const [points, setPoints] = useState([8, 8, 8, 8, 8, 8]);

  // eslint-disable-next-line no-unused-vars
  const [userInfo, setUserInfo, lang] = useContext(UpdateDataContext);

  useEffect(() => {
    let obj = {
      career: points[0],
      familyAndRelationships: points[1],
      friends: points[2],
      leisure: points[3],
      health: points[4],
      studies: points[5],
    };
    obj.career &&
      setUserInfo((prevState) => ({
        ...prevState,
        chart: points,
      }));
  }, [points, setUserInfo]);

  const options = {
    data: {
      labels: [
        "קריירה",
        "משפחה וזוגיות",
        "חברה/חברים",
        "פנאי",
        "בריאות ואורח חיים",
        "לימודים והשכלה",
      ],
      datasets: [
        {
          label: "1",
          data: [6, 5, 7, 6, 6, 5],
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "rgb(54, 162, 235)",
          pointBackgroundColor: "rgb(54, 162, 235)",
          pointBorderColor: "orange",
          pointHoverBackgroundColor: "orange",
          pointHoverBorderColor: "rgb(54, 162, 235)",
        },
        {
          label: "2",
          data: [8, 8, 8, 8, 8, 8],
          backgroundColor: "rgba(137, 202, 40, 0.6)",
          borderColor: "rgba(137, 202, 40, 0.6)",
          pointBackgroundColor: "orange",
          pointBorderColor: "orange",
          pointHoverBackgroundColor: "orange",
          pointHoverBorderColor: "orange",
        },
      ],
    },
    options: {
      // elements: {
      //   line: {
      //     borderWidth: 3,
      //   },
      // },
      responsive: false,
      onHover: function (e) {
        const point = e.chart.getElementsAtEventForMode(
          e,
          "nearest",
          { intersect: true },
          false
        );
        if (point.length) {
          // console.log("point: ", point)
          // let userPointsValue = e.chart.config._config.data.datasets[0].data;
          // setPoints(userPointsValue);
          e.native.target.style.cursor = "grab";
        } else e.native.target.style.cursor = "default";
      },
      plugins: {
        legend: {
          display: false,
        },
        dragData: {
          round: 0,
          showTooltip: false,
          ondragstart: function (e) {
            console.log("start");
          },
          ondrag: function (e, datasetIndex, index, value) {
            e.target.style.cursor = "grabbing";
          },
          ondragend: function (e, datasetIndex, index, value) {
            e.target.style.cursor = "default";
          },
        },
      },
      scales: {
        r: {
          max: 10,
          min: 0,
          stepSize: 1,
          pointLabels: {
            font: {
              size: 16,
              weight: "600",
            },
            color: {
              fontColor: "orange",
              fontSize: "1.5rem",
            },
          },
        },
      },
    },
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Radar
        options={options.options}
        data={options.data}
        style={{ fontSize: "20px", marginRight: "200px" }}
        width={"500"}
        height={"500"}
      />
    </div>
  );
}
