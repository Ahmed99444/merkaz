import React from "react";
import styled from "styled-components";

// images
import innivoation from "../../assets/Untitled-1_09.png";
import simplicity from "../../assets/Untitled-1_16.png";
import passion from "../../assets/Untitled-1_14.png";
import excellence from "../../assets/Untitled-1_12.png";
import power from "../../assets/Untitled-1_06.png";
import pro from "../../assets/Untitled-1_03.png";

export default function Values() {
  return (
    <>
      {/* // Title */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          letterSpacing: "1.5px",
          marginBottom: "-10px"
        }}
      >
        <h2>הערכים המובילים שלנו</h2>{" "}
      </div>
      <Container>
        <ImageAndTextWrapper>
          <Image src={simplicity} alt="simplicity" />
          <Text>פשטות</Text>
        </ImageAndTextWrapper>
        <ImageAndTextWrapper>
          <Image src={passion} alt="passion" />
          <Text>תשוקה</Text>
        </ImageAndTextWrapper>
        <ImageAndTextWrapper>
          <Image src={excellence} alt="excellence" />
          <Text>מצויינות</Text>
        </ImageAndTextWrapper>
        <ImageAndTextWrapper>
          <Image src={pro} alt="pro" />
          <Text>מקצוענות</Text>
        </ImageAndTextWrapper>
        <ImageAndTextWrapper>
          <Image src={power} alt="power" />
          <Text>עוצמה</Text>
        </ImageAndTextWrapper>
        <ImageAndTextWrapper>
          <Image src={innivoation} alt="innovition" />
          <Text>חדשנות</Text>
        </ImageAndTextWrapper>{" "}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 80%;
`;

const ImageAndTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 40px;
`;

const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

const Text = styled.p`
  font-size: 1.15rem;
  font-weight: 500;
  width: 100%;
`;
