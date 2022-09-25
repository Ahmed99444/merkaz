import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import data from "../../../translations/trans";
import { UpdateDataContext } from "../../../context/UpdateDataContext";
import { Container, Grid } from "../../home-page/About";

export default function WorldviewPartOne() {
  const [userInfo, setUserInfo, lang] = useContext(UpdateDataContext);
  const [check, setCheck] = useState([]);

  useEffect(() => {
    const removeDuplicates = [...new Set(check)];

    setUserInfo((prevState) => ({
      ...prevState,
      worldview_part_one: {
        options: check,
      },
    }));

    localStorage.setItem("worldview-part-one", JSON.stringify(check))
  }, [check, setUserInfo]);

  const handleChange = (value, id) => {
    setCheck((prevState) => [...prevState, value]);
  };

  return (
    <Grid style={{ marginBottom: "auto" }}>
      {data[lang].worldview_part_one_options &&
        data[lang].worldview_part_one_options.map((option, id = 0) => {
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
    background-color: #8aca28;
  }
`;
