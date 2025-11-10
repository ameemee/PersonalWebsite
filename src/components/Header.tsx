import React from "react";
import Palette from "./App.tsx";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import PFP from "../assets/PFP.jpg";

import LightDarkModeMUISwitch from "./LightDarkModeMUISwitch.tsx";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  // border: dashed blue;
  padding-bottom: 10px;
  padding-top: 30px;
`;

const StyledBox = styled.div<{ palette: Palette }>`
  width: 50%;
  font-size: 18px;
  font-weight: bold;

  & p {
    margin: 0px;
    padding: 20px;
    // border: solid blue;
  }

  &.left {
    font-size: 80px;
    text-align: right;
    // border-right: 3px solid ${(props) => props.palette.color};
  }

  & .border {
    border-left: 3px solid ${(props) => props.palette.color};
  }

  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
    font-size: 20px;
    &.left {
      text-align: center;
      border-right: none;
    }
    & .border {
      border-left: none;
    }
  }
`;

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between; // or 'center' if you want them centered
  width: 100%;
  align-items: center;
  padding-bottom: 20px;
  padding-top: 0px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default function Header({
  handleClick,
  palette,
}: {
  handleClick: () => void;
  palette: Palette;
}) {
  return (
    <StyledContainer>
      <Avatar alt="PFP" src={PFP} sx={{ width: 100, height: 100 }} />
      <StyledRow>
        <StyledBox className="left" palette={palette}>
          <p>
            hi! i'm
            <br /> AMY ZHUO
          </p>
        </StyledBox>
        <StyledBox palette={palette}>
          <p className="border">
            UWaterloo '26
            <br />
            CS &nbsp;| Statistics &nbsp;|&nbsp; Combinatorics & Optimization{" "}
            <br />
            <br />
            Software Engineering Intern @{" "}
            <span style={{ color: "#E60023" }}>Pinterest</span> <br />
            Seeking New Grad Software Engineering Positions' <br />
            <br />
            amy.zlzhuo@gmail.com
          </p>
        </StyledBox>
      </StyledRow>
      <LightDarkModeMUISwitch
        defaultChecked
        theme={palette}
        onClick={handleClick}
      />
    </StyledContainer>
  );
}
