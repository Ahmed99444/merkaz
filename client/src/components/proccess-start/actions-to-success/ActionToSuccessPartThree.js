import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";

export default function ActionToSuccessPartThree() {
  const [userInfo, setUserInfo, lang] = useContext(UpdateDataContext);
  const [text, setText] = useState([]);

  const { actionToSuccessPartTwo } = userInfo;
  const { userActionsPartTwo } = actionToSuccessPartTwo || [];

  useEffect(() => {
    const data = localStorage.getItem("text-data");
    const parse = data && JSON.parse(data);
    if (parse) {
       setText(parse);
    } else {
      setText(userActionsPartTwo)
    }
  }, [userActionsPartTwo]);

  useEffect(() => {
    setUserInfo((prevState) => ({
      ...prevState,
      actionToSuccessPartThree: text,
    }));
    localStorage.setItem(
      "text-data",
      JSON.stringify(text)
    );
  }, [text, setUserInfo]);

  const handleChange = (key, value) => {
    setText((prevState) => ({ ...prevState, [key]: value }));
  };

  // TODO:
  // 1. replace text with text from data
  // 2. improve ui
  // 3. test

  return (
    <div style={{ marginBottom: "auto", marginTop: "20px" }}>
      <Container>
        {/* rendering a list with five user choosen actions and an input
         to describe how is chossen make him success */}
        <Container style={{ flexDirection: "row", justifyContent: "right" }}>
          <Div>{data[lang].actionToSuccessPartThree_title}</Div>
          <Div style={{ width: "601px" }}>
            {data[lang].actionToSuccessPartThree_second_title}
          </Div>
        </Container>
        {userActionsPartTwo &&
          userActionsPartTwo.map((action, id) => {
            return (
              <Container style={{ flexDirection: "row" }} key={id}>
                {" "}
                <Div
                  style={{
                    width: "210.5px",
                    color: "white",
                    fontSize: "17px",
                  }}
                >
                  {" "}
                  {action}{" "}
                </Div>
                <Input
                  type="text"
                  value={text[id]}
                  onChange={(e) => handleChange(id, e.target.value, action)}
                />
              </Container>
            );
          })}
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Div = styled.div`
  width: 210px;
  height: 50px;
  background-color: rgb(75, 161, 218);
  text-align: center;
  font-size: 18px;
  overflow: auto;
  font-style: normal;
  color: white;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

export const Input = styled.input`
  width: 598px;
  height: 47px;
  margin-top: 5px;
  text-align: start;
  font-size: 18px;
  overflow: auto;
  font-style: normal;
  margin-bottom: 20px;
  margin-left: 4px;
  color: "#b9babaff";
  border: none;
  background-color: #E6E6E6;
`;
