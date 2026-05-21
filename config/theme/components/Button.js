const buttonSizes = {
  small: {
    minHeight: "30px",
    minWidth: "72px",
    padding: "4px 14px",
    fontSize: "10px",
  },
  medium: {
    minHeight: "40px",
    minWidth: "96px",
    padding: "9px 18px",
    fontSize: "12px",
  },
};

const MuiButton = {
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      const background = theme?.palette?.[ownerState?.color]?.main;
      const color = theme?.palette?.[ownerState?.color]?.contrastText;

      return {
        borderRadius: "12px",
        textTransform: "none",
        letterSpacing: "0",
        fontWeight: "400",

        "&.MuiButton-sizeSmall": buttonSizes.small,

        "&.MuiButton-sizeMedium": {
          ...buttonSizes.medium,

          [theme.breakpoints.down("md")]: {
            minHeight: "36px",
            minWidth: "84px",
            padding: "7px 16px",
            fontSize: "12px",
          },
        },

        "&.Mui-disabled:not(.MuiLoadingButton-loading)": {
          color: `${color || theme.palette.common.white}`,
          opacity: 0.7,
          background: `${background || theme.palette.grey[50]}`,
        },

        ".MuiButton-startIcon": {
          marginRight: 0,
          marginLeft: theme.spacing(0.5),
        },

        "&.MuiLoadingButton-loading": {
          ".MuiCircularProgress-circle": {
            color: theme.palette.common.white,
          },

          "*:not(.MuiLoadingButton-loadingIndicator) > ": {
            opacity: 0.3,
          },
        },
      };
    },
  },

  defaultProps: {
    variant: "contained",
    disableElevation: true,
  },
};

export default MuiButton;
