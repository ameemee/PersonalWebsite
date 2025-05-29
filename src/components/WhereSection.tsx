import * as React from "react";
import styled from "styled-components";

import Palette from "./App.tsx";
import githubIconLightMode from "../assets/githubIconLightMode.png";
import githubIconDarkMode from "../assets/githubIconDarkMode.png";
import linkedinIcon from "../assets/linkedinicon.png";

const WhereContainer = styled.div<{ palette: Palette }>`
  border: solid;
  display: block;
  align-items: center;
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
  display: flex;
  width: 100%;
  padding: 20px;
  justify-content: center;
  align-items: center;

  div {
    padding-right: 20px;
    margin-right: 20px;
  }

  a {
    margin: 0px;
    padding: 0px;
    padding-left: 20px;
  }

  @media (max-width: 1090px) {
    flex-direction: column;
    width: auto;

    div {
      padding: 0px;
      margin: 0px;
      padding-top: 20px;
      border: none;
    }

    a {
      padding: 10px;
    }
  }
`;

export default function WhereSection({ palette }: { palette: Palette }) {
  return (
    <WhereContainer palette={palette}>
      <WhereBlurb>LETS KEEP IN TOUCH</WhereBlurb>
      <WhereBlurb>
        amy.zlzhuo@gmail.com
        <div>
          <a
            href="https://github.com/ameemee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={
                palette.mode === "light"
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
