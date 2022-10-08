import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Conatainer } from "./TheSystem";
import woman from "../../assets/woman.png";

export default function LetsStart() {
  return (
    <Conatainer style={{padding: "2rem"}}>
      {" "}
      <div style={{ textAlign: "right", fontSize: "1.3rem", position: "relative", bottom : "30px" }}>
        <Image src={woman} alt={woman} style={{ verticalAlign: "middle" }} />
        <span
          style={{
            verticalAlign: "middle",
            textAlign: "center",
            position: "relative",
            top: "40px",
            left: "0",
            right: "0",
            fontWeight: "700",
          }}
        >
          היום הוא תחילת שארית חייך... מה התוכנית שלך?"{" "}
          <p style={{ textAlign: "right", fontSize: "15px", marginBottom: "35px" }}>עדנה מימון</p>
        </span>

        <Link
          to="/signup"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <Button>בואו נתחיל</Button>
        </Link>
      </div>
    </Conatainer>
  );
}

// const textAndImageWrap = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

export const Image = styled.img`
  float: right;
  width: 150px;
  height: 150px;
  margin-left: 20px;
`;

const Button = styled.button`
  background-color: #84c128ff;
  color: white;
  padding: 0.7rem;
  width: 300px;
  margin-top: 30px;
  border-radius: 999px;
  font-size: 20px;
  cursor: pointer;
  border: none;

  &:hover {
    opacity: 0.85;
  }
`;
