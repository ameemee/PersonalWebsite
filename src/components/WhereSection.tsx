import * as React from "react";
import styled from "styled-components";

import Palette from "./App.tsx";
import githubIconLightMode from "../assets/githubIconLightMode.png";
import githubIconDarkMode from "../assets/githubIconDarkMode.png";
import linkedinIcon from "../assets/linkedinicon.png";

const WhereContainer = styled.div<{ palette: Palette }>`
  border: solid;
  display: block;
  // justify-content: space-evenly;
  align-items: center;
  // width: auto;
  // border: dashed red;
  color: ${(props) => props.palette.color};
  text-align: left;
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 1090px) {
    flex-direction: column;
    justify-content: center;
    align-itemxs: center;
  }
`;

const WhereBlurb = styled.div`
  // border: dashed blue;
  display: flex;
  width: 100%;
  padding: 20px;
  justify-content: center;
  align-items: center;

  div {
    padding-right: 20px;
    margin-right: 20px;
    // border-right: 2px solid;
  }

  @media (max-width: 1090px) {
    flex-direction: column;

    // border-top: 2px solid;
    width: auto;

    div {
      // border-bottom: 3px solid;
      border: none;
    }
  }
`;

export default function WhereSection({ palette }: { palette: Palette }) {
  return (
    <WhereContainer palette={palette}>
      <WhereBlurb>LETS KEEP IN TOUCH</WhereBlurb>
      <WhereBlurb>
        {/* <div
          style={{
            textAlign: "right",
            // borderRight: "3px solid",
            display: "flex",
          }}
        >
          !
        </div> */}
        amy.zhuozl@gmail.com
        <div>
          <a
            href="https://github.com/ameemee"
            target="_blank"
            rel="noopener noreferrer"
            style={{ paddingLeft: "40px" }}
          >
            <img
              src={
                palette.background === "linen"
                  ? githubIconLightMode
                  : githubIconDarkMode
              }
              alt="github"
              style={{ width: "35px", objectFit: "contain" }}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/amyzhuo/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ paddingLeft: "40px" }}
          >
            <img
              src={linkedinIcon}
              alt="linkedin"
              style={{ width: "35px", objectFit: "contain" }}
            />
          </a>
        </div>
      </WhereBlurb>
    </WhereContainer>
  );
}
