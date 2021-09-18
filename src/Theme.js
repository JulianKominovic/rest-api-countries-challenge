import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./context/ThemeStore";

const themes = {
  light: {
    bg: "hsl(0, 0%, 98%)",
    input: "hsl(0, 0%, 52%)",
    text: "hsl(200, 15%, 8%)",
    elements: "hsl(0, 0%, 100%)",
  },
  dark: {
    bg: "hsl(207, 26%, 17%)",
    input: "hsl(0, 0%, 52%)",
    text: "hsl(0, 0%, 100%)",
    elements: "hsl(209, 23%, 22%)",
  },
};

const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext); // get the current theme ('light' or 'dark')
  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};

export default Theme;
