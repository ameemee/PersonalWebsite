import React, { useState } from "react";
import styled from "styled-components";
import linkedinIcon from "../assets/linkedinicon.png";
import githubIconLightMode from "../assets/githubIconLightMode.png";
import githubIconDarkMode from "../assets/githubIconDarkMode.png";
import NavDarkModeClosed from "../assets/NavDarkModeClosed.png";
import NavLightModeClosed from "../assets/NavLightModeClosed.png";
import NavDarkModeOpened from "../assets/NavDarkModeOpened.png";
import NavLightModeOpened from "../assets/NavLightModeOpened.png";

import Palette from "./App.tsx";
// import Nav from "react-bootstrap/Nav";

const StyledNav = styled.nav<{ palette: Palette }>`
  position: sticky;
  background: ${(props) => props.palette.background};
  top: 0;
  z-index: 100;
`;

const LeftNavItems = ({ palette }: { palette: Palette }) => {
  return (
    <>
      <ul className="left">
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

        <a
          href="https://github.com/ameemee"
          target="_blank"
          rel="noopener noreferrer"
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
      </ul>
    </>
  );
};

function StyledLink({
  href,
  text,
  onClickFxn,
  palette,
}: {
  href: string;
  text: string;
  onClickFxn?: () => void;
  palette: Palette;
}) {
  return (
    <li>
      <a
        href={href}
        onClick={onClickFxn}
        style={{
          color: palette.color,
          textDecoration: "none",
        }}
      >
        {text}
      </a>
    </li>
  );
}

const RightNavItems = ({ palette }: { palette: Palette }) => {
  return (
    <>
      <ul className="right">
        <StyledLink href="#who" text="WHO" palette={palette} />
        <StyledLink href="#what" text="WHAT" palette={palette} />
        <StyledLink href="#why" text="WHY" palette={palette} />
        <StyledLink href="#where" text="WHERE" palette={palette} />
        {/* <li>
          <a href="#who">WHO</a>
        </li>
        <li>
          <a href="#what">WHAT</a>
        </li>
        <li>
          <a href="#why">WHY</a>
        </li>
        <li>
          <a href="#where">WHERE</a>
        </li> */}
      </ul>
    </>
  );
};

const WebNav = styled.div`
  // ie. does show when screen is wider than 768px
  //     only HIDES when width is LESS than 768px

  border-bottom: solid;
  padding: 0px;
  margin: 0px;
  // padding-right: 16px;
  padding: 10px;

  display: flex;
  justify-content: space-between;

  ul {
    // border: solid;
    list-style-type: none;
    padding: 0px;
    margin: 0px;
    display: flex;
    justify-content: space-evenly;
    width: 30%;
    align-items: center;
    font-weight: bold;
  }

  ul.right {
    // border: dashed;
    padding-right: 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNav = styled.div`
  // ie. does NOT show when screen is wider than 768px
  //     only shows when width is LESS than 768px
  display: none;

  @media (max-width: 768px) {
    border-bottom: solid;
    padding: 0px;
    margin: 0px;
    padding: 10px;

    display: flex;
    justify-content: flex-end;
  }
`;

const Dropdown = styled.div`
  display: flex;
  justify-content: center;
  // align-items: center;
  height: 0;
  overflow: hidden;
  transition: height 0.5s ease-out;

  &.open {
    height: 100vh;
  }
`;

const OpenedDropdown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
`;

// BUG NOTED: if user toggles light/dark mode, the mobile nav icon doesn't update!
let mobileNavIcon = NavDarkModeClosed;

export default function NavBar({ palette }: { palette: Palette }) {
  console.log("rerendered.");
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    mobileNavIcon =
      palette.background === "linen" ? NavLightModeOpened : NavDarkModeOpened;
  }

  function clickNavOpener() {
    console.log("prev was", isOpen);
    mobileNavIcon =
      palette.background === "linen" ? NavLightModeClosed : NavDarkModeClosed;
    setIsOpen(!isOpen);
  }

  return (
    <StyledNav palette={palette}>
      <WebNav>
        <LeftNavItems palette={palette} />
        <RightNavItems palette={palette} />
      </WebNav>
      <MobileNav>
        <img
          src={mobileNavIcon}
          alt="sandwich"
          style={{ width: "35px", objectFit: "contain" }}
          onClick={clickNavOpener}
        />
      </MobileNav>

      <Dropdown className={isOpen ? "open" : ""}>
        <OpenedDropdown style={{ listStyleType: "none" }}>
          <StyledLink
            href="#who"
            text="WHO"
            palette={palette}
            onClickFxn={clickNavOpener}
          />
          <StyledLink
            href="#what"
            text="WHAT"
            palette={palette}
            onClickFxn={clickNavOpener}
          />
          <StyledLink
            href="#why"
            text="WHY"
            palette={palette}
            onClickFxn={clickNavOpener}
          />
          <StyledLink
            href="#where"
            text="WHERE"
            palette={palette}
            onClickFxn={clickNavOpener}
          />

          {/* <li>
            <a href="#who" onClick={clickNavOpener}>
              WHO
            </a>
          </li>
          <li>
            <a href="#what" onClick={clickNavOpener}>
              WHAT
            </a>
          </li>
          <li>
            <a href="#why" onClick={clickNavOpener}>
              WHY
            </a>
          </li>
          <li>
            <a href="#where" onClick={clickNavOpener}>
              WHERE
            </a>
          </li> */}
        </OpenedDropdown>
      </Dropdown>
    </StyledNav>
  );
}
