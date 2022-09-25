import React, { useContext } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";
import { Container } from "../../home-page/About";

export default function Welcome() {
  const [, , lang] = useContext(UpdateDataContext);

  return (
    <Container
      style={{ marginBottom: "auto", fontSize: "1.2rem", fontWeight: "bold" }}
    >
      <p >
        {data[lang].welcome_first_peragraph}
      </p>
      <div>
        <p>
          <span style={{ color: "#4595d5ff" }}>
            {data[lang].welcome_second_peragraph_title}
          </span>
          <br />
          {data[lang].welcome_second_peragraph}
        </p>
      </div>
      <VideoContainer>
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/z2qvSDVLkXY?rel=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoContainer>
    </Container>
  );
}

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`;
