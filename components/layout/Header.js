"use client";

import CloseIcon from "@mui/icons-material/Close";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Button, Drawer, IconButton, Stack } from "@mui/material";
import { signIn } from "next-auth/react";
import { useContext, useState } from "react";

import { THEMES, ThemeSwitcherContext } from "@/context/ThemeSwitcherContextProvider";
import { LOCALES } from "@/localization/config";
import { useLocalization } from "@/context/LocalizationProvider";

import {
  Brand,
  BrandLogo,
  HeaderActions,
  HeaderContainer,
  HeaderRoot,
  MobileDrawerContent,
  MobileMenuButton,
  Nav,
  NavLink,
} from "./style";
import { UserContext } from "@/context/UserContextProvider";
import { logout as keycloakLogout } from "@/config/authClient";

function Header() {
  const { user } = useContext(UserContext)

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { dictionary, direction, locale, toggleLocale } = useLocalization();
  const { theme, toggleTheme } = useContext(ThemeSwitcherContext);
  const navItems = dictionary.header.nav;
  const isDarkTheme = theme === THEMES.dark;

  const closeMenu = () => setIsMenuOpen(false);
  const login = () => signIn("keycloak", { callbackUrl: "/" });
  const logout = () => keycloakLogout("/");
  const handleMobileLogin = () => {
    closeMenu();
    login();
  };
  const handleMobileLogout = () => {
    closeMenu();
    logout();
  };

  return (
    <HeaderRoot component="header">
      <HeaderContainer maxWidth="lg">
        <Brand href="/" underline="none" aria-label={dictionary.common.brand}>
          <BrandLogo src="/images/black-five-logo.png" alt={dictionary.header.logoAlt} width={848} height={554} priority />
        </Brand>

        <Nav component="nav" direction="row" aria-label={dictionary.header.mainNavigation}>
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </Nav>

        <HeaderActions direction="row">
          <IconButton color="inherit" aria-label="تغییر تم" onClick={toggleTheme}>
            {isDarkTheme ? <LightModeOutlinedIcon fontSize="small" /> : <DarkModeOutlinedIcon fontSize="small" />}
          </IconButton>
          <Button size="small" color="info" variant="text" onClick={toggleLocale}>
            {dictionary.common.switchLanguage}
          </Button>
          {user ? (
            <>
              <Button size="small" color="info" variant="outlined" startIcon={<PersonOutlineIcon />}>
                {user?.first_name} {user?.last_name}
              </Button>
              <Button size="small" color="secondary" onClick={logout}>
                {dictionary.header.logout}
              </Button>
            </>
          ) : (
            <>
              <Button
                size="small"
                color="info"
                variant="outlined"
                onClick={login}
                startIcon={<PersonOutlineIcon />}
              >
                {dictionary.header.login}
              </Button>
              <Button size="small" color="secondary" onClick={login}>
                {dictionary.header.register}
              </Button>
            </>
          )}
        </HeaderActions>

        <MobileMenuButton aria-label={dictionary.header.openMenu} onClick={() => setIsMenuOpen(true)}>
          <MenuIcon />
        </MobileMenuButton>
      </HeaderContainer>

      <Drawer anchor={direction === "rtl" ? "right" : "left"} open={isMenuOpen} onClose={closeMenu}>
        <MobileDrawerContent>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
            <Brand href="/" underline="none" aria-label={dictionary.common.brand} onClick={closeMenu}>
              <BrandLogo src="/images/black-five-logo.png" alt={dictionary.header.logoAlt} width={848} height={554} />
            </Brand>
            <IconButton aria-label={dictionary.header.closeMenu} color="inherit" onClick={closeMenu}>
              <CloseIcon />
            </IconButton>
          </Stack>

          <Stack component="nav" gap={1.5} aria-label={dictionary.header.mobileNavigation}>
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </NavLink>
            ))}
          </Stack>

          <Stack gap={1.5} mt={3}>
            <Button
              fullWidth
              color="info"
              variant="outlined"
              onClick={toggleTheme}
              startIcon={isDarkTheme ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
            >
              {isDarkTheme ? "Light" : "Dark"}
            </Button>
            <Button fullWidth color="info" variant="text" onClick={toggleLocale}>
              {locale === LOCALES.fa ? "English" : "فارسی"}
            </Button>
            {user ? (
              <Button fullWidth color="secondary" onClick={handleMobileLogout}>
                {dictionary.header.logout}
              </Button>
            ) : (
              <>
                <Button fullWidth color="secondary" onClick={handleMobileLogin}>
                  {dictionary.header.registerFull}
                </Button>
                <Button fullWidth color="info" variant="outlined" onClick={handleMobileLogin}>
                  {dictionary.header.accountLogin}
                </Button>
              </>
            )}
          </Stack>
        </MobileDrawerContent>
      </Drawer>
    </HeaderRoot>
  );
}

export default Header;
