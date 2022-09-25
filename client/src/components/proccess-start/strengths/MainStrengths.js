import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../../context/UpdateDataContext";

export default function MainStrengths() {
  const [userInfo, setUserInfo] = useContext(UpdateDataContext);
  const [check, setCheck] = useState([]);

  const { strengths_table } = userInfo;
  const { arrOfStrengths } = strengths_table || [];
  
  // useEffect(() => {
  //   const sumData = localStorage.getItem("sum-strengths");
  //   const parseSum = sumData && JSON.parse(sumData);
  //   console.log("parseSum: ", parseSum)
  //   if (parseSum) {
  //     setList(parseSum);
  //   } else {
  //     setList(arrOfStrengths);
  //   }
  // }, [arrOfStrengths]);

  let sortedStrengths;
  if (arrOfStrengths) {
    sortedStrengths =
      arrOfStrengths &&
      arrOfStrengths.sort((a, b) => {
        const a_key = Object.keys(a);
        const a_value = a[a_key];
        const b_key = Object.keys(b);
        const b_value = b[b_key];

        if (a_value === b_value) return 0;
        return a_value < b_value ? 1 : -1;
      });
    sortedStrengths =
      sortedStrengths && sortedStrengths.map((obj) => obj && Object.keys(obj));
  } else {
    sortedStrengths = [""];
  }
  // console.log("sortedStrengths: ", sortedStrengths[1][0])
  // if (arrOfStrengths) {
  //   arrangeArr = arrOfStrengths.map((item, id) => {
  //     const a = Object.keys(arrOfStrengths[id]);
  //     return a;
  //   });
  // }

  useEffect(() => {
    setUserInfo((prevState) => ({
      ...prevState,
      main_strengths: {
        strengths: check,
        dataDescription: "שתי חוזקות מרכזיות: ",
      },
    }));
  }, [check, setUserInfo]);

  const handleChange = (value, id) => {
    setCheck((prevState) => [...prevState, value]);
  };

  return (
    <>
      <Container style={{ marginBottom: "20px" }}>
        {sortedStrengths &&
          sortedStrengths.map((strength, id = 0) => {
            return (
              <Container
                key={id}
                style={{ flexDirection: "row", marginTop: "10px" }}
              >
                <Input
                  type="checkbox"
                  value={strength[0]}
                  onChange={(e) => handleChange(e.target.value)}
                />
                <div style={{ marginTop: "10px" }}>{strength[0]}</div>
              </Container>
            );
          })}
      </Container>
    </>
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
