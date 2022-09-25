import React, { useContext, useState } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";

export default function OccupationsLife(props) {
  const [, , lang] = useContext(UpdateDataContext);
  const [showAnswer, setShowAnswer] = useState(false);

  const showAnswerOnClick = () => {
    if (showAnswer === false) {
      setShowAnswer(true);
    } else {
      setShowAnswer(false);
    }
  };

  return (
    <>
      <Container>
        <h2 style={{ color: "#4faddf" }}>{data[lang].ccupations_life_title}</h2>
        <UnorderList>
          <Item style={{ marginRight: "2px" }}>
            <span style={{ fontWeight: "bold", marginRight: "2px" }}>
              {data[lang].ccupations_life_list[0]}
            </span>
            {data[lang].ccupations_life_list[1]}
          </Item>
          <Item>
            <span style={{ fontWeight: "bold" }}>
              {" "}
              {data[lang].ccupations_life_list[2]}
            </span>{" "}
            {data[lang].ccupations_life_list[3]}
          </Item>
          <Item>
            <span style={{ fontWeight: "bold" }}>
              {" "}
              {data[lang].ccupations_life_list[4]}
            </span>{" "}
            {data[lang].ccupations_life_list[5]}
          </Item>
          <Item>
            <span style={{ fontWeight: "bold" }}>
              {" "}
              {data[lang].ccupations_life_list[6]}
            </span>{" "}
            {data[lang].ccupations_life_list[7]}
          </Item>
          <Item>
            <span style={{ fontWeight: "bold" }}>
              {" "}
              {data[lang].ccupations_life_list[8]}
            </span>{" "}
            {data[lang].ccupations_life_list[9]}
          </Item>
          <Item>
            <span style={{ fontWeight: "bold" }}>
              {" "}
              {data[lang].ccupations_life_list[10]}
            </span>{" "}
            {data[lang].ccupations_life_list[11]}
          </Item>
        </UnorderList>
      </Container>
      <Container
        style={{
          backgroundColor: "#4faddf",
          height: "50vh",
          width: "100%",
          padding: "2rem",
        }}
      >
        <Container style={{ flexDirection: "column", fontSize: "1.2rem" }}>
          <h3 style={{ color: "white" }}>
            {data[lang].ccupations_life_question[0]}
          </h3>
          <h4 style={{ color: "white" }}>
            {" "}
            {data[lang].ccupations_life_question[1]}
          </h4>
          <div
            style={{
              color: "white",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={showAnswerOnClick}
          >
            {data[lang].ccupations_life_question[2]}
          </div>
          <div
            style={{ color: "white", fontSize: "1.7rem", fontWeight: "bold" }}
          >
            {showAnswer && data[lang].ccupations_life_question[3]}
          </div>
        </Container>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: auto;
  flex-direction: column;
`;

const UnorderList = styled.ul`
  list-style: none;
  height: 40vh;
  text-align: right;
`;

const Item = styled.li`
  font-size: 1.4rem;

  &::before {
    content: "• ";
    color: #f08c13; /* Change the color */
    font-weight: 800; /* If you want it to be bold */
    display: inline-block; /* Needed to add space between the bullet and the text */
    font-size: 2.5rem;
    width: 1em; /* Also needed for space (tweak if needed) */
    margin-left: 0.2em; /* Also needed for space (tweak if needed) */
  }
`;
