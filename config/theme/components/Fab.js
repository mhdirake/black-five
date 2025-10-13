import { alpha } from "@mui/material";

const MuiButton = {
  styleOverrides: {
    root: ({ theme }) => ({
      boxShadow: 'none',

      '&.MuiFab-sizeSmall': {
        width: '32px',
        height: '32px',
        minWidth: '32px',
        minHeight: '32px',

        "&.MuiFab-default": {
          background: alpha(theme.palette.text.secondary, 0.1)
        }
      }
    }),
  },


};

export default MuiButton;
