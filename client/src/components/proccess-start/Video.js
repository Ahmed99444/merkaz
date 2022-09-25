import React from "react";
import styled from "styled-components";

export default function Video(props) {
  return (
    <VideoContainer>
      <iframe
        width="640"
        height="360"
        src="https://www.youtube.com/embed/cAFzzXpTzUA?rel=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </VideoContainer>
  );
}

const VideoContainer = styled.div`
  display: block;
`;
