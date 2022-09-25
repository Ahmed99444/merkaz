import React, { useContext } from "react";
import data from "../../../translations/trans";
import { Container } from "../../home-page/About";
import { UpdateDataContext } from "../../../context/UpdateDataContext";

export default function ActionPlanPartTwo() {
  const [, , lang] = useContext(UpdateDataContext);

  return (
    <Container style={{ marginBottom: "auto", marginTop: "30px" }}>
      <p>
        {data[lang].action_plan_part_two_description[0]} <br />{" "}
        {data[lang].action_plan_part_two_description[1]}
      </p>
      <ul>
        {data[lang].action_plan_part_two_list.map((item, id) => (
          <li key={id} style={{ color: "#f08c13ff" }}>
            <p
              style={{
                color: "black",
                fontSize: "1.05rem",
                marginRight: "10px",
                textAlign: "right",
              }}
            >
              <span style={{ fontWeight: "bold" }}>{item}</span>
              {data[lang].action_plan_part_two_list_content[id]}
            </p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
