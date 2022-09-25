import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";
import { Container, Grid } from "../../home-page/About";
import { Div } from "../actions-to-success/ActionToSuccessPartThree";
import OpenedTrashSVG from "./TrashSVG";
import ClosedTrashSVG from "./ClosedTrashSVG.js";

import {
  DragDropContainer,
  DropTarget,
  customDragElement,
} from "react-drag-drop-container";

export default function XrayPartTwo() {
  const [isDragged, setIsDragged] = useState(false);
  const [userInfo, setUserInfo, lang] = useContext(UpdateDataContext);

  //   useEffect(() => {
  //     setUserInfo((prevState) => ({
  //       ...prevState,
  //       xrayPartTwo: {
  //         text
  //       },
  //     }));
  //   }, [text, setUserInfo]);

  const handleDrag = (event) => {
    if (!isDragged) {
      setIsDragged(true);
    }
  };

  const handleHit = (value, e) => {
    e.containerElem.style.visibility = 'hidden'
    setIsDragged(false);
  };

  return (
    <div>
      <p>{data[lang].xray_part_two_description[0]}</p>
      <p>{data[lang].xray_part_two_description[1]} <br/>
      {data[lang].xray_part_two_description[2]}</p>

      <Grid style={{ gridTemplateColumns: "repeat(6, 1fr)", gap: "0" }}>
        {data[lang].xray_part_two_options &&
          data[lang].xray_part_two_options.map((option, id) => (
            <DragDropContainer
              targetKey="trash"
              onDrag={(e) => {
                handleDrag(e);
              }}
            >
              <Div
                key={id}
                style={{
                  backgroundColor: "rgb(230, 230, 230)",
                  color: "black",
                  fontWeight: "500",
                  width: "190px",
                  fontSize: "14px",
                }}
              >
                {option}
              </Div>
            </DragDropContainer>
          ))}
      </Grid>
      <DropTarget
        targetKey="trash"
        onHit={(e) => handleHit(e.dragElem.innerText, e)}
      >
        {isDragged ? <OpenedTrashSVG /> : <ClosedTrashSVG />}
      </DropTarget>
    </div>
  );
}
