import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";

export default function ActionToSuccessPartTwo() {
  const [userInfo, setUserInfo, lang] = useContext(UpdateDataContext);
  const [userActionsPartTwo, setUserActionsPartTwo] = useState([]);
  const [arr, setArr] = useState([]);
  const [dataFromPreviousPage, setDataFromPreviousPage] = useState([]);
  const { actionsToSuccess } = userInfo;
  const { userActions } = actionsToSuccess || [];

  useEffect(() => {
    const userActionsData = localStorage.getItem(
      "action-to-success-part-one-data"
    );
    const parseUserActionsData = userActionsData && JSON.parse(userActionsData);
    if (parseUserActionsData) {
      setDataFromPreviousPage([...parseUserActionsData]);
    } else {
      setDataFromPreviousPage([...userActions]);
    }
    const data = localStorage.getItem("action-to-success-part-two-data");
    const parse = data && JSON.parse(data);
    if (parse) {
      setArr([...parse]);
      setUserActionsPartTwo([...parse]);
    }
  }, [userActions]);

  useEffect(() => {
    setUserInfo((prevState) => ({
      ...prevState,
      actionToSuccessPartTwo: {
        userActionsPartTwo: userActionsPartTwo,
      },
    }));
    localStorage.setItem(
      "action-to-success-part-two-data",
      JSON.stringify(userActionsPartTwo)
    );
  }, [userActionsPartTwo, setUserInfo]);

  const handleClickOnNeed = (value, e) => {
    if (e.target.style.backgroundColor === "rgb(183, 201, 226)") {
      e.target.style.backgroundColor = "#84c128ff";
      e.target.style.color = "white";
      setUserActionsPartTwo((prevState) => [...prevState, value]);
    } else if (e.target.style.backgroundColor === "rgb(132, 193, 40)") {
      e.target.style.backgroundColor = "#b7c9e2";
      e.target.style.color = "black";
      setUserActionsPartTwo((prevState) => [
        ...prevState.filter((option) => option !== value),
      ]);
    }
  };

  return (
    <div style={{ marginBottom: "auto" }}>
      <p>
        {data[lang].actionsToSuccess_part_two_description[0]}
        <span
          style={{
            color: "#4ba1daff",
            fontWeight: "700",
            fontSize: "1.5rem",
          }}
        >
          {data[lang].actionsToSuccess_part_two_description[1]}
        </span>{" "}
        {data[lang].actionsToSuccess_part_two_description[2]}
        <span
          style={{
            color: "#4ba1daff",
            fontWeight: "700",
            fontSize: "1.5rem",
          }}
        >
          {data[lang].actionsToSuccess_part_two_description[3]}
        </span>{" "}
        <br />
        {data[lang].actionsToSuccess_part_two_description[4]}
      </p>

      <Container>
        {dataFromPreviousPage &&
          dataFromPreviousPage.map((option, id) =>
            arr.includes(option) ? (
              <Div
                key={id}
                onClick={(e) => handleClickOnNeed(option, e)}
                style={{ backgroundColor: "#84c128ff", color: "white" }}
              >
                {option}
              </Div>
            ) : (
              <Div
                key={id}
                onClick={(e) => handleClickOnNeed(option, e)}
                style={{ backgroundColor: "#b7c9e2" }}
              >
                {option}
              </Div>
            )
          )}
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;

const Div = styled.div`
  width: 120px;
  height: 45px;
  text-align: center;
  font-size: 18px;
  overflow: auto;
  font-style: normal;
  color: "#b9babaff";
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.9;
  }
`;
