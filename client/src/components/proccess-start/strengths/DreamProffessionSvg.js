import React, { useState, useEffect } from "react";
import styled from "styled-components";

import data from "../../../translations/trans";

export default function DreamProffessionSvg({ value, setValue, lang }) {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 629.33 601.4"
      width="600"
      height="600"
    >
      <circle
        class="cls-1"
        cx="315.24"
        cy="335.27"
        r="233.77"
        style={{
          fill: "none",
          stroke: "#279fd5",
          strokeMiterlimit: "10p",
          strokeWidth: "20px",
        }}
      />
      <circle
        class="cls-2"
        cx="314.11"
        cy="94.8"
        r="72.5"
        style={{ fill: "#f09720" }}
      />
      <circle
        class="cls-2"
        cx="154.97"
        cy="496.54"
        r="72.5"
        style={{ fill: "#f09720" }}
      />
      <circle
        class="cls-2"
        cx="479.67"
        cy="496.54"
        r="72.5"
        style={{ fill: "#f09720" }}
      />
      <circle
        class="cls-2"
        cx="536.78"
        cy="253.85"
        r="72.5"
        style={{ fill: "#f09720" }}
      />
      <circle
        class="cls-2"
        cx="98.11"
        cy="253.85"
        r="72.5"
        style={{ fill: "#f09720" }}
      />
      <circle
        class="cls-3"
        cx="320.57"
        cy="326.35"
        r="127.39"
        style={{ fill: "#92bb3e" }}
      />
      <foreignObject width="200" height="100" x="210.57" y="286.35">
        <Input
          id="input"
          class="input-real"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </foreignObject>
      <foreignObject width="200" height="100" x="215.11" y="84.8">
        <Span>{data[lang].circle_proffesion_text[0]}</Span>
      </foreignObject>
      <foreignObject width="200" height="100" x="436.35" y="246.35">
        <Span>{data[lang].circle_proffesion_text[1]}</Span>
      </foreignObject>
      <foreignObject width="200" height="100" x="52.97" y="476.54">
        <Span>
        {data[lang].circle_proffesion_text[2]}
        </Span>
      </foreignObject>
      <foreignObject width="20%" height="100" x="415.67" y="476.54">

        <Span>
        {data[lang].circle_proffesion_text[3]}
        </Span>
      </foreignObject>
      <foreignObject width="20%" height="100" x="35" y="215.85">
        <Span>
        {data[lang].circle_proffesion_text[4]}
        </Span>
      </foreignObject>
    </svg>
  );
}

const Input = styled.input`
  border-radius: 5px;
  margin-left: 20px;
  appearance: none;
  border: none;
  width: 100%;
  height: 100%;
  background-color: #92bb3e;
  color: white;
  font-size: 1.4rem;
  font-weight: 700;
`;

const Span = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
`;
