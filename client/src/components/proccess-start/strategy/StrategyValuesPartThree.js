import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";
import { Grid } from "../../home-page/About";
import { Div } from "../actions-to-success/ActionToSuccessPartThree";

export default function StrategyValuesPartThree() {
  const [text, setText] = useState(["", "", "", "", ""]);
  const [userInfo, setUserInfo] = useContext(UpdateDataContext);
  const [matches, setMatches] = useState([]);
  const [arr, setArr] = useState([]);
  const [chosen, setChosen] = useState([]);
  const [userValues, setUserValues] = useState([])
  const [userFriendsValues, setUserFriendsValues] = useState([])

  // const { strategyValuesPartTwo, strategyValuesPartOne } = userInfo;
  // const { userFriendsValues } = strategyValuesPartTwo || [];
  // const { userValues } = strategyValuesPartOne || [];

  useEffect(() => {

    const dataPartOne = localStorage.getItem("strategy-part-one-data");
    const parsePartOne = data && JSON.parse(dataPartOne);

    if(parsePartOne) {
        setUserValues(parsePartOne)
    }

    const dataPartTwo = localStorage.getItem("strategy-part-two-data");
    const parsePartTwo = data && JSON.parse(dataPartTwo);
    // const data_chossen = localStorage.getItem("overlappingValues");
    // const parse_chossen = data && JSON.parse(data_chossen);

    if(parsePartTwo) {
      setUserFriendsValues(parsePartTwo)
  }

    
  }, []);

  // let newArr = [];
  // newArr =
  //   userValues &&
  //   userValues.map((value) => {
  //     return (
  //       userFriendsValues.includes(value) &&
  //       setMatches((prevState) => [...prevState, value])
  //     );
  //   });

  useEffect(() => {
    console.log("chosen: ", chosen)
    setUserInfo((prevState) => ({
      ...prevState,
      strategyValuesPartThree: {
        overlappingValues: text,
        chosen,
      },
    }));

    localStorage.setItem("overlappingValues", JSON.stringify(chosen))
  }, [text, setUserInfo, chosen]);

  // const handleChange = (value, index) => {
  //   const newState = [...chosen];
  //   newState[index] = value;
  //   setChosen(newState);
  // };

  const handleClick = (e, index, value) => {

    if (e.target.style.backgroundColor === "rgb(132, 193, 40)") {
      e.target.style.backgroundColor = "rgb(205, 205, 205)";
      e.target.style.color = "black";
      const filterArray = chosen.filter((item) => item !== value);

      setChosen(filterArray);
    } else if (e.target.style.backgroundColor === "rgb(205, 205, 205)") {
      e.target.style.backgroundColor = "#84c128ff";
      e.target.style.color = "white";
      setChosen((prevState) => [...prevState, value]);
    }
  };

  return (
    <Grid style={{ marginTop: "6%" }}>
      <Container>
        <Circle style={{ backgroundColor: "#f08c13" }}>
          <Span>1</Span>
        </Circle>
        <Title style={{ color: "#f08c13" }}>הבחירות שלי</Title>
        {userValues &&
          userValues.map((value, id) => {
            return (
              <Div
                key={id}
                style={{
                  backgroundColor: "#CDCDCD",
                  color: "black",
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
                onClick={(e) => handleClick(e, id, value)}
              >
                {value}
              </Div>
            );
          })}
      </Container>
      <Container>
        <Circle style={{ backgroundColor: "#4faddf" }}>
          <Span>2</Span>
        </Circle>
        <Title style={{ color: "#4faddf" }}>הבחירות של חבריי</Title>
        {userFriendsValues &&
          userFriendsValues.map((value, id) => {
            return (
              <Div
                key={id}
                style={{
                  backgroundColor: "#CDCDCD",
                  color: "black",
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
                onClick={(e) => handleClick(e, id, value)}
              >
                {value}
              </Div>
            );
          })}
      </Container>
      <Container>
        <Circle style={{ backgroundColor: "#8aca28" }}>
          <Span>3</Span>
        </Circle>
        <Title style={{ color: "#8aca28" }}>ערכים חופפים</Title>
        {userValues &&
          userValues.map(
            (matche, id) =>
              userFriendsValues.includes(matche) && (
                <Input
                  style={{ backgroundColor: "#CDCDCD", marginTop: "5px" }}
                  onClick={(e) => handleClick(e, id, matche)}
                  value={matche}
                />
              )
          )}
      </Container>
    </Grid>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: orange;
`;

const Input = styled.input`
  margin-bottom: 10px;
  height: 50px;
  font-style: normal;
  font-size: 1rem;
  color: "#b9babaff";
  border: none;
  background-color: #cdcdcd;
  color: "black";
  &:hover {
    opacity: 0.9;
  }
`;

const Span = styled.span`
  color: white;
  font-size: 1.9rem;
`;

const Title = styled.h2`
  font-weight: 700;
  color: inherit;
`;
