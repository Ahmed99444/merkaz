import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";

export default function OccupationsLifePartTwo() {
  const [, setUserInfo, lang] = useContext(UpdateDataContext);
  const [onHitList, setOnHitList] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("occupationsLifePartTwo-hitlist");
    const parse = data && JSON.parse(data);

    if (parse) {
      setOnHitList(parse);
    }
  }, []);

  useEffect(() => {
    setUserInfo((prevState) => ({
      ...prevState,
      occupationsLifePartTwo: {
        onHitList,
        dataDescription: "עיסוקי החיים מדרוגים 1-6",
      },
    }));

    localStorage.setItem(
      "occupationsLifePartTwo-hitlist",
      JSON.stringify(onHitList)
    );
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

  const handleDrag = (e) => {};

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
      <p>
        {data[lang].occupations_life_part_two_description_one[0]}{" "}
        <span
          style={{
            color: "#4ba1daff",
            fontWeight: "700",
            fontSize: "1.05rem",
          }}
        >
          {data[lang].occupations_life_part_two_description_one[1]}
        </span>
        {data[lang].occupations_life_part_two_description_one[2]}
        <br />
        <div style={{ marginTop: "20px" }}>
          <span
            style={{
              color: "#f08c13",
              fontWeight: "700",
              fontSize: "1.05rem",
            }}
          >
            {data[lang].occupations_life_part_two_description_two[0]}
          </span>{" "}
          {data[lang].occupations_life_part_two_description_two[1]} <br />
          <span
            style={{
              color: "#f08c13",
              fontWeight: "700",
              fontSize: "1.05rem",
            }}
          >
            {data[lang].occupations_life_part_two_description_two[2]}
          </span>{" "}
          {data[lang].occupations_life_part_two_description_two[3]}
        </div>
      </p>
      <ListContainer>
        <DropTarget
          targetKey="foo"
          onHit={(e) => handleHit(e.dragElem.innerText, e)}
        >
          <BoxContainer>
            <button
              style={{
                color: "#f08c13",
                border: "0.3px solid #b9babaff",
                marginBottom: "5px",
              }}
              onClick={() => handleClick(onHitList[5])}
            >
              X
            </button>
            <Box type="text">{onHitList[5]}</Box>{" "}
            <span
              style={{
                marginLeft: "10px",
                color: "#4ba1daff",
                fontSize: "1.2rem",
              }}
            >
              6
            </span>{" "}
          </BoxContainer>{" "}
        </DropTarget>
        <DropTarget
          targetKey="foo"
          onHit={(e) => handleHit(e.dragElem.innerText, e)}
        >
          <BoxContainer>
            <button
              style={{
                color: "#f08c13",
                border: "0.3px solid #b9babaff",
                marginBottom: "5px",
              }}
              onClick={() => handleClick(onHitList[4])}
            >
              X
            </button>
            <Box type="text">{onHitList[4]}</Box>{" "}
            <span
              style={{
                marginLeft: "10px",
                color: "#4ba1daff",
                fontSize: "1.2rem",
              }}
            >
              5
            </span>{" "}
          </BoxContainer>{" "}
        </DropTarget>
        <DropTarget
          targetKey="foo"
          onHit={(e) => handleHit(e.dragElem.innerText, e)}
        >
          <BoxContainer>
            <button
              style={{
                color: "#f08c13",
                border: "0.3px solid #b9babaff",
                marginBottom: "5px",
              }}
              onClick={() => handleClick(onHitList[3])}
            >
              X
            </button>
            <Box type="text">{onHitList[3]}</Box>{" "}
            <span
              style={{
                marginLeft: "10px",
                color: "#4ba1daff",
                fontSize: "1.2rem",
              }}
            >
              4
            </span>{" "}
          </BoxContainer>{" "}
        </DropTarget>
        <DropTarget
          targetKey="foo"
          onHit={(e) => handleHit(e.dragElem.innerText, e)}
        >
          <BoxContainer>
            {" "}
            <button
              style={{
                color: "#f08c13",
                border: "0.3px solid #b9babaff",
                marginBottom: "5px",
              }}
              onClick={() => handleClick(onHitList[2])}
            >
              X
            </button>
            <Box type="text">{onHitList[2]}</Box>
            <span
              style={{
                marginLeft: "10px",
                color: "#4ba1daff",
                fontSize: "1.2rem",
              }}
            >
              3
            </span>{" "}
          </BoxContainer>{" "}
        </DropTarget>
        <DropTarget
          targetKey="foo"
          onHit={(e) => handleHit(e.dragElem.innerText, e)}
        >
          <BoxContainer>
            {" "}
            <button
              style={{
                color: "#f08c13",
                border: "0.3px solid #b9babaff",
                marginBottom: "5px",
              }}
              onClick={() => handleClick(onHitList[1])}
            >
              X
            </button>
            <Box type="text">{onHitList[1]}</Box>
            <span
              style={{
                marginLeft: "10px",
                color: "#4ba1daff",
                fontSize: "1.2rem",
              }}
            >
              2
            </span>{" "}
          </BoxContainer>{" "}
        </DropTarget>
        <DropTarget
          targetKey="foo"
          onHit={(e) => handleHit(e.dragElem.innerText, e)}
        >
          <BoxContainer>
            {" "}
            <button
              style={{
                color: "#f08c13",
                border: "0.3px solid #b9babaff",
                marginBottom: "5px",
              }}
              onClick={() => handleClick(onHitList[0])}
            >
              X
            </button>
            <Box type="text">{onHitList[0]}</Box>
            <span
              style={{
                marginLeft: "10px",
                color: "#4ba1daff",
                fontSize: "1.2rem",
                marginBottom: "5px",
              }}
            >
              1
            </span>{" "}
          </BoxContainer>{" "}
        </DropTarget>
      </ListContainer>
      <Container>
        {data[lang].occupations_life_part_two_options &&
          data[lang].occupations_life_part_two_options.map((option, id) => (
            <DragDropContainer
              key={id}
              targetKey="foo"
              onDrag={(e) => {
                handleDrag(e);
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  flex-direction: column;
  margin-right: 10px;
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
  margin-left: 10px;
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
  border: 0.01px solid #b9babaff;
  background-color: white;
`;

const ListContainer = styled.div`
  display: flex;
`;
