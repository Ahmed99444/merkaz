import React, { useEffect, useState, useContext } from "react";
// load the options file externally for better readability of the component.
// In the chartOptions object, make sure to add "dragData: true" etc.
import { Radar } from "react-chartjs-2";
import "chartjs-plugin-dragdata";

import { UpdateDataContext } from "../../context/UpdateDataContext";
import data from "../../translations/trans";

export default function RadarChart() {
  const [labels, setLabels] = useState([0, 0, 0]);
  const [dataSet, setDataSet] = useState(["red", "green", "blue"]);
  const [points, setPoints] = useState({});

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
          label: "",
          data: [6, 5, 7, 6, 6, 5],
          backgroundColor: "rgba(0, 153, 247,.5)",
          borderColor: "rgba(0, 153, 247,1)",
          pointBackgroundColor: "orange",
          pointBorderColor: "orange",
        },
      ],
    },
    options: {
      responsive: false,
      onHover: (e) => {
        const point =
          e &&
          e.chart.getElementsAtEventForMode(
            e,
            "nearest",
            { intersect: true },
            false
          );
        if (point.length) {
          let userPointsValue = e.chart.config._config.data.datasets[0].data;
          setPoints(userPointsValue);
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
            console.log(e);
          },
          ondrag: function (e, datasetIndex, index, value) {
            e.target.style.cursor = "grabbing";
            console.log(e, datasetIndex, index, value);
          },
          ondragend: function (e, datasetIndex, index, value) {
            e.target.style.cursor = "default";
            console.log(datasetIndex, index, value);
          },
        },
      },
      scales: {
        r: {
          dragData: true,
          max: 10,
          min: 0,
          stepSize: 1,
          pointLabels: {
            font: {
              size: 14,
            },
            color: {
              fontColor: "orange",
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
        marginBottom: "10%",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "400px",
          height: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            width: "33%",
            fontSize: "13px",
            marginRight: "auto",
            marginLeft: "20px",
          }}
        >
          {data[lang].chart_description}
        </p>
      </div>
      <Radar
        options={options.options}
        data={options.data}
        width={"500"}
        height={"500"}
        style={{ fontSize: "20px", marginRight: "200px" }}
      />
    </div>
  );
}
