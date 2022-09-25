import React, { useContext } from "react";
import data from "../../../translations/trans";

import { UpdateDataContext } from "../../../context/UpdateDataContext";

export default function WelcomeToDesirable() {
  const [, , lang] = useContext(UpdateDataContext);
  return (
    <div>
      <div>
        <h2 style={{ color: "#f08c13", marginBottom: "-20px" }}>
          {data[lang].desirable_welcome_page_definition[0]}
        </h2>
        <p>
          {" "}
          {data[lang].desirable_welcome_page_definition[1]}
          <br />
          {data[lang].desirable_welcome_page_definition[2]}
        </p>
      </div>
      <h1 style={{ color: "rgb(215 215 215)", marginBottom: "-1px" }}>
        {data[lang].desirable_welcome_page_description}
      </h1>
      <iframe
        width="640"
        height="360"
        src="https://www.youtube.com/embed/BuWd-p8kHtc?rel=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
