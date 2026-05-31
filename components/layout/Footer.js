"use client";

import { Box, Container, Typography } from "@mui/material";
import { useLocalization } from "@/context/LocalizationProvider";

function Footer() {
  const { dictionary } = useLocalization();

  return (
    <Box component="footer" py={4}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" textAlign="center">
          © {new Date().getFullYear()} {dictionary.common.brand} — {dictionary.footer.rights}
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;