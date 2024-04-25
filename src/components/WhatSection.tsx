import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styled from "styled-components";

import ArtGallery from "./ArtGallery.tsx";
import ProjectBlurb from "./ProjectBlurb.tsx";
import watopolyScreen from "../assets/watopolyScreen.png";
import tictactoe from "../assets/tictactoe.png";
import tictactoev2 from "../assets/tictactoev2.png";

import Palette from "./App.tsx";

const ContentHeader = styled.h1`
  padding-top: 20px;
  // margin: 0px;
`;

const ContentText = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin: 5px;
`;

export default function WhatSection({ palette }: { palette: Palette }) {
  return (
    <>
      <ContentHeader>Exhibit A: Programming</ContentHeader>
      {/* <ContentText>Languages</ContentText> */}
      <Accordion defaultExpanded={false}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <ContentText>tic tac toe</ContentText>
        </AccordionSummary>
        <AccordionDetails>
          <ProjectBlurb
            img={tictactoe}
            specifications="C, Dymanic Memory Management, Arrays"
            description="A console based tictactoe with no bounds — choose your own board size ≥ 3!"
            link="https://github.com/ameemee/TicTacToe"
            palette={palette}
          />
          <ProjectBlurb
            img={tictactoev2}
            specifications="React — Javascript, CSS"
            description="This version is a static 3x3 board.<br /><br />With guidance of Maximilian Schwarzmüller on Udemy."
            link="https://github.com/ameemee/ReactTicTacToe"
            palette={palette}
          />
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <ContentText>watopoly</ContentText>
        </AccordionSummary>
        <AccordionDetails>
          <ProjectBlurb
            img={watopolyScreen}
            specifications="C++, OOP, Design Patterns (Observer)"
            description="What if Monopoly came to UWaterloo?<br /><br />Please contact me to receive a compiled version of this console-based game. <br /><br />(beware the geese)"
            palette={palette}
          />
        </AccordionDetails>
      </Accordion>

      <ContentHeader>Exhibit B: Art</ContentHeader>
      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <ContentText>SOMETIMES, I DRAW.</ContentText>
        </AccordionSummary>
        <AccordionDetails>
          <ArtGallery />
        </AccordionDetails>
      </Accordion>
    </>
  );
}
