import React, { useContext } from "react";
import { UpdateDataContext } from "../../../context/UpdateDataContext";
import { Container } from "../../home-page/About";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function Calender() {
  const [userInfo, ,] = useContext(UpdateDataContext);

  const { actionPlanPartThree } = userInfo;
  const { enDate, actionsPlan } = actionPlanPartThree || [];
  let evenetsData;

  if (enDate && actionsPlan) {
    // const formatDates = enDate.map((item) => {
    //   let f = new Intl.DateTimeFormat("en");
    //   let a = f.formatToParts(new Date(item));
    //   return a;
    // });

    evenetsData = actionsPlan.map((action, index) => ({
      title: action || "",
      date: enDate[index],
    }));
  }

  return (
    <Container>
      <p>על מנת לראות את המשימות על פי התאריכים ביומן, נא לדפדף עם החיצים.</p>
      <FullCalendar
        widht={"200px"}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={evenetsData}
      /> 

       {actionsPlan && actionsPlan.map((action, index) => {
        return <div>{action}: {enDate[index]}</div>
      })}
    </Container>
  );
}
