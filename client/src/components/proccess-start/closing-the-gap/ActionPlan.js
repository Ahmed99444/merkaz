import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Div } from "../fulfillment/NeedIdentificationPartFour";
import data from "../../../translations/trans";
import { UpdateDataContext } from "../../../context/UpdateDataContext";
import { Container } from "../../home-page/About";

export default function ActionPlan() {
  const [actionsPlanArr, setActionsPlanArr] = useState([]);
  const [userInfo, setUserInfo, lang] = useContext(UpdateDataContext);

  const { desirblePartThree } = userInfo;
  const { mainGoal } = desirblePartThree || "";

  useEffect(() => {
    const data = localStorage.getItem("action-plan-arr");
    const parse = data && JSON.parse(data);
    if (parse) {
      setActionsPlanArr([...parse]);
    }
  }, []);

  useEffect(() => {
    setUserInfo((prevState) => ({
      ...prevState,
      actionPlan: {
        actionsPlan: actionsPlanArr,
      },
    }));
    localStorage.setItem("action-plan-arr", JSON.stringify(actionsPlanArr));
  }, [setUserInfo, actionsPlanArr]);

  const handleChange = (value, id) => {
    const newState = [...actionsPlanArr];
    newState[id] = value;
    setActionsPlanArr(newState);
  };

  return (
    <Container style={{ marginBottom: "auto", marginTop: "50px" }}>
      <BigGreenDiv style={{ marginBottom: "30px", fontSize: "2rem" }}>
        {mainGoal || "היעד המרכזי שלך"}
      </BigGreenDiv>
      <p>{data[lang].action_plan_description}</p>
      <p style={{ fontWeight: "800", marginTop: "-10px" }}>
        {data[lang].action_plan_description_bold}
      </p>
      <Container style={{ flexDirection: "row", marginRight: "50px" }}>
        {data[lang].action_plan_table_titles.map((title, id) => (
          <Container style={{ marginLeft: "1px" }}>
            <Div
              style={{ width: "135px", fontSize: "14px", height: "80px" }}
              key={id}
            >
              {title}
            </Div>
            <Input
              type="text"
              placeholder={data[lang].action_plan_table_placeholders[id]}
              value={actionsPlanArr[id] || ""}
              onChange={(e) => handleChange(e.target.value, id)}
            />
          </Container>
        ))}
      </Container>
    </Container>
  );
}

export const BigGreenDiv = styled.div`
  width: 500px;
  height: 50px;
  border-radius: 40px;
  padding: 1.5rem;
  letter-spacing: 1.1px;
  background-color: #8aca28;
  text-align: center;
  font-size: 1.35rem;
  overflow: auto;
  font-style: normal;
  color: white;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  color: "white";
`;

const Input = styled.input`
  width: 131px;
  height: 50px;
  text-align: center;
  font-size: 14px;
  outline: none;
  background-color: rgb(182 182 182);
  border: none;
`;
