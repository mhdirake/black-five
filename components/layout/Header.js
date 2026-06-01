"use client";

import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import TranslateIcon from "@mui/icons-material/Translate";

import { useLocalization } from "@/context/LocalizationProvider";
import { ThemeSwitcherContext, THEMES } from "@/context/ThemeSwitcherContextProvider";

import { ControlButton, HeaderBrand, HeaderControls, HeaderRoot, Nav, NavLink } from "./style";

function Header() {
  const [activeSection, setActiveSection] = useState("/");
  const { dictionary, toggleLocale } = useLocalization();
  const { theme, toggleTheme } = useContext(ThemeSwitcherContext);
  const navItems = dictionary.header.nav;

  useEffect(() => {
    const sectionItems = navItems.filter((item) => item.href.startsWith("#"));

    const handleScroll = () => {
      if (window.scrollY < 80) setActiveSection("/");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection("#" + entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sectionItems.forEach((item) => {
      const el = document.getElementById(item.href.slice(1));
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [navItems]);

  return (
    <HeaderRoot component="header">
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
      >
        <HeaderBrand></HeaderBrand>
      </motion.div>

      <motion.div
        initial={{ y: -50, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <Nav component="nav" aria-label={dictionary.header.mainNavigation}>
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.07, duration: 0.4, ease: "easeOut" }}
              style={{ display: "contents" }}
            >
              <NavLink
                href={item.href}
                underline="none"
                active={activeSection === item.href ? 1 : 0}
              >
                {item.label}
              </NavLink>
            </motion.div>
          ))}
        </Nav>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <HeaderControls>
          <ControlButton onClick={toggleLocale} size="small" aria-label="Toggle language">
            <TranslateIcon sx={{ fontSize: 17 }} />
          </ControlButton>
          <ControlButton onClick={toggleTheme} size="small" aria-label="Toggle theme">
            {theme === THEMES.dark
              ? <LightModeOutlinedIcon sx={{ fontSize: 17 }} />
              : <DarkModeOutlinedIcon sx={{ fontSize: 17 }} />
            }
          </ControlButton>
        </HeaderControls>
      </motion.div>
    </HeaderRoot>
  );
}

export default Header;