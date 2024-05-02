import React from "react";
import styled from "styled-components";

import Palette from "./App.tsx";

import WhatSection from "./WhatSection.tsx";

const StyledPageSection = styled.main<{ palette: Palette }>`
  display: flex;
  // border: solid pink;
  width: auto;
  padding-top: 20px;

  & .leftBar {
    // border: dashed yellow;
    // padding-top: 30px;

    width: 220px;
    flex-shrink: 0;

    // make it sticky in web view
    position: sticky;
    top: 0;

    // make the title opaque!
    background: ${(props) => props.palette.background};

    z-index: 99;
  }

  .title {
    // border: dashed pink;

    font-size: 38px;
    font-weight: bold;
    margin-left: 50px;
    margin-right: 0px;
  }

  & div.content {
    // border: dashed yellow;

    display: flex;
    flex-direction: column;
    justify-content: center;

    flex-grow: 1;
    margin-left: 10px;
    padding: 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    & .title {
      margin: 0;
      padding-bottom: 10px;
    }

    & .leftBar {
      width: 100%;
      top: 55px;
      text-align: center;
    }
  }
`;

export default function PageSection({
  palette,
  title,
  content,
}: {
  palette?: Palette;
  title: string;
  content?: React.JSX.Element;
}) {
  return (
    <StyledPageSection palette={palette}>
      <div className="leftBar">
        <p className="title">{title}</p>
      </div>
      <div className="content">{content}</div>
    </StyledPageSection>
  );
}
