import React, { useState, useContext, useEffect } from "react";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";
import { Container } from "../../home-page/About";
import { Div } from "../fulfillment/NeedIdentificationPartFour";

export default function DesirblePartThree() {
  const [mainGoal, setMainGoal] = useState("");
  const [userInfo, setUserInfo, lang] = useContext(UpdateDataContext);

  const { desirblePartTwo } = userInfo;
  const { goals } = desirblePartTwo || "";
  let sortedGoals;
  if (goals) {
    sortedGoals = goals.sort((a, b) => {
      const a_key = Object.keys(a);
      const a_value = a[a_key];
      const b_key = Object.keys(b);
      const b_value = b[b_key];

      if (a_value === b_value) return 0;
      return a_value > b_value ? 1 : -1;
    });
  } else {
    sortedGoals = [""];
  }

  const mainGoalFromSortedObject =
    sortedGoals[sortedGoals.length - 1] &&
    Object.keys(sortedGoals[sortedGoals.length - 1])[0];

  const sortedGoalsKeys = sortedGoals.map((item) => Object.keys(item));
  const [activeId, setActiveId] = useState(sortedGoalsKeys.length - 1);

  useEffect(() => {
    mainGoalFromSortedObject && setMainGoal(mainGoal);
  }, [mainGoal, mainGoalFromSortedObject]);

  useEffect(() => {
    setUserInfo((prevState) => ({
      ...prevState,
      desirblePartThree: {
        mainGoal: mainGoal || mainGoalFromSortedObject,
      },
    }));
  }, [setUserInfo, mainGoal, mainGoalFromSortedObject]);

  const handleClickOnGoal = (id, goal) => {
    setActiveId(id);
    setMainGoal(goal);
  };

  return (
    <Container
      style={{ marginBottom: "auto", overflow: "auto", marginTop: "50px" }}
    >
      {console.log(
        "mainGoal: ",
        mainGoal,
        "mainGoalFromSortedObject: ",
        mainGoalFromSortedObject
      )}
      <Div style={{ width: "450px" }}>
        {data[lang].desirable_part_three_list_title}
      </Div>
      <Div
        onClick={() =>
          handleClickOnGoal(
            sortedGoalsKeys.length - 1,
            mainGoalFromSortedObject
          )
        }
        style={{
          backgroundColor:
            activeId === sortedGoalsKeys.length - 1 ? "#8aca28" : "#e9e9e9",
          color: activeId === sortedGoalsKeys.length - 1 ? "white" : "black",
          width: "450px",
        }}
      >
        {mainGoalFromSortedObject ? mainGoalFromSortedObject : "no goal"}
      </Div>
      {sortedGoalsKeys &&
        sortedGoalsKeys.map(
          (item, id) =>
            id < sortedGoalsKeys.length - 1 && (
              <Div
                key={id}
                style={{
                  backgroundColor: activeId === id ? "#8aca28" : "#e9e9e9",
                  color: activeId === id ? "white" : "black",
                  width: "450px",
                }}
                onClick={() => handleClickOnGoal(id, item)}
              >
                {item}
              </Div>
            )
        )}
      <div style={{ marginTop: "50px" }}>
        <p style={{ fontWeight: "700" }}>
          {data[lang].desirable_part_three_description[0]}
        </p>
        <p style={{ fontWeight: "300" }}>
          {data[lang].desirable_part_three_description[1]}
        </p>
      </div>
    </Container>
  );
}
