import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";

export default function NeedIdentification() {
  const [, setUserInfo, lang] = useContext(UpdateDataContext);
  const [userNeeds, setUserNeeds] = useState([]);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("userData");
    const parse = JSON.parse(data);
    if (parse) {
      parse.length === 20 && setArr([...parse]);
      parse.length === 20 && setUserNeeds([...parse]);
    }
  }, [setArr, setUserNeeds]);

  useEffect(() => {
    setUserInfo((prevState) => ({
      ...prevState,
      needIdentification: {
        userNeeds: userNeeds,
      },
    }));
    localStorage.setItem("userData", JSON.stringify(userNeeds));
  }, [userNeeds, setUserInfo]);

  const handleClickOnNeed = (value, e) => {
    if (e.target.style.backgroundColor === "rgb(183, 201, 226)") {
      e.target.style.backgroundColor = "#84c128ff";
      e.target.style.color = "white";
      setUserNeeds((prevState) => [...prevState, value]);
    } else if (e.target.style.backgroundColor === "rgb(132, 193, 40)") {
      e.target.style.backgroundColor = "#b7c9e2";
      e.target.style.color = "black";
      setUserNeeds((prevState) => [
        ...prevState.filter((option) => option !== value),
      ]);
    }
  };

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ color: "#5f6062ff", marginBottom: "-15px" }}>
          {data[lang].needIdentification_title}
        </h2>
        <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          {data[lang].needIdentification_paragraph}{" "}
          <span
            style={{
              color: "#4ba1daff",
              fontWeight: "700",
              fontSize: "1.5rem",
            }}
          >
            {data[lang].needIdentification_paragraph_number}
          </span>
          {data[lang].needIdentification_paragraph_after_number}
        </p>
      </div>

      <Container>
        {data[lang].needIdentification_options &&
          data[lang].needIdentification_options.map((option, id) =>
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
    </>
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
