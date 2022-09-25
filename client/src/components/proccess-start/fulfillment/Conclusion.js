import React, { useContext } from "react";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";
import { Container } from "../../home-page/About";
import { Image } from "../../home-page/LetsStart";
import happyChildrens from "../../../assets/hapiness.jfif";

export default function Conclusion() {
  const [, , lang] = useContext(UpdateDataContext);

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "30%",
      }}
    >
      <div>
        <h1
          style={{ color: "#8aca28", fontWeight: "800", marginBottom: "0" }}
        >
          {" "}
          {data[lang].conclusion_title}
        </h1>
        <br />
        <p style={{ color: "#4faddf", fontSize: "1.7rem", margin: "0" }}>
          {data[lang].conclusion_paragraph}
        </p>
      </div>
      <Image
        style={{ width: "500px", height: "250px", marginTop: "50px" }}
        src={happyChildrens}
        alt="hapiness"
      />
    </Container>
  );
}
