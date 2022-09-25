import React, { useState } from "react";
import styled from "styled-components";

import israelLogo from "../../assets/Flag-Israel.jpg";
import britishLogo from "../../assets/United-kingdom_flag.png";

import data from "../../translations/trans"

export default function BottomNav() {
  const [lang, setLang] = useState("he");


  return (
    <Nav>
      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <p style={{ color: "white", fontSize: "1.1rem", marginLeft: "30px" }}>
          {data[lang].copy_rights}
        </p>
        <LanguageContainer style={{ marginLeft: "10px" }}>
          <ChnageLang onClick={() => setLang("en")}>
            <Image src={britishLogo} />
            <div style={{ color: "white" }}>English</div>
          </ChnageLang>
        </LanguageContainer>
        <LanguageContainer>
          <ChnageLang onClick={() =>  setLang("he")}>
            <Image src={israelLogo} />
            <div style={{ color: "white" }}>עברית</div>
          </ChnageLang>
        </LanguageContainer>
      </div>
      <Button>הקודם</Button>
      <Button>הבא</Button>
    </Nav>
  );
}

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #4595d5ff;
  padding: 1rem;
`;

const Button = styled.button`
  background-color: #84c128ff;
  color: white;
  padding: 0.4rem;
  width: 150px;
  height: 50px;
  border-radius: 999px;
  font-size: 20px;
  cursor: pointer;
  border: 3px solid white;
  margin-left: 50px;
  &:hover {
    opacity: 0.85;
  }
`;

const Image = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

const LanguageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

const ChnageLang = styled.div`
  color: "white";
`;
