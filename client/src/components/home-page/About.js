import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { UpdateDataContext } from "../../context/UpdateDataContext";
import data from "../../translations/trans";
import Goals from "./Goals";

export default function About() {
  const [, , lang] = useContext(UpdateDataContext);
  return (
    <Container>
      <Title style={{ color: "#4faddfff" }}>אודות המרכז</Title>
      <p style={{ width: "30%", fontSize: "1.2rem" }}>
        {data[lang].about_text[0]}
        <br></br>
        <br></br>
        {data[lang].about_text[1]}
      </p>
      <Grid>
        <div>
          <h2 style={{ color: "#111111" }}>{data[lang].about_titles[0]}</h2>
          <RightSquare>
            <P style={{ marginBottom: "30px", width: "50%" }}>
              {data[lang].about_text[2]}
            </P>
          </RightSquare>
        </div>
        <div>
          <h2 style={{ color: "#111111" }}>{data[lang].about_titles[1]}</h2>
          <Square>
            <P>{data[lang].about_text[3]}</P>
          </Square>
        </div>
        <div>
          <h2 style={{ color: "#111111" }}>{data[lang].about_titles[2]}</h2>
          <LeftSquare>
            <P>{data[lang].about_text[4]}</P>
          </LeftSquare>
        </div>
      </Grid>
      <VideoContainer>
        <iframe
          width="699"
          height="393"
          src="https://www.youtube.com/embed/gZikB6IIosM?rel=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoContainer>
      <Link
          to="/signup"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <Button>בואו נתחיל</Button>
        </Link>
      <Goals />
    </Container>
  );
}

export const Container = styled.div`
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  color: "#4faddfff";
  margin-top: 50px;
  margin-bottom: 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 10px;
`;

const Square = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4faddfff;
  width: 350px;
  height: 170px;
`;

const LeftSquare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8aca28ff;
  width: 350px;
  height: 170px;
  border-radius: 60px 0 0 0;
`;

const RightSquare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f08c13ff;
  width: 350px;
  height: 170px;
  border-radius: 0 60px 0 0;
`;

const P = styled.p`
  color: white;
  font-weight: 500;
  margin: 10px;
`;

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px;
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
