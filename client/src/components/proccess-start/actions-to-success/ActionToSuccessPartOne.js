import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";

export default function ActionToSuccessPartOne() {
  const [, setUserInfo, lang] = useContext(UpdateDataContext);
  const [userActions, setUserActions] = useState([]);
  const [arr, setArr] = useState([]);

  const removeDuplicates = [...new Set(data[lang].actionsToSuccess_options)]
  const newArr = removeDuplicates

  useEffect(() => {
    const data = localStorage.getItem("action-to-success-part-one-data");
    const parse = data && JSON.parse(data);
    if (parse) {
      setArr([...parse]);
      setUserActions([...parse]);
    }
  }, []);

  useEffect(() => {
    setUserInfo((prevState) => ({
      ...prevState,
      actionsToSuccess: {
        userActions: userActions,
      },
    }));

    localStorage.setItem(
      "action-to-success-part-one-data",
      JSON.stringify(userActions)
    );
  }, [userActions, setUserInfo]);

  const handleClickOnNeed = (value, e) => {
    if (e.target.style.backgroundColor === "rgb(183, 201, 226)") {
      e.target.style.backgroundColor = "#84c128ff";
      e.target.style.color = "white";
      setUserActions((prevState) => [...prevState, value]);
    } else if (e.target.style.backgroundColor === "rgb(132, 193, 40)") {
      e.target.style.backgroundColor = "#b7c9e2";
      e.target.style.color = "black";
      setUserActions((prevState) => [
        ...prevState.filter((option) => option !== value),
      ]);
    }
  };

  return (
    <div style={{ marginBottom: "20px", display: "block" }}>
      <p>
        {data[lang].actionsToSuccess_description}
      </p>

      <Container>
        {newArr &&
          newArr.map((option, id) =>
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
