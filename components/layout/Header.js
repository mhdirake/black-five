"use client";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Button, Drawer, IconButton, Stack } from "@mui/material";
import { useState } from "react";

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

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { dictionary, direction, locale, toggleLocale } = useLocalization();
  const navItems = dictionary.header.nav;

  const closeMenu = () => setIsMenuOpen(false);

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
          <Button size="small" color="info" variant="text" onClick={toggleLocale}>
            {dictionary.common.switchLanguage}
          </Button>
          <Button size="small" color="info" variant="outlined" href="#login" startIcon={<PersonOutlineIcon />}>
            {dictionary.header.login}
          </Button>
          <Button size="small" color="secondary" href="#register">
            {dictionary.header.register}
          </Button>
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
            <Button fullWidth color="info" variant="text" onClick={toggleLocale}>
              {locale === LOCALES.fa ? "English" : "فارسی"}
            </Button>
            <Button fullWidth color="secondary" href="#register" onClick={closeMenu}>
              {dictionary.header.registerFull}
            </Button>
            <Button fullWidth color="info" variant="outlined" href="#login" onClick={closeMenu}>
              {dictionary.header.accountLogin}
            </Button>
          </Stack>
        </MobileDrawerContent>
      </Drawer>
    </HeaderRoot>
  );
}

export default Header;
