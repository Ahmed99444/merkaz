import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import {
  DragDropContainer,
  DropTarget,
  customDragElement,
} from "react-drag-drop-container";

import data from "../../../translations/trans";
import { UpdateDataContext } from "../../../context/UpdateDataContext";
import { Container, Grid } from "../../home-page/About";
import { Div } from "../actions-to-success/ActionToSuccessPartThree";

const intialState = {
  first: ["...", "...", "...", "..."],
  second: ["..", "...", "...", "..."],
};

export default function WorldviewPartTwo() {
  const [userInfo, setUserInfo, lang] = useContext(UpdateDataContext);
  const [list, setList] = useState([]);
  const [secondList, setSecondList] = useState([]);
  const [hitList, setHitList] = useState(intialState);
  const [onHitSecondList, setOnHitSecondList] = useState(intialState);

  const { worldview_part_one } = userInfo;
  const { options } = worldview_part_one || [];

  useEffect(() => {
    const delaying = [
      list[0] || null,
      list[1] || null,
      list[2] || null,
      list[3] || null,
    ];
    const promoter = [
      list[4] || null,
      list[5] || null,
      list[6] || null,
      list[7] || null,
    ];
    setUserInfo((prevState) => ({
      ...prevState,
      worldview_part_two: {
        delaying: delaying,
        promoter: promoter,
        dataDescription: " שתי רשימות של תפיסות עולם שמעכבות ומקדמות",
      },
    }));
  }, [list, setUserInfo]);

  const handleDrag = (event) => {};

  const handleHit = (value, e) => {
    e.containerElem.style.border = "solid 2px #4595d5ff";

    const elementId = e.srcElement.id;
    setList((prevState) => {
      prevState[elementId] = value;
      return [...prevState];
    });
  };

  const removeItem = (index) => {
    setList((prevState) => {
      prevState[index] = "";
      return [...prevState];
    });
  };

  return (
    <div style={{ marginBottom: "auto" }}>
      <Container style={{ flexDirection: "column" }}>
        <p>{data[lang].worldview_part_two_title}</p>
        <DropTarget
          targetKey="foo"
          onHit={(e) => handleHit(e.dragElem.innerText, e)}
        >
          <Container style={{ flexDirection: "row" }}>
            <Container
              style={{ flexDirection: "column", marginBottom: "auto" }}
            >
              <Div style={{ width: "400px" }}>
                {data[lang].worldview_part_two__lists_title[0]}
              </Div>
              <BoxContainer style={{ marginLeft: "32px" }}>
                {" "}
                <button
                  style={{
                    color: "#f08c13",
                    border: "0.3px solid #b9babaff",
                    fontWeight: "bold",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => removeItem(0)}
                >
                  X
                </button>
                <Box type="text" id="0">
                  {list[0]}
                </Box>
              </BoxContainer>{" "}
              <BoxContainer style={{ marginLeft: "32px", marginTop: "-15px" }}>
                <button
                  style={{
                    color: "#f08c13",
                    border: "0.3px solid #b9babaff",
                    marginLeft: "10px",
                    cursor: "pointer",

                    fontWeight: "bold",
                  }}
                  onClick={() => removeItem(1)}
                >
                  X
                </button>
                <Box type="text" id="1">
                  {list[1]}
                </Box>
              </BoxContainer>{" "}
              <BoxContainer style={{ marginLeft: "32px", marginTop: "-15px" }}>
                <button
                  style={{
                    color: "#f08c13",
                    border: "0.3px solid #b9babaff",
                    marginLeft: "10px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  onClick={() => removeItem(2)}
                >
                  X
                </button>
                <Box type="text" id="2">
                  {list[2]}
                </Box>
              </BoxContainer>{" "}
              <BoxContainer style={{ marginLeft: "32px", marginTop: "-15px" }}>
                {" "}
                <button
                  style={{
                    color: "#f08c13",
                    border: "0.3px solid #b9babaff",
                    marginLeft: "10px",
                    cursor: "pointer",

                    fontWeight: "bold",
                  }}
                  onClick={() => removeItem(3)}
                >
                  X
                </button>
                <Box type="text" id="3">
                  {list[3]}
                </Box>
              </BoxContainer>{" "}
            </Container>
            <Container style={{ flexDirection: "column" }}>
              <Div style={{ width: "400px" }}>
                {data[lang].worldview_part_two__lists_title[1]}
              </Div>
              <BoxContainer style={{ marginRight: "32px" }}>
                <Box type="text" id="4">
                  {list[4]}
                </Box>
                <button
                  style={{
                    color: "#f08c13",
                    border: "0.3px solid #b9babaff",
                    marginRight: "10px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  onClick={() => removeItem(4)}
                >
                  X
                </button>
              </BoxContainer>{" "}
              <BoxContainer style={{ marginRight: "32px", marginTop: "-15px" }}>
                <Box type="text" id="5">
                  {list[5]}
                </Box>
                <button
                  style={{
                    color: "#f08c13",
                    border: "0.3px solid #b9babaff",
                    marginRight: "10px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  onClick={() => removeItem(5)}
                >
                  X
                </button>
              </BoxContainer>{" "}
              <BoxContainer style={{ marginRight: "32px", marginTop: "-15px" }}>
                <Box type="text" id="6">
                  {list[6]}
                </Box>
                <button
                  style={{
                    color: "#f08c13",
                    border: "0.3px solid #b9babaff",
                    fontWeight: "bold",
                    cursor: "pointer",

                    marginRight: "10px",
                  }}
                  onClick={() => removeItem(6)}
                >
                  X
                </button>
              </BoxContainer>{" "}
              <BoxContainer style={{ marginRight: "32px", marginTop: "-15px" }}>
                <Box type="text" id="7">
                  {list[7]}
                </Box>
                <button
                  style={{
                    color: "#f08c13",
                    border: "0.3px solid #b9babaff",
                    marginRight: "10px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  onClick={() => removeItem(7)}
                >
                  X
                </button>
              </BoxContainer>{" "}
            </Container>
          </Container>
        </DropTarget>
        <Container style={{ flexDirection: "row" }}>
          {options &&
            options.map((option, id) => (
              <DragDropContainer
                targetKey="foo"
                onDrag={(e) => {
                  handleDrag(e);
                }}
              >
                <Div
                  key={id}
                  style={{
                    backgroundColor: "#84c128ff",
                    color: "white",
                    fontWeight: "500",
                    height: "40px",
                    width: "140px",
                    fontSize: "15px",
                  }}
                >
                  {option}
                </Div>
              </DragDropContainer>
            ))}
        </Container>
        <p style={{ color: "#f08c13", fontSize: "1.6rem" }}>
          {data[lang].worldview_part_two__lists_end}
        </p>
      </Container>
    </div>
  );
}

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 0;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 398px;
  text-align: start;
  font-size: 14px;
  overflow: auto;
  font-style: normal;
  color: "#b9babaff";
  border: 1px solid #e9e9e9;
  background-color: #e9e9e9;
`;
