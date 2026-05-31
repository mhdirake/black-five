"use client";

import React, { createContext, useMemo, useState } from "react";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import muiTheme from "../config/theme/theme";
import palettes from "../config/theme/palettes";
import { useCookies } from "react-cookie";
import { useLocalization } from "./LocalizationProvider";

export const ThemeSwitcherContext = createContext();

export const THEMES = {
  dark: "dark",
  light: "light",
};

export const THEME_COOKIE = "mehdi-theme";

function ThemeSwitcherContextProvider({ children }) {
  const [cookies, setCookie] = useCookies();
  const { direction } = useLocalization();

  const cookieTheme = cookies?.[THEME_COOKIE];
  const defaultTheme = palettes[cookieTheme] ? cookieTheme : THEMES.dark;
  const [theme, setTheme] = useState(defaultTheme);
  const selectedPalette = palettes[theme] || palettes[THEMES.dark];
  const mergedTheme = useMemo(
    () => createTheme({ ...muiTheme, direction, palette: selectedPalette }),
    [direction, selectedPalette]
  );

  const changeTheme = (nextTheme) => {
    if (!palettes[nextTheme]) return;

    setTheme(nextTheme);
    setCookie(THEME_COOKIE, nextTheme, {
      path: "/",
      maxAge: 31536000,
      sameSite: "lax",
    });
  };

  const toggleTheme = () => {
    changeTheme(theme === THEMES.dark ? THEMES.light : THEMES.dark);
  };

  return (
    <ThemeSwitcherContext.Provider value={{ theme, setTheme: changeTheme, toggleTheme }}>
      <ThemeProvider theme={mergedTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeSwitcherContext.Provider>
  );
}

export default ThemeSwitcherContextProvider;
