const MuiButton = {
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      const background = theme?.palette?.[ownerState?.color]?.main;
      const color = theme?.palette?.[ownerState?.color]?.contrastText;

      return {
      "&.MuiButton-sizeMedium": {
        minHeight: "42px",
        [theme.breakpoints.down('md')] :{
          minHeight: "36px",
          fontSize: "12px",
        }
      },
      "&.MuiButton-sizeSmall": {
        minHeight: "34px",
        fontSize: "10px",
        minWidth: "72px",
      },
      borderRadius: "12px",
      textTransform: "none",
      letterSpacing: "0",
      fontWeight: "400",

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
    }},
  },

  defaultProps: {
    variant: "contained",
    disableElevation: true,
  },
};

export default MuiButton;
