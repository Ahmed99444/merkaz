import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";

export default function NeedIdentificationPartThree() {
  const [userInfo, setUserInfo, lang] = useContext(UpdateDataContext);
  const [list, setList] = useState([]);
  const [onHitList, setOnHitList] = useState([]);

  const { needIdentificationPartTwo } = userInfo;
  const { userNeedsPartTwo } = needIdentificationPartTwo || [];

  useEffect(() => {
    const getDataFromLocalStorage = localStorage.getItem("hitlist");
    const parse =
      getDataFromLocalStorage && JSON.parse(getDataFromLocalStorage);

    if (parse) {
      setOnHitList(parse);
    }
  }, [])

  useEffect(() => {
    setUserInfo((prevState) => ({
      ...prevState,
      needIdentificationPartThree: {
        userNeedsPartThree: onHitList,
      },
    }));

    localStorage.setItem("hitlist", JSON.stringify(onHitList))
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

  const handleHit = (value, e, index) => {
    e.containerElem.style.border = "solid 2px #4595d5ff";
    const newState = [...onHitList];
    newState[index] = value;
    setOnHitList(newState);
  };

  const handleClick = (value) => {
    setOnHitList((prevState) => prevState.filter((item) => item !== value));
  };

  return (
    <div style={{ marginBottom: "auto" }}>
      <p style={{  }}>
        {data[lang].needIdentification_part_three_paragraph}{" "}
        <span
          style={{
            color: "#4ba1daff",
            fontWeight: "700",
            fontSize: "1.05rem",
          }}
        >
          {data[lang].needIdentification__part_three_paragraph_number}
        </span>
      </p>
      <p>{data[lang].needIdentification_part_three_description}</p>

      <DropTarget
        targetKey="foo"
        onHit={(e) => handleHit(e.dragElem.innerText, e, 0)}
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
            style={{ color: "red", border: "2px solid #b9babaff" }}
            onClick={() => handleClick(onHitList[0])}
          >
            X
          </button>
        </BoxContainer>{" "}
      </DropTarget>

      <DropTarget
        targetKey="foo"
        onHit={(e) => handleHit(e.dragElem.innerText, e, 1)}
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
            style={{ color: "red", border: "2px solid #b9babaff" }}
            onClick={() => handleClick(onHitList[1])}
          >
            X
          </button>
        </BoxContainer>{" "}
      </DropTarget>
      <DropTarget
        targetKey="foo"
        onHit={(e) => handleHit(e.dragElem.innerText, e, 2)}
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
            style={{ color: "red", border: "2px solid #b9babaff" }}
            onClick={() => handleClick(onHitList[2])}
          >
            X
          </button>
        </BoxContainer>{" "}
      </DropTarget>
      <DropTarget
        targetKey="foo"
        onHit={(e) => handleHit(e.dragElem.innerText, e, 3)}
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
            style={{ color: "red", border: "2px solid #b9babaff" }}
            onClick={() => handleClick(onHitList[3])}
          >
            X
          </button>
        </BoxContainer>{" "}
      </DropTarget>
      <DropTarget
        targetKey="foo"
        onHit={(e) => handleHit(e.dragElem.innerText, e, 4)}
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
            5
          </span>{" "}
          <Box type="text">{onHitList[4]}</Box>
          <button
            style={{ color: "red", border: "2px solid #b9babaff" }}
            onClick={() => handleClick(onHitList[4])}
          >
            X
          </button>
        </BoxContainer>{" "}
      </DropTarget>
      <DropTarget
        targetKey="foo"
        onHit={(e) => handleHit(e.dragElem.innerText, e, 5)}
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
            6
          </span>{" "}
          <Box type="text">{onHitList[5]}</Box>
          <button
            style={{ color: "red", border: "2px solid #b9babaff" }}
            onClick={() => handleClick(onHitList[5])}
          >
            X
          </button>
        </BoxContainer>{" "}
      </DropTarget>
      <DropTarget
        targetKey="foo"
        onHit={(e) => handleHit(e.dragElem.innerText, e, 6)}
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
            7
          </span>{" "}
          <Box type="text">{onHitList[6]}</Box>
          <button
            style={{ color: "red", border: "2px solid #b9babaff" }}
            onClick={() => handleClick(onHitList[6])}
          >
            X
          </button>
        </BoxContainer>{" "}
      </DropTarget>
      <DropTarget
        targetKey="foo"
        onHit={(e) => handleHit(e.dragElem.innerText, e, 7)}
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
            8
          </span>{" "}
          <Box type="text">{onHitList[7]}</Box>
          <button
            style={{ color: "red", border: "2px solid #b9babaff" }}
            onClick={() => handleClick(onHitList[7])}
          >
            X
          </button>
        </BoxContainer>{" "}
      </DropTarget>
      <Container>
        {userNeedsPartTwo &&
          userNeedsPartTwo.map((option, id) => (
            <DragDropContainer
              targetKey="foo"
              onDrag={() => {
                handleDrag(option);
              }}
            >
              <Div
                key={id}
                // onClick={(e) => handleClickOnNeed(option, e)}
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
  width: 150px;
  height: 35px;
  text-align: start;
  font-size: 18px;
  overflow: auto;
  font-style: normal;
  border-radius: 5px;
  color: "#b9babaff";
  border: 2px solid #b9babaff;
  background-color: white;
`;
