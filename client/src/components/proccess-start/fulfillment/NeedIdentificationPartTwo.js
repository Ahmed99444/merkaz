import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";

export default function NeedIdentificationPartTwo() {
  const [userInfo, setUserInfo, lang] = useContext(UpdateDataContext);
  const [userNeedsPartTwo, setUserNeedsPartTwo] = useState([]);
  const [arr, setArr] = useState([]);
  const [dataFromPreviousPage, setDataFromPreviousPage] = useState([]);

  const { needIdentification } = userInfo;
  const { userNeeds } = needIdentification || [];

  useEffect(() => {
    const data = localStorage.getItem("user-data-needs-part-two");
    const parse = JSON.parse(data);
    const getData = localStorage.getItem("userData");
    const parseData = JSON.parse(getData);
    if (parse) {
      setUserNeedsPartTwo(parse);
      setArr(parse);
    }

    if (parseData) {
      setDataFromPreviousPage(parseData);
    } else {
      setDataFromPreviousPage(userNeeds);
    }
  }, [setUserNeedsPartTwo, setArr, setDataFromPreviousPage, userNeeds]);

  useEffect(() => {
    setUserInfo((prevState) => ({
      ...prevState,
      needIdentificationPartTwo: {
        userNeedsPartTwo: userNeedsPartTwo,
      },
    }));
    localStorage.setItem(
      "user-data-needs-part-two",
      JSON.stringify(userNeedsPartTwo)
    );
  }, [userNeedsPartTwo, setUserInfo]);

  const handleClickOnNeed = (value, e) => {
    if (e.target.style.backgroundColor === "rgb(183, 201, 226)") {
      e.target.style.backgroundColor = "#84c128ff";
      e.target.style.color = "white";
      setUserNeedsPartTwo((prevState) => [...prevState, value]);
    } else if (e.target.style.backgroundColor === "rgb(132, 193, 40)") {
      e.target.style.backgroundColor = "#b7c9e2";
      e.target.style.color = "black";
      setUserNeedsPartTwo((prevState) => [
        ...prevState.filter((option) => option !== value),
      ]);
    }
  };

  return (
    <div style={{ marginBottom: "auto" }}>
      <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
        {data[lang].needIdentification_part_two_paragraph} <br></br>
        {data[lang].needIdentification__part_two_paragraph_before_number}
        <span
          style={{
            color: "#4ba1daff",
            fontWeight: "700",
            fontSize: "1.5rem",
          }}
        >
          {data[lang].needIdentification__part_two_paragraph_number}
        </span>{" "}
        {data[lang].needIdentification__part_two_paragraph_after_number}
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
  grid-template-columns: repeat(6, 0.2fr);
  gap: 10px;
  margin-left: 50px;
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
