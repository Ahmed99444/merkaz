import React from "react";
import styled from "styled-components";

// assets
import rightLogo from "../../assets/LOGO TRANS.png";
import leftLogo from "../../assets/דמוניות.jpeg";

// components
import Nav from "./Nav";

export default function HeaderPage() {
  return (
    <Header>
      <RightLogo src={rightLogo} />
      <LogoContainer>
        <div>
          <p style={{ color: "#5f6062ff", fontWeight: "bold" }}>
            מרכז הגשמה מבית{" "}
            <span style={{ color: "#8aca28ff", fontWeight: "bold" }}>H</span>
            <span style={{ color: "#4faddfff", fontWeight: "bold" }}>R</span>
            <span style={{ color: "#f08c13ff", fontWeight: "bold" }}>
              C
            </span>{" "}
          </p>
          <Nav />
        </div>
      </LogoContainer>
      <LeftLogo src={leftLogo} />
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  width: 100%;
  background-color: white;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
  margin-top: -12px;
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
