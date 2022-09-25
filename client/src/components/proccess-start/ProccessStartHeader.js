import React, { useContext } from "react";
import styled from "styled-components";

// assets
import rightLogo from "../../assets/LOGO TRANS.png";
import leftLogo from "../../assets/דמוניות.jpeg";
import successfulMan from "../../assets/successful.png";
import unsuccessfulMan from "../../assets/unssuccesful.png";

import data from "../../translations/trans";
import { Container } from "../home-page/About";
import { BigGreenDiv } from "./closing-the-gap/ActionPlan";

import { UpdateDataContext } from "../../context/UpdateDataContext";

export default function ProccessStartHeader({ pageName }) {
  const [userInfo, , lang] = useContext(UpdateDataContext);

  const { desirblePartThree } = userInfo;
  const { mainGoal } = desirblePartThree || "";
  function handleTitle() {
    switch (pageName) {
      case "needIdentification":
        return (
          <>
            <div>
              {" "}
              <span style={{ color: "#4ba1daff" }}>
                {data[lang].needIdentification_values}
              </span>
              {data[lang].needIdentification_values_paragraph}
            </div>
            <div style={{ marginTop: "5px" }}>
              {" "}
              <span style={{ color: "#4ba1daff" }}>
                {data[lang].needIdentification_needs}
              </span>
              {data[lang].needIdentification_needs_paragraph}
            </div>
          </>
        );
      case "needIdentificationPartTwo":
        return (
          <>
            <div>
              {" "}
              <span style={{ color: "#4ba1daff" }}>
                {data[lang].needIdentification_values}
              </span>
              {data[lang].needIdentification_values_paragraph}
            </div>
            <div style={{ marginTop: "5px" }}>
              {" "}
              <span style={{ color: "#4ba1daff" }}>
                {data[lang].needIdentification_needs}
              </span>
              {data[lang].needIdentification_needs_paragraph}
            </div>
          </>
        );
      case "needIdentificationPartFour":
        return (
          <>
            <div>
              {" "}
              <span style={{ color: "#4ba1daff" }}>
                {data[lang].needIdentification_part_four_header_title_values}:{" "}
              </span>
              {
                data[lang]
                  .needIdentification_part_four_header_title_values_paragraph
              }
            </div>
            <div style={{ marginTop: "5px" }}>
              {" "}
              <span style={{ color: "#4ba1daff" }}>
                {data[lang].needIdentification_needs}
              </span>
              {data[lang].needIdentification_needs_paragraph}
            </div>
          </>
        );
      case "reductionNeeds":
        return (
          <>
            <div> {data[lang].reductionNeeds_header_title} </div>
            <div style={{ marginTop: "5px" }}>
              {" "}
              <span style={{ color: "#4ba1daff" }}>
                {data[lang].reductionNeeds_header_title_goal}
              </span>
              {
                data[lang]
                  .reductionNeeds_header_title_goal_description_before_number
              }
              {data[lang].reductionNeeds_header_title_goal_description_number}
              {
                data[lang]
                  .reductionNeeds_header_title_goal_description_after_number
              }
            </div>
          </>
        );
      case "actionToSuccessPartOne":
        return (
          <>
            <div style={{ marginBottom: "20px" }}>
              {" "}
              {data[lang].actionsToSuccess}
              <div style={{ marginTop: "5px" }}>
                {" "}
                {data[lang].actionsToSuccess_sub_title}
                <br />
                <p>
                  <span style={{ color: "orange" }}>
                    {data[lang].actionsToSuccess_sub_title_orange_part_one}
                  </span>
                  {data[lang].actionsToSuccess_sub_title_part_one}
                  <span style={{ color: "orange" }}>
                    {data[lang].actionsToSuccess_sub_title_orange_part_two}
                  </span>
                  {data[lang].actionsToSuccess_sub_title_part_two}
                </p>
              </div>
            </div>
          </>
        );
      case "actionToSuccessPartTwo":
        return (
          <>
            <div style={{ marginBottom: "20px" }}>
              {" "}
              {data[lang].actionsToSuccess}
              <div style={{ marginTop: "5px" }}>
                {" "}
                {data[lang].actionsToSuccess_sub_title}
                <br />
                <p>
                  <span style={{ color: "orange" }}>
                    {data[lang].actionsToSuccess_sub_title_orange_part_one}
                  </span>
                  {data[lang].actionsToSuccess_sub_title_part_one}
                  <span style={{ color: "orange" }}>
                    {data[lang].actionsToSuccess_sub_title_orange_part_two}
                  </span>
                  {data[lang].actionsToSuccess_sub_title_part_two}
                </p>
              </div>
            </div>
          </>
        );
      case "actionToSuccessPartThree":
        return (
          <>
            <div style={{ marginBottom: "20px" }}>
              {" "}
              {data[lang].actionsToSuccess}
              <div style={{ marginTop: "5px" }}>
                {" "}
                {data[lang].actionsToSuccess_sub_title}
                <br />
                <p>
                  <span style={{ color: "orange" }}>
                    {data[lang].actionsToSuccess_sub_title_orange_part_one}
                  </span>
                  {data[lang].actionsToSuccess_sub_title_part_one}
                  <span style={{ color: "orange" }}>
                    {data[lang].actionsToSuccess_sub_title_orange_part_two}
                  </span>
                  {data[lang].actionsToSuccess_sub_title_part_two}
                </p>
              </div>
            </div>
          </>
        );
      case "strategy values part one":
        return (
          <>
            <div style={{ marginBottom: "0" }}>
              {" "}
              {data[lang].strategey_values_title[0]}{" "}
              <span style={{ color: "#4595d5ff" }}>
                {data[lang].strategey_values_title[1]}
              </span>
            </div>
          </>
        );
      case "strategy values part two":
        return (
          <>
            <div style={{ marginBottom: "0" }}>
              {" "}
              {data[lang].strategey_values_part_two_title[0]}
              <br />
              {data[lang].strategey_values_part_two_title[1]}
            </div>
          </>
        );
      case "ethics":
        return (
          <>
            <div style={{ marginBottom: "0" }}>
              {" "}
              {data[lang].ethics_title[0]}
              <br />
              <span style={{ color: "#4595d5ff" }}>
                {data[lang].ethics_title[1]}
              </span>
              {data[lang].ethics_title[2]}
            </div>
          </>
        );
      case "worldview":
        return (
          <>
            <div style={{ marginBottom: "0" }}>
              {" "}
              {data[lang].worldview_part_one_title[0]}
              <br />
              <div style={{ fontSize: "1.2rem", fontWeight: "normal" }}>
                <span style={{ color: "#4595d5ff", fontWeight: "bold" }}>
                  {data[lang].worldview_part_one_title[1]}
                </span>
                {data[lang].worldview_part_one_title[2]}
                <br />
                <span style={{ color: "#4595d5ff", fontWeight: "bold" }}>
                  {data[lang].worldview_part_one_title[3]}
                </span>
                {data[lang].worldview_part_one_title[4]}
              </div>
            </div>
          </>
        );
      case "ccupationslife":
        return (
          <>
            <div style={{ marginBottom: "0" }}>
              {" "}
              {data[lang].ccupationslife[0]}
              <br />
              <div style={{ fontSize: "1.2rem", fontWeight: "normal" }}>
                <span style={{ color: "#f08c13", fontWeight: "bold" }}>
                  {data[lang].ccupationslife[1]}
                </span>
                {data[lang].ccupationslife[2]}
                <br />
                <span style={{ color: "#f08c13", fontWeight: "bold" }}>
                  {data[lang].ccupationslife[3]}
                </span>
                {data[lang].ccupationslife[4]}
              </div>
            </div>
          </>
        );
      case "ccupationslife-part-two":
        return (
          <>
            <div style={{ marginBottom: "0" }}>
              {" "}
              {data[lang].ccupationslife[0]}
            </div>
          </>
        );
      case "occupationslife-part-four":
        return (
          <>
            <div style={{ marginBottom: "0" }}>
              {" "}
              {data[lang].ccupationslife[0]}
            </div>
          </>
        );
      case "ValvesOfLife":
        return (
          <>
            <div style={{ marginBottom: "0", fontSize: "1rem" }}>
              <span style={{ color: "#f08c13", fontWeight: "600" }}>
                {data[lang].valves_of_life_title[0]}
              </span>
              {data[lang].valves_of_life_title[1]}
            </div>
          </>
        );
      case "ValvesOfLifePartTwo":
        return (
          <>
            <div style={{ marginBottom: "0", fontSize: "1rem" }}>
              <h2>{data[lang].valves_of_life_part_two_title[0]}</h2>
              <p>
                {data[lang].valves_of_life_part_two_title[1]}
                <span style={{ color: "#4faddf", fontWeight: "600" }}>
                  {data[lang].valves_of_life_part_two_title[2]}
                </span>
                {data[lang].valves_of_life_part_two_title[3]}
              </p>
            </div>
          </>
        );
      case "mainStrengths":
        return (
          <>
            <div style={{ marginBottom: "0", fontSize: "1rem" }}>
              <h2>{data[lang].main_strengths_header_title[0]}</h2>
              <p>
                {data[lang].main_strengths_header_title[1]}
                <br />
                {data[lang].main_strengths_header_title[2]}
                <span style={{ color: "#4faddf", fontWeight: "600" }}>
                  {data[lang].main_strengths_header_title[3]}
                </span>
                {data[lang].main_strengths_header_title[4]}
              </p>
            </div>
          </>
        );
      case "StrengthsPartThree":
        return (
          <>
            <div style={{ marginBottom: "0", fontSize: "1rem" }}>
              <h2>{data[lang].strengths_part_three_header_title[0]}</h2>
              <p>
                {data[lang].strengths_part_three_header_title[1]}
                <br />
                {data[lang].strengths_part_three_header_title[2]}
              </p>
            </div>
          </>
        );
      case "StrengthsPartFour":
        return (
          <>
            <div style={{ marginBottom: "0", fontSize: "1rem" }}>
              <h3>
                <span style={{ color: "#4faddf", fontWeight: "700" }}>
                  {data[lang].strengths_part_four_header_title[0]}
                </span>
                {data[lang].strengths_part_four_header_title[1]}
                <br />
                {data[lang].strengths_part_four_header_title[2]}
              </h3>
              <p style={{fontSize:"0.8rem", fontWeight: "noraml"}}>{data[lang].strengths_part_four_header_title[3]}</p>
            </div>
          </>
        );

      case "StrengthsPartFive":
        return (
          <>
            <div style={{ marginBottom: "0", fontSize: "1rem" }}>
              <h3>{data[lang].strengths_part_five_header_title}</h3>
            </div>
          </>
        );
      case "StrengthsPartSix":
        return (
          <>
            <div style={{ marginBottom: "0", fontSize: "1.3rem" }}>
              {data[lang].circle_proffesion_header_title}
            </div>
          </>
        );

      case "XrayPartOne":
        return (
          <>
            <div style={{ marginBottom: "0", fontSize: "1.3rem" }}>
              <h3>{data[lang].xray_part_one_header_title[0]}</h3>
              <p style={{ color: "black", fontSize: "1rem" }}>
                {data[lang].xray_part_one_header_title[1]}
              </p>
            </div>
          </>
        );
      case "XrayPartTwo":
        return (
          <>
            <div style={{ marginBottom: "0", fontSize: "1.3rem" }}>
              <h3>{data[lang].xray_part_two_header_title[0]}</h3>
              <p style={{ fontSize: "1rem" }}>
                <span style={{ color: "#4faddf", fontWeight: "700" }}>
                  {data[lang].xray_part_two_header_title[1]}
                </span>
                {data[lang].xray_part_two_header_title[2]}
                {data[lang].xray_part_two_header_title[3]}{" "}
              </p>{" "}
            </div>
          </>
        );
      case "XrayPartThree":
        return (
          <>
            <div
              style={{
                fontSize: "1.3rem",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Container style={{ marginBottom: "-50px" }}>
                <img
                  style={{
                    height: "100px",
                    width: "100px",
                    marginBottom: "-20px",
                  }}
                  src={successfulMan}
                  alt="successful-man"
                />
                <h3
                  style={{
                    fontWeight: "700",
                    color: "#8aca28",
                    fontSize: "1.3rem",
                  }}
                >
                  {data[lang].xray_part_three_title[0]}
                </h3>
              </Container>
              <Container
                style={{
                  marginRight: "100px",
                  marginTop: "18px",
                  marginBottom: "-50px",
                }}
              >
                <img
                  style={{
                    height: "80px",
                    width: "80px",
                    marginBottom: "-20px",
                  }}
                  src={unsuccessfulMan}
                  alt="unsuccessful-man"
                />
                <h3 style={{ fontWeight: "700", fontSize: "1.3rem" }}>
                  {data[lang].xray_part_three_title[1]}
                </h3>
              </Container>
            </div>
          </>
        );
      case "WelcomeToDesirable":
        return (
          <div style={{ marginBottom: "0", fontSize: "1.7rem" }}>
            <h3>{data[lang].desirable_welcome_page_title[0]}</h3>
            <p
              style={{
                color: "black",
                fontSize: "1.2rem",
                marginTop: "-20px",
                fontWeight: "450",
              }}
            >
              {data[lang].desirable_welcome_page_title[1]}
              <br />
              {data[lang].desirable_welcome_page_title[2]}
            </p>
          </div>
        );
      case "desirblePartTwo":
        return (
          <div style={{ marginBottom: "0", fontSize: "1.3rem" }}>
            <h3>{data[lang].desirable_part_two_header_title[0]}</h3>
            <p
              style={{
                color: "black",
                marginTop: "-20px",
                fontWeight: "450",
              }}
            >
              <span style={{ color: "#f08c13", fontWeight: "700" }}>
                {data[lang].desirable_part_two_header_title[1]}
              </span>{" "}
              {data[lang].desirable_part_two_header_title[2]}
              <br />
              {data[lang].desirable_part_two_header_title[3]}
            </p>
          </div>
        );
      case "desirblePartThree":
        return (
          <div style={{ marginBottom: "0", fontSize: "1.3rem" }}>
            <h3>{data[lang].desirable_part_three_hedaer_title[0]}</h3>
            <p
              style={{
                color: "black",
                marginTop: "-20px",
                fontWeight: "450",
              }}
            >
              {data[lang].desirable_part_three_hedaer_title[1]}
            </p>
          </div>
        );
      case "desirblePartSix":
        return (
          <div style={{ marginBottom: "0", fontSize: "1.3rem" }}>
            <h3>{data[lang].desirable_part_six_header_title[0]}</h3>
            <p
              style={{
                color: "black",
                fontSize: "1rem",
                marginTop: "-20px",
                fontWeight: "450",
              }}
            >
              {data[lang].desirable_part_six_header_title[1]}
            </p>
          </div>
        );
      case "welcomeToCloseTheGapStage":
        return (
          <div style={{ marginBottom: "0", fontSize: "1.3rem" }}>
            <h3>
              {data[lang].closing_the_gap_stage_welcome_page_header_title[0]}
            </h3>
            <p
              style={{
                color: "black",
                marginTop: "-20px",
                fontWeight: "450",
              }}
            >
              {" "}
              {
                data[lang].closing_the_gap_stage_welcome_page_header_title[1]
              }{" "}
              <span style={{ color: "#f08c13", fontWeight: "700" }}>
                {data[lang].closing_the_gap_stage_welcome_page_header_title[2]}
              </span>{" "}
              {data[lang].closing_the_gap_stage_welcome_page_header_title[3]}
            </p>
          </div>
        );
      case "actionPlan":
        return (
          <div style={{ marginBottom: "0", fontSize: "1.3rem" }}>
            <h3>{data[lang].action_plan_header_title[0]}</h3>
            <p
              style={{
                color: "black",
                marginTop: "-20px",
                fontWeight: "450",
              }}
            >
              <span style={{ color: "#4faddf", fontWeight: "700" }}>
                {data[lang].action_plan_header_title[1]}
              </span>{" "}
              {data[lang].action_plan_header_title[2]}
            </p>
          </div>
        );
      case "actionPlanPartTwo":
        return (
          <div
            style={{ marginBottom: "0", fontSize: "1.3rem", fontWeight: "750" }}
          >
            <h2 style={{ color: "#4faddf" }}>
              {data[lang].action_plan_part_two_header_title[0]}
            </h2>
            <h3
              style={{
                color: "black",
                marginTop: "-28px",
              }}
            >
              {data[lang].action_plan_part_two_header_title[1]}
            </h3>
          </div>
        );

      case "actionPlanPartThree":
        return (
          <div
            style={{ marginBottom: "0", fontSize: "1.3rem", fontWeight: "750" }}
          >
            <BigGreenDiv>{mainGoal}</BigGreenDiv>
          </div>
        );
      case "DoubleRadarChart":
        return (
          <div
            style={{ marginBottom: "0", fontSize: "1.3rem", fontWeight: "750" }}
          >
            <h3>{data[lang].double_chart_header_title_bold}</h3>
            <p>{data[lang].double_chart_header_title}</p>
          </div>
        );
      default:
        return data[lang][pageName];
    }
  }
  return (
    <Header>
      <RightLogo src={rightLogo} />
      <LogoContainer>
        <div style={{ fontSize: "2rem" }}>
          <p style={{ color: "#5f6062ff", fontWeight: "bold", fontSize: "2rem" }}>
            {/* page title */}
            {handleTitle()}
          </p>
        </div>
      </LogoContainer>
      <LeftLogo src={leftLogo} />
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
  margin-bottom: -70px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
`;

const RightLogo = styled.img`
  width: 100px;
  height: 100px;
  margin: 15px;
`;

const LeftLogo = styled.img`
  width: 160px;
  height: 100px;
  margin-left: auto;
  margin-top: 5px;
  margin: 15px;
`;
