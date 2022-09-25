import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";
import { Input } from "../Character";

export default function ValvesOfLifePartTwo() {
  const [userInfo, setUserInfo, lang] = useContext(UpdateDataContext);
  const [userAnswers, setUserAnswers] = useState({});
  const [localeSum, setLocaleSum] = useState([{}]);

  const { ValvesOfLife } = userInfo;
  const { arr, sum } = ValvesOfLife || localeSum || [];

  // useEffect(() => {
  //   const sumData = localStorage.getItem("sum");
  //   const parseSum = sumData && JSON.parse(sumData);
  //   if (parseSum) {
  //     setLocaleSum([...parseSum]);
  //   } else {
  //     setLocaleSum(sum)
  //   }
  // }, [sum])

  let duplicateOfSortedSum
  let sortedSum 
  if (sum) {
    sortedSum = sum.sort((a, b) => {
      
      if (a.value === b.value) return 0;
      return a.value < b.value ? 1 : -1;
    });
    // sortedSum = sortedSum.map((obj) => obj && Object.keys(obj));
    sortedSum.length = 4
  } 


  useEffect(() => {
    setUserInfo((prevState) => ({
      ...prevState,
      ValvesOfLifePartTwo: {
        userAnswers,
        sortedSum,
        duplicateOfSortedSum
      },
    }));

    localStorage.setItem('sortedSum-valves', JSON.stringify(duplicateOfSortedSum))
  }, [setUserInfo, userAnswers, sortedSum, duplicateOfSortedSum]);

  const handleChange = (value, index, style) => {
    if (index === 2) {
      style.backgroundColor === "rgb(138, 202, 40)"
        ? (style.backgroundColor = "white")
        : (style.backgroundColor = "#8aca28");
      setUserAnswers((prevState) => ({
        ...prevState,
        [index]: value,
      }));
    } else {
      setUserAnswers((prevState) => ({
        ...prevState,
        [index]: value,
      }));
    }
  };

  return (
    <Container style={{ marginBottom: "auto" }}>
      <BlueSideList>
        <h3 style={{ color: "white", marginTop: "50px" }}>
          {data[lang].valves_of_life_part_two_list_title}
        </h3>
        {sortedSum &&
          sortedSum.map((valveName, id) => (
            <Container
              key={id}
              style={{
                flexDirection: "row",
                fontSize: "18px",
                marginTop: "25px",
              }}
            >
              <span style={{ color: "white", marginLeft: "10px" }}>
                {id + 1}
              </span>{" "}
              {"  "}
              <Box>{valveName.name[0]}</Box>
            </Container>
          ))}
      </BlueSideList>
      <Container style={{ display: "inline" }}>
        <label>
          <div
            style={{
              textAlign: "right",
              marginBottom: "-15px",
              fontSize: "18px",
            }}
          >
            {" "}
            {data[lang].valves_of_life_part_two_labels[0]}
          </div>
        </label>
        <br />
        <Input
          style={{ width: "500px" }}
          value={userAnswers[0]}
          onChange={(e) => handleChange(e.target.value, 0)}
        />
      </Container>
      {/* <Container style={{ display: "inline", marginTop: "15px" }}>
        <label>
          <div
            style={{
              textAlign: "right",
              marginBottom: "-15px",
              fontSize: "15px",
            }}
          >
            {" "}
            {data[lang].valves_of_life_part_two_labels[1]}
          </div>
        </label>
        <br />
        <Input
          style={{ width: "500px" }}
          value={userAnswers[1]}
          onChange={(e) => handleChange(e.target.value, 1)}
        />
      </Container> */}
      <Container style={{ display: "inline", marginTop: "15px" }}>
        <label>
          <div
            style={{
              textAlign: "right",
              marginBottom: "-15px",
              fontSize: "18px",
            }}
          >
            {" "}
            {data[lang].valves_of_life_part_two_labels[2]}
          </div>
        </label>
        <br />
        <Container style={{ flexDirection: "row" }}>
          <SmallSquare onClick={(e) => handleChange("כן", 2, e.target.style)}>
            {data[lang].valves_of_life_part_two_labels[3]}
          </SmallSquare>

          <SmallSquare onClick={(e) => handleChange("לא", 2, e.target.style)}>
            {data[lang].valves_of_life_part_two_labels[4]}
          </SmallSquare>
        </Container>
        <label>
          <div
            style={{
              textAlign: "right",
              marginBottom: "-15px",
              fontSize: "18px",
            }}
          >
            {" "}
            {data[lang].valves_of_life_part_two_labels[5]}
          </div>
        </label>
        <br />
        <Input
          style={{ width: "500px" }}
          value={userAnswers[3]}
          onChange={(e) => handleChange(e.target.value, 3)}
        />
        {/* <Container style={{ display: "inline", marginTop: "35px" }}>
          <label>
            <div
              style={{
                textAlign: "right",
                marginBottom: "-15px",
                fontSize: "15px",
              }}
            >
              {" "}
              {data[lang].valves_of_life_part_two_labels[1]}
            </div>
          </label>
          <br />
          <Input
            style={{ width: "500px" }}
            value={userAnswers[3]}
            onChange={(e) => handleChange(e.target.value, 3)}
          />
        </Container> */}
      </Container>
      <Container
        style={{ display: "inline", marginTop: "15px", marginLeft: "50px" }}
      >
        <label>
          <div
            style={{
              textAlign: "right",
              marginBottom: "-15px",
              fontSize: "18px",
              marginRight: "50px",
              width: "400px"
            }}
          >
            {" "}
            {data[lang].valves_of_life_part_two_labels[6]}
          </div>
        </label>
        <br />
        <Container>
          <span style={{ fontSize: "18px" }}>
            1{" "}
            <Input
              style={{ width: "500px", marginRight: "20px" }}
              value={userAnswers[4]}
              onChange={(e) => handleChange(e.target.value, 4)}
            />
          </span>
          <span style={{ fontSize: "18px" }}>
            2{" "}
            <Input
              style={{ width: "500px", marginRight: "20px" }}
              value={userAnswers[5]}
              onChange={(e) => handleChange(e.target.value, 5)}
            />
          </span>
        </Container>
      </Container>
      <Container style={{ display: "inline" }}>
        <label>
          <div
            style={{
              textAlign: "right",
              marginBottom: "-15px",
              fontSize: "18px",
            }}
          >
            {" "}
            {data[lang].valves_of_life_part_two_labels[7]}
          </div>
        </label>
        <br />
        <Input
          style={{ width: "500px" }}
          value={userAnswers[6]}
          onChange={(e) => handleChange(e.target.value, 6)}
        />
      </Container>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
`;

const BlueSideList = styled.div`
  position: absolute;
  overflow: hidden;
  width: 20%;
  height: 675px;
  padding: 1rem;
  right: 0;
  bottom: 0;
  top: 142px;
  background-color: #4595d5ff;
`;

const Box = styled.div`
  background-color: white;
  padding: 1rem;
  font-size: 18px;
  border-radius: 5px;
  width: 150px;
`;

const SmallSquare = styled.div`
  width: 75px;
  height: 45px;
  text-align: start;
  font-size: 18px;
  overflow: auto;
  font-style: normal;
  margin-bottom: 20px;
  border-radius: 5px;
  color: "#b9babaff";
  border: 1px solid #b9babaff;
  background-color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
`;
