import React from "react";
import styled from "styled-components";

export default function Goals() {
  return (
    <>
      {/* // Title */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "35px",
          color: "#ee8414ff",
          letterSpacing: "1.5px",
        }}
      >
        <h2 >מטרות משנה</h2>{" "}
      </div>
      <Container >
        <CircleAndTextWrapper>
          <GreenCircle />
          <Text>מתן כלים להתמודדות עם אתגרי החיים</Text>
        </CircleAndTextWrapper>
        <CircleAndTextWrapper>
          <OrangeCircle />
          <Text>מימוש הצרכים והתשוקות</Text>
        </CircleAndTextWrapper>
        <CircleAndTextWrapper>
          <BlueCircle />
          <Text>הגשמת חלומות, מטרות והצלחה בחיים</Text>
        </CircleAndTextWrapper>
        <CircleAndTextWrapper>
          <GreenCircle />
          <Text>גילוי הדרך לחיי עוצמה ואושר</Text>
        </CircleAndTextWrapper>
        <CircleAndTextWrapper>
          <OrangeCircle />
          <Text>מיקוד בחיים והתאמת קריירה</Text>
        </CircleAndTextWrapper>
        <CircleAndTextWrapper>
          <BlueCircle />
          <Text>בניית תוכנית עבודה מותאמת אישית</Text>
        </CircleAndTextWrapper>
        <CircleAndTextWrapper>
          <GreenCircle />
          <Text>הגברת המודעות העצמית</Text>
        </CircleAndTextWrapper>{" "}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

export const CircleAndTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 15px;
`;

export const GreenCircle = styled.div`
  background-color: #8aca28ff;
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

export const OrangeCircle = styled.div`
  background-color: #ee8414ff;
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

export const BlueCircle = styled.div`
  background-color: #4faddfff;
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

export const Text = styled.p`
  font-size: 1.15rem;
  width: 100%;
`;
