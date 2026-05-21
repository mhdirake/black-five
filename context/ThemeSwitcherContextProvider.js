"use client";

import React, { createContext, useState } from "react";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import muiTheme from "../config/theme/theme";
import palettes from "../config/theme/palettes";
import { useCookies } from "react-cookie";
import { useLocalization } from "./LocalizationProvider";

export const ThemeSwitcherContext = createContext();

export const THEMES = {
  primary: "primary",
  secondary: "secondary",
};

function ThemeSwitcherContextProvider({ children }) {
  const [cookies] = useCookies();
  const { direction } = useLocalization();

  const defaultTheme = cookies?.["sana-theme"] || THEMES.primary;
  const [theme, setTheme] = useState(defaultTheme);
  const mergedTheme = createTheme({ ...muiTheme, direction, palette: palettes[theme] });

  return (
    <ThemeSwitcherContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={mergedTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeSwitcherContext.Provider>
  );
}

export default ThemeSwitcherContextProvider;
