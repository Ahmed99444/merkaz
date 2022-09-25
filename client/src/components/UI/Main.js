import React from "react";
import styled from "styled-components";
import About from "../home-page/About";
import HeaderPage from "./Header";
import ReachingGoal from "../home-page/ReachingGoal";
import TheSystem from "../home-page/TheSystem";
import Fit from "../home-page/Fit";
import Values from "../home-page/Values";
import LetsStart from "../home-page/LetsStart";

export default function Main() {
  return (
    <Container>
      <HeaderPage />
      <ReachingGoal />
      <About />
      <TheSystem />
      <Fit />
      <Values />
      <LetsStart />
    </Container>
  );
}

const Container = styled.div`
  height: 110vh;
`;
