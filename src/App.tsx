import React, { useState } from "react";
import NavBar from "./components/NavBar.tsx";
import PageSection from "./components/PageSection.tsx";
import Header from "./components/Header.tsx";

import WhatSection from "./components/WhatSection.tsx";
import WhySection from "./components/WhySection.tsx";
import WhereSection from "./components/WhereSection.tsx";

import styled, { ThemeProvider } from "styled-components";
import "./App.css";

interface Palette {
  mode: string;
  background: string;
  color: string;
}

export const lightTheme: Palette = {
  mode: "light",
  background: "#f7f6f2",
  color: "#212118",
};

export const darkTheme: Palette = {
  mode: "dark",
  background: "#212118",
  color: "linen",
};

const ThemeWrapper = styled.div<{ palette: Palette }>`
  background: ${(props) => props.palette.background};
  color: ${(props) => props.palette.color};

  margin: 0;
  // height: 100vh;
`;

function App() {
  const [palette, setPalette] = useState<Palette>(darkTheme);
  function handleSelect() {
    // clicked the button, invert switch the palette
    palette === lightTheme ? setPalette(darkTheme) : setPalette(lightTheme);
  }

  return (
    <ThemeProvider theme={palette}>
      <ThemeWrapper palette={palette}>
        <div id="who" />
        <NavBar palette={palette} />

        <Header handleClick={handleSelect} palette={palette} />
        <div id="what">
          <PageSection
            palette={palette}
            title={"WHAT (I DO)"}
            content={<WhatSection palette={palette} />}
          />
        </div>
        <div id="why">
          <PageSection
            palette={palette}
            title={"WHY (DO IT)?"}
            content={<WhySection palette={palette} />}
          />
        </div>
        <div id="where">
          <PageSection
            palette={palette}
            title={"WHERE (TO REACH ME)"}
            content={<WhereSection palette={palette} />}
          />
        </div>
      </ThemeWrapper>
    </ThemeProvider>
  );
}

export default App;

// FUTURE IMPROVEMENTS:
// 1. Refactor the PageSection to allow the id href to be passed in as a prop/hidden inside it.
// 2. Add a footer with a 'back to top' button.
