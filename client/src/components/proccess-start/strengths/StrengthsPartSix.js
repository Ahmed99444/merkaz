import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import DreamProffessionSvg from "./DreamProffessionSvg";
import data from "../../../translations/trans";

export default function StrengthsPartSix() {
  const [userInfo, setUserInfo, lang] = useContext(UpdateDataContext);
  const [value, setValue] = useState("");

  useEffect(() => {
    setUserInfo((prevState) => ({
      ...prevState,
      dreamProffession: {
        value,
      },
    }));
  }, [value, setUserInfo]);

  return (
    <Container style={{ marginBottom: "auto", marginTop: "50px" }}>
      <p style={{ width: "500px", marginRight: "30px" }}>
        {data[lang].circle_proffesion_description}
        <div style={{ color: "#8aca28" }}>
        {data[lang].circle_proffesion_description_second}
        </div>
      </p>

      <DreamProffessionSvg value={value} setValue={setValue} lang={lang} />
    </Container>
  );
}

const Input = styled.input`
  position: absolute;
  right: 50%;
  bottom: 57%;
  border-radius: 5px;
  margin-left: 20px;
  appearance: none;
  border: none;
  width: 80px;
  height: 40px;
  background-color: #92bb3e;
  color: white;
  font-size: 16px;
  font-weight: 700;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
