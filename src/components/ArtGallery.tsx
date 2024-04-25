import React from "react";
import styled from "styled-components";

import img1 from "../assets/art/AZ1.png";
import img2 from "../assets/art/AZ2.png";
import img3 from "../assets/art/AZ3.png";
// import img4a from "../assets/art/AZ4-a.png";
import img4b from "../assets/art/AZ4-b.png";
import img5 from "../assets/art/AZ5.png";
import img6 from "../assets/art/AZ6.png";
import img7 from "../assets/art/AZ7.png";
import img8 from "../assets/art/AZ8.png";
import img9 from "../assets/art/AZ9.png";
import img10 from "../assets/art/AZ10.png";
import img11 from "../assets/art/AZ11.png";
import img12 from "../assets/art/AZ12.png";
import img13 from "../assets/art/AZ13.png";
import img14 from "../assets/art/AZ14.png";
import img15 from "../assets/art/AZ15.png";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;

  // border: solid blue;

  justify-content: center;
`;

const Column = styled.div`
  flex: 25%;
  max-width: 24%;
  padding: 0 4px;

  & img {
    margin-top: 8px;
    vertical-align: middle;

    width: 100%;
  }

  @media (max-width: 1144px) {
    flex: 50%;
    max-width: 48%;
  }

  @media (max-width: 539px) {
    flex: 100%;
    max-width: 100%;
  }
`;

export default function ArtGallery() {
  return (
    <Row>
      <Column>
        <img src={img1} alt="AZ1" />
        <img src={img2} alt="AZ1" />
        <img src={img3} alt="AZ1" />
        <img src={img4b} alt="AZ1" />

        {/* <img src={img9} alt="AZ1" /> */}
      </Column>

      <Column>
        <img src={img5} alt="AZ1" />
        <img src={img6} alt="AZ1" />
        <img src={img7} alt="AZ1" />
        <img src={img8} alt="AZ1" />
      </Column>

      <Column>
        <img src={img12} alt="AZ1" />
        <img src={img13} alt="AZ1" />
        <img src={img14} alt="AZ1" />
        <img src={img15} alt="AZ1" />
      </Column>

      <Column>
        <img src={img9} alt="AZ1" />
        <img src={img10} alt="AZ1" />
        <img src={img11} alt="AZ1" />
        <img src={img5} alt="AZ1" />
      </Column>
    </Row>
  );
}
