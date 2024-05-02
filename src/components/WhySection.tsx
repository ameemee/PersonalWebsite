import * as React from "react";
import styled from "styled-components";

import Palette from "./App.tsx";

const WhyContainer = styled.div<{ palette: Palette }>`
  // border: solid;
  display: flex;
  justify-content: space-evenly;
  // width: auto;
  // border: dashed red;
  color: ${(props) => props.palette.color};
  text-align: left;
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 1090px) {
    flex-direction: column;
    border: none;
  }
`;

const WhyBlurb = styled.div`
  // border: solid;
  display: flex;
  width: 100%;
  padding: 20px;

  div {
    padding-right: 20px;
    margin-right: 20px;
    border-right: 2px solid;
  }

  @media (max-width: 1090px) {
    flex-direction: column;

    // border-top: 2px solid;
    width: auto;

    div {
      border-bottom: 2px solid;
      // border: none;
    }
  }
`;

export default function WhatSection({ palette }: { palette: Palette }) {
  return (
    <WhyContainer palette={palette}>
      <WhyBlurb>
        <div>MATH + CS:</div>
        Curiosity. Creativity. Perspective. <br />
        <br />I enjoy dissecting problems that initially seem impenetrable (at
        least, to me), and realizing that the answer can be simple.
      </WhyBlurb>
      <WhyBlurb>
        <div>BECAUSE I BELIEVE:</div>
        Just because something works, doesn't mean it can't be improved
        <br />
        <br />
        (said best by Princess Shuri, MCU)
      </WhyBlurb>
      <WhyBlurb>
        <div>TO REALIZE:</div>
        That there's so much out there to learn, and that our work can postively
        shape our reality? <br />
        <br />
        That excites me.
      </WhyBlurb>
    </WhyContainer>
  );
}
