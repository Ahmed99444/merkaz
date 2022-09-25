import React, { useContext } from "react";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";

export default function WelcomeToCloseTheGapStage() {
  const [, , lang] = useContext(UpdateDataContext);
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>
        {data[lang].closing_the_gap_stage_welcome_page_description[0]}
      </p>
      <p>{data[lang].closing_the_gap_stage_welcome_page_description[1]}</p>
      <iframe
        width="640"
        height="360"
        src="https://www.youtube.com/embed/0wSB4zrQiHw?rel=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
