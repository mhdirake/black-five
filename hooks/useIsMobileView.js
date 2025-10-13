import { useMediaQuery, useTheme } from "@mui/material";

export default function useIsMobileView() {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  return isMobileView;
}
