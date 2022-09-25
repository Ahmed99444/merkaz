import React from "react";
import styled from "styled-components";

export default function Nav() {
  const scrollToComponent = (top) => window.scrollTo(0, top);

  return (
    <Container>
      <Item onClick={() => scrollToComponent(530)}>אודות המרכז</Item>
      <Item onClick={() => scrollToComponent(1541.0000915527344)}>
        מטרות משנה
      </Item>
      <Item onClick={() => scrollToComponent(1980.0000915527344)}>השיטה</Item>
      <Item onClick={() => scrollToComponent(2350.0000915527344)}>
        למי מתאימה התוכנית?
      </Item>
      <Item onClick={() => scrollToComponent(2711.0000915527344)}>
        הערכים המובילים
      </Item>
    </Container>
  );
}

const Container = styled.ul`
  display: flex;
  justify-content: space-around;
  font-size: 15px;
  margin-top: 50px;
`;
const Item = styled.ul`
  font-weight: bold;
  margin: 6px;
  cursor: pointer;
  font-size: 1.1rem;

  &:hover {
    color: orange;
  }
`;
