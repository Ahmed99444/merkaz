import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import data from "../../../translations/trans";
import { UpdateDataContext } from "../../../context/UpdateDataContext";

export default function NeedIdentificationPartFour() {
  const [userInfo, setUserInfo, lang] = useContext(UpdateDataContext);
  const [text, setText] = useState([]);

  const { needIdentificationPartThree } = userInfo;
  const { userNeedsPartThree } = needIdentificationPartThree || [];

  useEffect(() => {
    const getDataFromLocalStorage = localStorage.getItem("text-arr");
    const parse =
      getDataFromLocalStorage && JSON.parse(getDataFromLocalStorage);

    if (parse) {
      setText(parse);
    }
  }, []);

  useEffect(() => {
    setUserInfo((prevState) => ({
      ...prevState,
      needIdentificationPartFour: { text },
    }));

    localStorage.setItem("text-arr", JSON.stringify(text));
  }, [text, setUserInfo]);

  const handleChange = (index, value) => {
    const newState = [...text];
    newState[index] = value;
    setText(newState);
  };

  return (
    <div style={{ marginBottom: "auto", marginTop: "15px" }}>
      <div
        style={{
          fontSize: "1.2rem",
          fontWeight: "bold",
          marginBottom: "1.2rem",
        }}
      >
        {data[lang].needIdentification_part_four_description}
        <br />
        {data[lang].needIdentification_part_four_description_example[0]}
        <span style={{ color: "#4faddf" }}>
          {data[lang].needIdentification_part_four_description_example[1]}
        </span>{" "}
        {data[lang].needIdentification_part_four_description_example[2]}
        <span style={{ color: "#f08c13" }}>
          {" "}
          {data[lang].needIdentification_part_four_description_example[3]}
        </span>
      </div>
      <Container>
        <Container style={{ flexDirection: "row", justifyContent: "right" }}>
          <Div>הבחירות שלך</Div>
          <Div style={{ width: "300px" }}>במילה אחת, מה זה גורם לך להרגיש?</Div>
        </Container>
        {userNeedsPartThree &&
          userNeedsPartThree.map((need, id) => {
            return (
              <Container style={{ flexDirection: "row" }} key={id}>
                {" "}
                <Div
                  style={{
                    width: "45px",
                    marginLeft: "-5px",
                    color: "white",
                  }}
                >
                  {id + 1}
                </Div>
                <Div
                  style={{
                    width: "180px",
                    color: "white",
                    fontSize: "17px",
                  }}
                >
                  {" "}
                  {need}{" "}
                </Div>
                <Input
                  type="text"
                  value={text[id]}
                  onChange={(e) => handleChange(id, e.target.value)}
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
  width: 230px;
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

const Input = styled.input`
  width: 298px;
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
  background-color: lightgray;
`;
