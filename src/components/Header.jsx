import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { ThemeContext as ownThemeContext } from "../context/ThemeStore";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const NavbarContainer = styled.header`
  width: 100%;
  height: 10vh;
  background-color: ${(props) => props.theme.elements};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.03);

  @media screen and (max-width: 767px) {
    justify-content: space-around;
  }
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.text};
  @media screen and (max-width: 767px) {
    text-align: left;
    font-size: 16px;
  }
`;

const ThemeSwitchContainer = styled.div``;

const Switch = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  font-size: large;
  cursor: pointer;
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;

const Navbar = () => {
  const { theme, switchTheme } = useContext(ownThemeContext);
  const themeColors = useContext(ThemeContext);
  const toggleTheme = () => {
    return theme === "light" ? "dark" : "light";
  };

  return (
    <NavbarContainer>
      <H1 props={themeColors}>Where in the world?</H1>
      <ThemeSwitchContainer>
        <Switch props={themeColors} onClick={() => switchTheme(toggleTheme())}>
          {theme === "light" ? <FaMoon /> : <FaSun />}
          {theme === "light" ? "Dark mode" : "Light mode"}
        </Switch>
      </ThemeSwitchContainer>
    </NavbarContainer>
  );
};

export default Navbar;
