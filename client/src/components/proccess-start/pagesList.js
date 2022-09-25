import React from "react";

import Video from "./Video";
import Chart from "./Chart";
import FirstMemory from "./FirstMemory";
import Questions from "./Questions";
import Expirence from "./Expirence";
import Wrestling from "./Wrestling";
import Character from "./Character";
import Decision from "./Decision";
import Success from "./Success";
import LogoPage from "./LogoPage";
import Welcome from "./fulfillment/Welcome";
import Aplaton from "./fulfillment/Aplaton";
import NeedIdentification from "./fulfillment/NeedIdentification";
import NeedIdentificationPartTwo from "./fulfillment/NeedIdentificationPartTwo";
import NeedIdentificationPartThree from "./fulfillment/NeedIdentificationPartThree";
import NeedIdentificationPartFour from "./fulfillment/NeedIdentificationPartFour";
import ReductionNeeds from "./fulfillment/ReductionNeeds";
import Conclusion from "./fulfillment/Conclusion";
import Marden from "./fulfillment/Marden";
import ActionToSuccessPartOne from "./actions-to-success/ActionToSuccessPartOne";
import ActionToSuccessPartTwo from "./actions-to-success/ActionToSuccessPartTwo";
import ActionToSuccessPartThree from "./actions-to-success/ActionToSuccessPartThree";
import StrategyWelcomePage from "./strategy/StrategyWelcomePage";
import StrategyValuesPartOne from "./strategy/StrategyValuesPartOne";
import StrategyValuesPartTwo from "./strategy/StrategyValuesPartTwo";
import StrategyValuesPartThree from "./strategy/StrategyValuesPartThree";
import EthicsPartOne from "./ethics/EthicsPartOne";
import EthicsPartTwo from "./ethics/EthicsPartTwo";
import WorldviewPartOne from "./worldview/WorldviewPartOne";
import WorldviewPartTwo from "./worldview/WorldviewPartTwo";
import WorldviewPartThree from "./worldview/WorldviewPartThree";
import Peres from "./Peres";
import NeedsAndValues from "./NeedsAndValues";
import OccupationsLife from "./occupations-life/OccupationsLife";
import OccupationsLifePartTwo from "./occupations-life/OccupationsLifePartTwo";
import OccupationsLifePartThree from "./occupations-life/OccupationsLifePartThree";
import OccupationsLifePartFour from "./occupations-life/OccupationsLifePartFour";
import ValvesOfLife from "./Valves-of-life/ValvesOfLife";
import ValvesOfLifePartTwo from "./Valves-of-life/ValvesOfLifePartTwo";
import Churchill from "./Churchill";
import StrengthsWelcomePage from "./strengths/StrengthsWelcomePage";
import StrengthsTable from "./strengths/StrengthsTable";
import MainStrengths from "./strengths/MainStrengths";
import StrengthsPartThree from "./strengths/StrengthsPartThree";
import StivieWonder from "./StivieWonder";
import StrengthsPartFour from "./strengths/StrengthsPartFour";
import StrengthsPartFive from "./strengths/StrengthsPartFive";
import StrengthsPartSix from "./strengths/StrengthsPartSix";
import FinalPageStrngths from "./strengths/FinalPageStrngths";
import XrayPartOne from "./xray/XrayPartOne";
import XrayPartTwo from "./xray/XrayPartTwo";
import Maslo from "./Maslo";
import XrayPartThree from "./xray/XrayPartThree";
import WelcomeToDesirable from "./desirable/WelcomeToDesirable";
import DesirablePartOne from "./desirable/DesirablePartOne";
import Michelangelo from "./desirable/Michelangelo";
import DesirblePartTwo from "./desirable/DesirblePartTwo";
import DesirblePartThree from "./desirable/DesirblePartThree";
import DesirblePartFour from "./desirable/DesirblePartFour";
import DesirblePartFive from "./desirable/DesirblePartFive";
import DesirblePartSix from "./desirable/DesirblePartSix";
import DesirblePartSeven from "./desirable/DesirblePartSeven";
import WelcomeToCloseTheGapStage from "./closing-the-gap/WelcomeToCloseTheGapStage";
import ActionPlan from "./closing-the-gap/ActionPlan";
import ActionPlanPartTwo from "./closing-the-gap/ActionPlanPartTwo";
import ActionPlanPartThree from "./closing-the-gap/ActionPlanPartThree";
import Calender from "./closing-the-gap/Calender";
import Congrats from "./closing-the-gap/Congrats";
import DoubleRadarChart from "./closing-the-gap/DoubleRadar";
import Feedback from "./feedback/Feedback";
import FinalVideo from "./FinalVideo";
import FinishPage from "./FinishPage";

const page = [
  {
    component: <Video />,
    pageName: "video",
    route: "video/1",
    pageNumber: 0,
  },
  {
    component: <Chart />,
    pageName: "chart",
    route: "radar",
    pageNumber: 1,
  },
  {
    component: <FirstMemory />,
    pageName: "childhood",
    route: "childhood",
    pageNumber: 2,
  },
  {
    component: <Questions />,
    pageName: "questions",
    route: "questions",
    pageNumber: 3,
  },
  {
    component: <Expirence />,
    pageName: "expirence",
    route: "expirence",
    pageNumber: 4,
  },
  {
    component: <Wrestling />,
    pageName: "wrestling",
    route: "wrestling",
    pageNumber: 5,
  },
  {
    component: <Character />,
    pageName: "character",
    route: "character",
    pageNumber: 6,
  },
  {
    component: <Decision />,
    pageName: "decision",
    route: "decision",
    pageNumber: 7,
  },
  {
    component: <Success />,
    pageName: "success",
    route: "success",
    pageNumber: 8,
  },
  {
    component: <LogoPage />,
    pageName: "logo-page",
    route: "logo-page",
    pageNumber: 9,
  },
  {
    component: <Welcome />,
    pageName: "welcome",
    route: "welcome",
    pageNumber: 10,
  },
  {
    component: <Aplaton />,
    pageName: "aplaton",
    route: "aplaton",
    pageNumber: 11,
  },
  {
    component: <NeedIdentification />,
    pageName: "needIdentification",
    route: "needIdentification",
    pageNumber: 12,
  },
  {
    component: <NeedIdentificationPartTwo />,
    pageName: "needIdentificationPartTwo",
    route: "needIdentificationPartTwo",
    pageNumber: 13,
  },
  {
    component: <NeedIdentificationPartThree />,
    pageName: "needIdentificationPartTwo",
    route: "needIdentificationPartTwo",
    pageNumber: 14,
  },
  {
    component: <NeedIdentificationPartFour />,
    pageName: "needIdentificationPartFour",
    route: "needIdentificationPartFour",
    pageNumber: 15,
  },
  {
    component: <ReductionNeeds />,
    pageName: "reductionNeeds",
    route: "reductionNeeds",
    pageNumber: 16,
  },
  {
    component: <Conclusion />,
    pageName: "conclusion",
    route: "conclusion",
    pageNumber: 17,
  },
  {
    component: <Marden />,
    pageName: "marder",
    route: "marden",
    pageNumber: 18,
  },
  {
    component: <ActionToSuccessPartOne />,
    pageName: "actionToSuccessPartOne",
    route: "actionToSuccessPartOne",
    pageNumber: 19,
  },
  {
    component: <ActionToSuccessPartTwo />,
    pageName: "actionToSuccessPartTwo",
    route: "actionToSuccessPartTwo",
    pageNumber: 20,
  },
  {
    component: <ActionToSuccessPartThree />,
    pageName: "actionToSuccessPartThree",
    route: "actionToSuccessPartThree",
    pageNumber: 21,
  },
  {
    component: <StrategyWelcomePage />,
    pageName: "strategy",
    route: "strategy",
    pageNumber: 22,
  },
  {
    component: <StrategyValuesPartOne />,
    pageName: "strategy values part one",
    route: "strategy/1",
    pageNumber: 23,
  },
  {
    component: <StrategyValuesPartTwo />,
    pageName: "strategy values part two",
    route: "strategy/2",
    pageNumber: 24,
  },
  {
    component: <StrategyValuesPartThree />,
    pageName: "strategy_part_three",
    route: "strategy/3",
    pageNumber: 25,
  },
  {
    component: <EthicsPartOne />,
    pageName: "ethics",
    route: "ethics/1",
    pageNumber: 26,
  },
  {
    component: <EthicsPartTwo />,
    pageName: "ethics",
    route: "ethics/2",
    pageNumber: 27,
  },
  {
    component: <WorldviewPartOne />,
    pageName: "worldview",
    route: "worldview/1",
    pageNumber: 28,
  },
  {
    component: <WorldviewPartTwo />,
    pageName: "worldview",
    route: "worldview/2",
    pageNumber: 29,
  },
  {
    component: <WorldviewPartThree />,
    pageName: "worldview",
    route: "worldview/3",
    pageNumber: 30,
  },
  {
    component: <Peres />,
    pageName: "peres",
    route: "peres",
    pageNumber: 31,
  },
  {
    component: <NeedsAndValues />,
    pageName: "needs and values",
    route: "needsandvalues",
    pageNumber: 32,
  },
  {
    component: <OccupationsLife />,
    pageName: "ccupationslife",
    route: "ccupationslife/1",
    pageNumber: 33,
  },
  {
    component: <OccupationsLifePartTwo />,
    pageName: "ccupationslife-part-two",
    route: "ccupationslife/2",
    pageNumber: 34,
  },
  {
    component: <OccupationsLifePartThree />,
    pageName: "OccupationsLifePartThree",
    route: "ccupationslife/3",
    pageNumber: 35,
  },
  {
    component: <OccupationsLifePartFour />,
    pageName: "occupationslife-part-four",
    route: "ccupationslife/4",
    pageNumber: 36,
  },
  {
    component: <ValvesOfLife />,
    pageName: "ValvesOfLife",
    route: "ValvesOfLife/1",
    pageNumber: 37,
  },
  {
    component: <ValvesOfLifePartTwo />,
    pageName: "ValvesOfLifePartTwo",
    route: "ValvesOfLife/2",
    pageNumber: 38,
  },
  {
    component: <Churchill />,
    pageName: "churchill",
    route: "churchill",
    pageNumber: 39,
  },
  {
    component: <StrengthsWelcomePage />,
    pageName: "strengthsWelcomePage",
    route: "strengths/1",
    pageNumber: 40,
  },
  {
    component: <StrengthsTable />,
    pageName: "strengthsTable",
    route: "strengths/2",
    pageNumber: 41,
  },
  {
    component: <MainStrengths />,
    pageName: "mainStrengths",
    route: "strengths/3",
    pageNumber: 42,
  },
  {
    component: <StrengthsPartThree />,
    pageName: "StrengthsPartThree",
    route: "strengths/4",
    pageNumber: 43,
  },
  {
    component: <StivieWonder />,
    pageName: "StivieWonder",
    route: "StivieWonder",
    pageNumber: 44,
  },
  {
    component: <StrengthsPartFour />,
    pageName: "StrengthsPartFour",
    route: "strengths/5",
    pageNumber: 45,
  },
  {
    component: <StrengthsPartFive />,
    pageName: "StrengthsPartFive",
    route: "strengths/6",
    pageNumber: 46,
  },
  {
    component: <StrengthsPartSix />,
    pageName: "StrengthsPartSix",
    route: "strengths/7",
    pageNumber: 47,
  },
  {
    component: <FinalPageStrngths />,
    pageName: "FinalPageStrngths",
    route: "strengths/8",
    pageNumber: 48,
  },
  {
    component: <XrayPartOne />,
    pageName: "XrayPartOne",
    route: "Xray/1",
    pageNumber: 49,
  },
  {
    component: <Maslo />,
    pageName: "Maslo",
    route: "Maslo",
    pageNumber: 50,
  },
  {
    component: <XrayPartTwo />,
    pageName: "XrayPartTwo",
    route: "Xray/2",
    pageNumber: 51,
  },
  {
    component: <XrayPartThree />,
    pageName: "XrayPartThree",
    route: "Xray/3",
    pageNumber: 52,
  },
  {
    component: <WelcomeToDesirable />,
    pageName: "WelcomeToDesirable",
    route: "desirable/1",
    pageNumber: 53,
  },
  {
    component: <DesirablePartOne />,
    pageName: "desirablePartOne",
    route: "desirable/2",
    pageNumber: 54,
  },
  {
    component: <Michelangelo />,
    pageName: "michelangelo",
    route: "desirable/3",
    pageNumber: 55,
  },
  {
    component: <DesirblePartTwo />,
    pageName: "desirblePartTwo",
    route: "desirable/4",
    pageNumber: 56,
  },
  {
    component: <DesirblePartThree />,
    pageName: "desirblePartThree",
    route: "desirable/5",
    pageNumber: 57,
  },
  {
    component: <DesirblePartFour />,
    pageName: "desirblePartFour",
    route: "desirable/6",
    pageNumber: 58,
  },
  {
    component: <DesirblePartFive />,
    pageName: "desirblePartFive",
    route: "desirable/7",
    pageNumber: 59,
  },
  {
    component: <DesirblePartSix />,
    pageName: "desirblePartSix",
    route: "desirable/8",
    pageNumber: 60,
  },
  {
    component: <DesirblePartSeven />,
    pageName: "desirblePartSeven",
    route: "desirable/9",
    pageNumber: 61,
  },
  {
    component: <WelcomeToCloseTheGapStage />,
    pageName: "welcomeToCloseTheGapStage",
    route: "close-the-gap/1",
    pageNumber: 62,
  },
  {
    component: <ActionPlan />,
    pageName: "actionPlan",
    route: "close-the-gap/2",
    pageNumber: 63,
  },
  {
    component: <ActionPlanPartTwo />,
    pageName: "actionPlanPartTwo",
    route: "close-the-gap/3",
    pageNumber: 64,
  },
  {
    component: <ActionPlanPartThree />,
    pageName: "actionPlanPartThree",
    route: "close-the-gap/4",
    pageNumber: 65,
  },
  {
    component: <Calender />,
    pageName: "calender",
    route: "close-the-gap/5",
    pageNumber: 66,
  },
  {
    component: <Congrats />,
    pageName: "Congrats",
    route: "close-the-gap/6",
    pageNumber: 67,
  },
  {
    component: <DoubleRadarChart />,
    pageName: "DoubleRadarChart",
    route: "close-the-gap/7",
    pageNumber: 68,
  },
  {
    component: <Feedback />,
    pageName: "Feedback",
    route: "feedback/1",
    pageNumber: 69,
  },
  {
    component: <FinalVideo />,
    pageName: "final_video",
    route: "feedback/2",
    pageNumber: 70,
  },
  {
    component: <FinishPage />,
    pageName: "FinishPage",
    route: "feedback/3",
    pageNumber: 71,
  },
];

export default page;
