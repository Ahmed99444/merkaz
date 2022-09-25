import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";

export default function NeedIdentificationPartThree() {
  const [userInfo, setUserInfo, lang] = useContext(UpdateDataContext);
  const [list, setList] = useState([]);
  const [onHitList, setOnHitList] = useState([]);

  const { ethicsPartOne } = userInfo;
  const { userValues } = ethicsPartOne || [];

  useEffect(() => {
    const data = localStorage.getItem("hitlist-ethics");
    const parse = data && JSON.parse(data);

    if (parse) {
      setOnHitList(parse);
    }
  }, []);

  useEffect(() => {
    setUserInfo((prevState) => ({
      ...prevState,
      needIdentificationPartThree: {
        userNeedsPartThree: onHitList,
      },
    }));

    localStorage.setItem("hitlist-ethics", JSON.stringify(onHitList));
  }, [onHitList, setUserInfo]);

  const handleClickOnNeed = (value, e) => {
    if (e.target.style.backgroundColor === "rgb(183, 201, 226)") {
      e.target.style.backgroundColor = "#84c128ff";
      e.target.style.color = "white";
    } else if (e.target.style.backgroundColor === "rgb(132, 193, 40)") {
      e.target.style.backgroundColor = "#b7c9e2";
      e.target.style.color = "black";
    }
  };

  const handleDrag = (userNeed) => {
    if (userNeed !== list[list.length - 1]) {
      setList((prevState) => {
        return [...prevState, userNeed];
      });
    } else {
      return false;
    }
  };

  const handleHit = (value, e) => {
    e.containerElem.style.border = "solid 2px #4595d5ff";

    setOnHitList((prevState) => {
      return [...prevState, value];
    });
  };

  const handleClick = (value) => {
    setOnHitList((prevState) => prevState.filter((item) => item !== value));
  };

  return (
    <div style={{ marginBottom: "auto" }}>
      <p style={{ fontSize: "1.05rem" }}>
        {data[lang].ethics_part_two_description[0]}{" "}
        <span
          style={{
            color: "#4ba1daff",
            fontWeight: "700",
            fontSize: "1.05rem",
          }}
        >
          {data[lang].ethics_part_two_description[1]}
        </span>
      </p>

      <DropTarget
        targetKey="foo"
        onHit={(e) => handleHit(e.dragElem.innerText, e)}
      >
        <BoxContainer>
          {" "}
          <span
            style={{
              marginLeft: "10px",
              color: "#4ba1daff",
              fontSize: "1.2rem",
            }}
          >
            1
          </span>{" "}
          <Box type="text">{onHitList[0]}</Box>
          <button
            style={{
              color: "red",
              border: "0.3px solid #b9babaff",
              marginRight: "10px",
            }}
            onClick={() => handleClick(onHitList[0])}
          >
            X
          </button>
        </BoxContainer>{" "}
      </DropTarget>

      <DropTarget
        targetKey="foo"
        onHit={(e) => handleHit(e.dragElem.innerText, e)}
      >
        <BoxContainer>
          {" "}
          <span
            style={{
              marginLeft: "10px",
              color: "#4ba1daff",
              fontSize: "1.2rem",
            }}
          >
            2
          </span>{" "}
          <Box type="text">{onHitList[1]}</Box>
          <button
            style={{
              color: "red",
              border: "0.3px solid #b9babaff",
              marginRight: "10px",
            }}
            onClick={() => handleClick(onHitList[1])}
          >
            X
          </button>
        </BoxContainer>{" "}
      </DropTarget>
      <DropTarget
        targetKey="foo"
        onHit={(e) => handleHit(e.dragElem.innerText, e)}
      >
        <BoxContainer>
          {" "}
          <span
            style={{
              marginLeft: "10px",
              color: "#4ba1daff",
              fontSize: "1.2rem",
            }}
          >
            3
          </span>{" "}
          <Box type="text">{onHitList[2]}</Box>
          <button
            style={{
              color: "red",
              border: "0.3px solid #b9babaff",
              marginRight: "10px",
            }}
            onClick={() => handleClick(onHitList[2])}
          >
            X
          </button>
        </BoxContainer>{" "}
      </DropTarget>
      <DropTarget
        targetKey="foo"
        onHit={(e) => handleHit(e.dragElem.innerText, e)}
      >
        <BoxContainer>
          {" "}
          <span
            style={{
              marginLeft: "10px",
              color: "#4ba1daff",
              fontSize: "1.2rem",
            }}
          >
            4
          </span>{" "}
          <Box type="text">{onHitList[3]}</Box>
          <button
            style={{
              color: "red",
              border: "0.3px solid #b9babaff",
              marginRight: "10px",
            }}
            onClick={() => handleClick(onHitList[3])}
          >
            X
          </button>
        </BoxContainer>{" "}
      </DropTarget>
      <Container>
        {userValues &&
          userValues.map((option, id) => (
            <DragDropContainer
              targetKey="foo"
              onDrag={() => {
                handleDrag(option);
              }}
            >
              <Div
                key={id}
                onClick={(e) => handleClickOnNeed(option, e)}
                style={{
                  backgroundColor: "#84c128ff",
                  color: "white",
                  fontWeight: "500",
                }}
              >
                {option}
              </Div>
            </DragDropContainer>
          ))}
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Div = styled.p`
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

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 35px;
  text-align: start;
  font-size: 14px;
  overflow: auto;
  font-style: normal;
  border-radius: 5px;
  color: "#b9babaff";
  border: 1px solid #b9babaff;
  background-color: white;
`;
