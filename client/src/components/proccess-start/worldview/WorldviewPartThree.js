import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import data from "../../../translations/trans";
import { UpdateDataContext } from "../../../context/UpdateDataContext";
import { Container, Grid } from "../../home-page/About";
import { Image } from "../../home-page/LetsStart";

import eilon from "../../../assets/elonMusk.jpg";

export default function WorldviewPartThree() {
  const [userInfo, setUserInfo, lang] = useContext(UpdateDataContext);
  const [check, setCheck] = useState([]);

  const { worldview_part_one } = userInfo;
  const { options } = worldview_part_one || [];

  useEffect(() => {
    const removeDuplicates = [...new Set(check)];
    const newCheckArr = removeDuplicates;

    setUserInfo((prevState) => ({
      ...prevState,
      worldview_part_three: {
        sentences: check,
        dataDescription: "שתי משפטים שהכי מאפיינים את תפיסת העולם של המשתמש: ",
      },
    }));
  }, [check, setUserInfo]);

  const handleChange = (value, id) => {
    setCheck((prevState) => [...prevState, value]);
  };

  return (
    <div style={{ marginBottom: "auto" }}>
      <p>
        {data[lang].worldview_part_three_description[0]}
        <span
          style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#4faddf" }}
        >
          {data[lang].worldview_part_three_description[1]}
        </span>
        {data[lang].worldview_part_three_description[2]}-
        <span
          style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#4faddf" }}
        >
          {data[lang].worldview_part_three_description[3]}
        </span>
      </p>
      <Grid style={{ marginBottom: "auto" }}>
        {options &&
          options.map((option, id = 0) => {
            return (
              <div key={id} style={{ textAlign: "right" }}>
                <Input
                  type="checkbox"
                  value={option}
                  onChange={(e) => handleChange(e.target.value)}
                />
                {option}
              </div>
            );
          })}
      </Grid>
      <Image
        src={eilon}
        alt="eilon-musk"
        style={{ marginTop: "150px", width: "700px", height: "350px" }}
      />
      <p>{data[lang].worldview_part_three_eilon}</p>
    </div>
  );
}

const Input = styled.input`
  position: relative;
  top: 5px;
  border-radius: 5px;
  margin-left: 20px;
  appearance: none;
  border: 1px solid gray;
  width: 25px;
  height: 25px;
  content: none;
  outline: none;

  &:checked {
    background-color: #4faddf;
  }
`;
