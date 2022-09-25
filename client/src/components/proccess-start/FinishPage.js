import React, { useContext, useEffect, useState } from "react";

import hrcLogo from "../../assets/LOGO TRANS.png";
import cartificate from "../../assets/cartificate.png";
import sign from "../../assets/sign.png";

import data from "../../translations/trans";
import { UpdateDataContext } from "../../context/UpdateDataContext";
import { BigGreenDiv } from "./closing-the-gap/ActionPlan";
import { Image } from "../home-page/LetsStart";

export default function FinishPage() {
  const [showCartifcate, setShowCartificate] = useState(false);
  const [, , lang] = useContext(UpdateDataContext);
  const [name, setName] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("user-contact-details");
    const parse = data && JSON.parse(data);

    if (parse) {
      const [name, ,] = parse;
      setName(name);
    }
  }, []);

  const handleClick = () => {
    !showCartifcate ? setShowCartificate(true) : setShowCartificate(false);
  };

  return !showCartifcate ? (
    <div style={{ fontSize: "1.5rem", width: "40%" }}>
      <img src={hrcLogo} alt="hrc-logo" />
      <h2 style={{ color: "#4faddf" }}>
        {data[lang].finish_page_blue_text}{" "}
        <span style={{ color: "#8aca28ff", fontWeight: "bold" }}>H</span>
        <span style={{ color: "#4faddfff", fontWeight: "bold" }}>R</span>
        <span style={{ color: "#f08c13ff", fontWeight: "bold" }}>C</span>{" "}
      </h2>
      <p>{data[lang].finish_page_text}</p>
      <BigGreenDiv
        style={{
          padding: "1rem",
          margin: "0 auto",
          width: "300px",
          height: "30px",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        {data[lang].finish_page_button_text}
      </BigGreenDiv>{" "}
    </div>
  ) : (
    <>
      <div style={{ position: "relative", bottom: "50px" }}>
        <img
          src={cartificate}
          alt="Cartificate"
          style={{ width: "800px", marginTop: "150px" }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "175px",
            right: "170px",
            fontSize: "1.1rem",
          }}
        >
          {new Date()
            .toLocaleDateString("he-IL", { timeZone: "Asia/Jerusalem" })
            .replace(/\D/g, "/")}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "552px",
            right: "130px",
            fontSize: "4.5rem",
            fontWeight: "bold",
            backgroundColor: "white",
            width: "550px",
            color: "#4faddf",
            textAlign: "center",
          }}
        >
          {name}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "175px",
            right: "510px",
            fontSize: "1.1rem",
          }}
        >
          <Image style={{ height: "70px" }} src={sign} />
        </div>
      </div>
    </>
  );
}
