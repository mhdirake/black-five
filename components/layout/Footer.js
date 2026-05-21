"use client";

import { Box, Stack, Typography } from "@mui/material";

import { useLocalization } from "@/context/LocalizationProvider";

import {
  Brand,
  BrandLogo,
  FooterBottom,
  FooterContainer,
  FooterGrid,
  FooterLink,
  FooterRoot,
} from "./style";

function Footer() {
  const { dictionary, locale } = useLocalization();
  const currentYear = new Intl.NumberFormat(locale === "fa" ? "fa-IR" : "en-US", { useGrouping: false }).format(
    new Date().getFullYear()
  );

  return (
    <FooterRoot component="footer" id="contact">
      <FooterContainer maxWidth="lg">
        <FooterGrid>
          <Box>
            <Brand href="/" underline="none" aria-label={dictionary.common.brand}>
              <BrandLogo src="/images/black-five-logo.png" alt={dictionary.header.logoAlt} width={848} height={554} />
            </Brand>
            <Typography variant="subtitle1" color="text.text" mt={2.5} maxWidth={360} lineHeight={1.9}>
              {dictionary.footer.description}
            </Typography>
          </Box>

          {dictionary.footer.columns.map((column) => (
            <Stack key={column.title} gap={1.5}>
              <Typography fontWeight={700}>{column.title}</Typography>
              {column.links.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </Stack>
          ))}
        </FooterGrid>

        <FooterBottom direction={{ xs: "column", sm: "row" }}>
          <Typography variant="subtitle1">© {currentYear} {dictionary.common.brand}. {dictionary.footer.rights}</Typography>
          <Stack direction="row" gap={2}>
            <FooterLink href="#">{dictionary.footer.privacy}</FooterLink>
            <FooterLink href="#">{dictionary.footer.rules}</FooterLink>
          </Stack>
        </FooterBottom>
      </FooterContainer>
    </FooterRoot>
  );
}

export default Footer;
