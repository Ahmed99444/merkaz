import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// assets
import reachingGoalSrc from "../../assets/reaching_goal.png";


export default function ReachingGoal() {
  return (
    <Container>
      <div style={{ marginBottom: "10px" }}>
        <P>
          כשנגיע לגיל 120 ונסתכל לאחור לא נתחרט על דברים<br></br> שנכשלנו בהם,
          אלא על דברים שלא ניסינו
        </P>
        <Link
          to="/sadna"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
        </Link>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 400px;
  font-size: 16px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  background-image: url(${reachingGoalSrc});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const P = styled.p`
  color: white;
  font-weight: bold;
  font-size: 1.3rem;
  margin-bottom: 50px;
`;
