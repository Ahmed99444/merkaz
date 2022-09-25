import React, { useState, useEffect, useContext } from "react";
import { Div } from "../fulfillment/NeedIdentificationPartFour";
import data from "../../../translations/trans";
import { UpdateDataContext } from "../../../context/UpdateDataContext";
import { Container } from "../../home-page/About";

export default function ActionPlanPartThree() {
  const { innerWidth: width } = window;
  const [actionsPlanArr, setActionsPlanArr] = useState([]);
  const [actions, setActions] = useState([]);

  const [elementWidth, setElementWidth] = useState();
  const [date, setDate] = useState([]);
  const [enDate, setEnDate] = useState([]);

  const [userInfo, setUserInfo, lang] = useContext(UpdateDataContext);

  const { actionPlan } = userInfo;
  const { actionsPlan } = actionPlan || [];

  useEffect(() => {
    const data = localStorage.getItem("action-plan-arr");
    const parse = data && JSON.parse(data);
    const getDate = localStorage.getItem("date");
    const parseDateData = getDate && JSON.parse(getDate);
    const getEnDate = localStorage.getItem("enDate");
    const parseEnDate = getEnDate && JSON.parse(getEnDate);
    if (parse) {
      setActionsPlanArr([...parse]);
    }

    if (parseDateData) {
      setDate([...parseDateData]);
    }

    if (parseEnDate) {
      setEnDate([...parseEnDate]);
    }
  }, []);

  useEffect(() => {
    let newState = width / 12;
    setElementWidth(newState);
  }, [width]);

  useEffect(() => {
    // const arrangeData = actionsPlanArr.map((item, index) => [
    //   { [item]: data[index] },
    // ]);
    setUserInfo((prevState) => ({
      ...prevState,
      actionPlanPartThree: {
        actionsPlan: actions,
        date,
        enDate,
      },
    }));
    localStorage.setItem("action-plan-arr", JSON.stringify(actions));
    localStorage.setItem("date", JSON.stringify(date));
    localStorage.setItem("enDate", JSON.stringify(enDate));
  }, [setUserInfo, actionsPlanArr, date, enDate, actions]);

  const handleChange = (value, id) => {
    const newState = [...actions];
    newState[id] = value;
    setActions(newState);
  };

  const handleDateOnChange = (value, id) => {
    let dateString = new Date(value);
    const englishFormat = value.slice(0, 10);
    const newEnDateState = [...enDate];
    newEnDateState[id] = englishFormat;
    setEnDate(newEnDateState);
    // dateString = dateString.split(" ").slice(0, 4).join(" ");
    dateString = dateString
      .toLocaleDateString("he-IL", { timeZone: "Asia/Jerusalem" })
      .replace(/\D/g, "/");
    const newDate = [...date];
    newDate[id] = dateString;
    setDate(newDate);
  };

  return (
    <Container
      style={{
        marginBottom: "auto",
        margin: "0 auto",
        marginTop: "150px",
      }}
    >
      <Container style={{ flexDirection: "row", marginRight: "50px" }}>
        {data[lang].action_plan_table_titles.map((title, id) => (
          <Container
            style={{ marginLeft: "1px", position: "relative", bottom: "100px" }}
          >
            <Div
              style={{ width: elementWidth, fontSize: "14px", height: "80px" }}
              key={id}
            >
              {title}
            </Div>
            <Div
              style={{
                width: elementWidth,
                height: "50px",
                backgroundColor: "#e9e9e9",
                color: "black",
                fontSize: "1rem",
              }}
            >
              {actionsPlan && actionsPlan[id]}
            </Div>
          </Container>
        ))}
      </Container>
      <p> {data[lang].action_plan_part_three_description_bold}</p>
      <p style={{ fontWeight: "normal" }}>
        {data[lang].action_plan_part_three_description}
      </p>
      <Container style={{ flexDirection: "row", marginRight: "50px" }}>
        {data[lang].action_plan_part_three_table_titles.map((title, id) => (
          <Container>
            <Div key={id} style={{ height: "80px", width: "210px" }}>
              <div>
                {title}
                <br />
                <span style={{ fontSize: "12px" }}>
                  {data[lang].action_plan_part_three_table_sub_titles[id]}
                </span>
              </div>
            </Div>
            <textarea
            disabled={true}
              placeholder={
                data[lang].action_plan_part_three_table_placeholders[id]
              }
              style={{
                width: "205px",
                height: "80px",
                backgroundColor: "#e9e9e9",
                borderRadius: "0",
                fontSize: "14px",
                border: "none",
              }}
              onChange={(e) => handleChange(e.target.value, id)}
            />
            {/* <div
              style={{
                width: "210px",
                height: "80px",
                backgroundColor: "#e9e9e9",
                borderRadius: "0",
                fontSize: "14px",
                marginTop: "10px",
                border: "none",
              }}
            >
              <p style={{ marginTop: "15%", fontWeight: "bold" }}>
                {date[id] || "בחר תאריך ביצוע"}
              </p>
            </div>
            <input
              type="datetime-local"
              onChange={(e) => handleDateOnChange(e.target.value, id)}
              value={date[id] || ""}
              style={{ width: "203px" }}
            /> */}
          </Container>
        ))}
      </Container>
      <br />
      <Container style={{ flexDirection: "row", marginRight: "58px", marginTop: "-10px" }}>
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <Container style={{ marginLeft: "8px", marginTop: "-10px" }}>
            <input
          
              style={{
                width: "207px",
                height: "80px",
                backgroundColor: "#e9e9e9",
                borderRadius: "0",
                fontSize: "1rem",
                border: "none",
              }}
              value={actions[index]}
              onChange={(e) => handleChange(e.target.value, index)}
            />
            <div
              style={{
                width: "210px",
                height: "80px",
                backgroundColor: "#e9e9e9",
                borderRadius: "0",
                fontSize: "14px",
                marginTop: "10px",
                border: "none",
              }}
            >
              <p style={{ marginTop: "15%", fontWeight: "bold" }}>
                {date[index] || "בחר תאריך ביצוע"}
              </p>
            </div>
            <input
              type="datetime-local"
              onChange={(e) => handleDateOnChange(e.target.value, index)}
              value={date[index] || ""}
              style={{ width: "203px" }}
            />
          </Container>
        ))}
      </Container>
      <Container style={{ flexDirection: "row", marginRight: "55px" }}>
        {[6, 7, 8, 9, 10, 11].map((index) => (
          <Container
            style={{
              marginLeft: "8px",
              marginTop: "10px",
              marginBottom: "20px",
              
            }}
          >
            <input
             
              style={{
                width: "207px",
                height: "80px",
                backgroundColor: "#e9e9e9",
                borderRadius: "0",
                fontSize: "14px",
                border: "none",
              }}
              value={actions[index]}
              onChange={(e) => handleChange(e.target.value, index)}
            />
            <div
              style={{
                width: "210px",
                height: "80px",
                backgroundColor: "#e9e9e9",
                borderRadius: "0",
                fontSize: "14px",
                marginTop: "10px",
                border: "none",
              }}
            >
              <p style={{ marginTop: "15%", fontWeight: "bold" }}>
                {date[index] || "בחר תאריך ביצוע"}
              </p>
            </div>
            <input
              type="datetime-local"
              onChange={(e) => handleDateOnChange(e.target.value, index)}
              value={date[index] || ""}
              style={{ width: "203px" }}
            />
          </Container>
        ))}
      </Container>
    </Container>
  );
}
