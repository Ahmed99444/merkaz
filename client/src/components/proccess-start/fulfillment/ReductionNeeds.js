import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { Div } from "./NeedIdentificationPartFour";
import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";

export default function ReductionNeeds() {
  const [userInfo, setUserInfo, lang] = useContext(UpdateDataContext);
  const [happiness, setHappiness] = useState(50);

  const { needIdentificationPartFour, needIdentificationPartThree } = userInfo;
  const { text } = needIdentificationPartFour || [];
  console.log("text:", text);
  const { userNeedsPartThree } = needIdentificationPartThree || [];
  let TextsWithoutDuplicates;
  if (text) {
    const concatArrays = [...userNeedsPartThree, ...text];
    TextsWithoutDuplicates = [...new Set(concatArrays)];
  }
  let initialState;

  if (text) {
    initialState = [text[0], text[0], text[0], text[0], text[0]];
  } else {
    initialState = [
      "בבקשה חזור לדף הקודם ומלא את הטבלה",
      "בבקשה חזור לדף הקודם ומלא את הטבלה",
      "בבקשה חזור לדף הקודם ומלא את הטבלה",
      "בבקשה חזור לדף הקודם ומלא את הטבלה",
      "בבקשה חזור לדף הקודם ומלא את הטבלה",
    ];
  }

  const [userChoosen, setUserChoosen] = useState(initialState);

  useEffect(() => {
    const getDataFromLocalStorage = localStorage.getItem("user-main-needs");
    const parse =
      getDataFromLocalStorage && JSON.parse(getDataFromLocalStorage);

    if (parse) {
      setUserChoosen(parse);
    }
  }, []);

  useEffect(() => {
    setUserInfo((prevState) => ({
      ...prevState,
      reductionNeeds: {
        needs: userChoosen,
        happiness,
      },
    }));

    localStorage.setItem("user-main-needs", JSON.stringify(userChoosen));
  }, [happiness, setUserInfo, userChoosen]);

  useEffect(() => {
    console.log("user chossen: ", userChoosen);
  }, [userChoosen]);

  const handleChange = (value, id) => {
    setUserChoosen((prevState) => {
      prevState[id - 1] = value;
      return [...prevState];
    });
  };

  return (
    <div style={{ marginBottom: "auto" }}>
      <ListContainer>
        <Div style={{ width: "180px", position: "relative", left: "5px" }}>
          {data[lang].reductionNeeds_list_title}
        </Div>
        <ListBox>
          {TextsWithoutDuplicates &&
            TextsWithoutDuplicates.map((need, id) => {
              return (
                <Item key={id}>
                  <Number>{id + 1}</Number> {need}
                </Item>
              );
            })}
        </ListBox>
      </ListContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "20px",
        }}
      >
        <p style={{ width: "70%" }}>
          {data[lang].reductionNeeds_first_paragraph}:
        </p>
        <span
          style={{
            color: "orange",
            fontWeight: "600",
            fontSize: "20px",
            marginLeft: "10px",
          }}
        >
          {happiness + "%"}
        </span>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          dir="ltr"
          style={{ width: "550px" }}
          value={happiness}
          onChange={(e) => setHappiness(e.target.value)}
        />
      </div>
      <p style={{ marginTop: "80px", textAlign: "right", marginRight: "5%" }}>
        {data[lang].reductionNeeds_second_paragraph}
        <br />
        {data[lang].reductionNeeds_second_discription}
      </p>
      <Select
        value={userChoosen[0]}
        onChange={(e) => handleChange(e.target.value, 1)}
      >
        {TextsWithoutDuplicates &&
          TextsWithoutDuplicates.map((need, id) => {
            return <option value={need}>{need}</option>;
          })}
      </Select>
      <Select
        value={userChoosen[1]}
        onChange={(e) => handleChange(e.target.value, 2)}
      >
        {TextsWithoutDuplicates &&
          TextsWithoutDuplicates.map((need, id) => {
            return <option value={need}>{need}</option>;
          })}
      </Select>
      <Select
        value={userChoosen[2]}
        onChange={(e) => handleChange(e.target.value, 3)}
      >
        {TextsWithoutDuplicates &&
          TextsWithoutDuplicates.map((need, id) => {
            return <option value={need}>{need}</option>;
          })}
      </Select>
      <br />
      <Select
        value={userChoosen[3]}
        onChange={(e) => handleChange(e.target.value, 4)}
      >
        {TextsWithoutDuplicates &&
          TextsWithoutDuplicates.map((need, id) => {
            return <option value={need}>{need}</option>;
          })}
      </Select>
      <Select
        value={userChoosen[4]}
        onChange={(e) => handleChange(e.target.value, 5)}
      >
        {TextsWithoutDuplicates &&
          TextsWithoutDuplicates.map((need, id) => {
            return <option value={need}>{need}</option>;
          })}
      </Select>
    </div>
  );
}

const ListContainer = styled.div`
  position: absolute;
  right: 100px;
`;
const ListBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 177px;
  background-color: white;
  border: 2px solid rgb(75, 161, 218);
`;

const Item = styled.div`
  width: 100px;
  border-bottom: solid lightgray 1px;
  margin: 0 auto;
  padding: 1rem;
`;

const Number = styled.span`
  color: rgb(75, 161, 218);
  margin-left: 5px;
`;

const Select = styled.select`
  width: 200px;
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
  background-color: white;

  &:focus-visible {
    border: "none";
  }
`;
