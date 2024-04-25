import React from "react";
import styled from "styled-components";
import Palette from "./App.tsx";

const BlurbContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  border: solid;

  img {
    width: 50%;
    objectfit: "contain";
  }

  p {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    & BlurbDescription {
      color: blue;
      widthl: 100%;
    }
    img {
      width: 100%;
    }
  }
`;

// TO DO: Update the color palette to accomodate text colours
type Props = {
  palette: Palette;
};

const BlurbDescription = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-left: 20px;
  padding-right: 20px;
  // border: solid pink;

  color: "#212118";

  @media (max-width: 768px) {
    width: auto;
  }
`;

export default function ProjectBlurb({
  img,
  description,
  specifications,
  link,
  palette,
}: {
  img: string;
  description: string;
  specifications: string;
  link?: string;
  palette: Palette;
}) {
  console.log(palette.background);
  return (
    <BlurbContainer>
      <BlurbDescription palette={palette}>
        <h3>SPECIFICATIONS:</h3>
        <p dangerouslySetInnerHTML={{ __html: specifications }} />

        <h3>DESCRIPTION:</h3>
        {/* {description} */}
        <p dangerouslySetInnerHTML={{ __html: description }} />

        <a href={link} target="_blank" rel="noopener noreferrer">
          <h3 style={{ display: link ? "flex" : "none" }}>PLAY HERE</h3>
        </a>
      </BlurbDescription>
      <img src={img} alt="project" />
    </BlurbContainer>
  );
}
