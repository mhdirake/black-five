const MuiMenu = {
  styleOverrides: {
    root: ({ theme }) => ({
      ".MuiButtonBase-root": {
        "&.MuiMenuItem-root": {
          "&.MuiMenuItem-root": {
            fontSize: "13px",
            "&.Mui-selected": {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText
            },
          },
        },
      },
      ".MuiMenu-paper": {
        boxShadow: theme.shadows[3],
        backgroundColor: theme.palette.background.box,
        borderRadius: "8px",
        border: `1px solid ${theme.palette.primary.main}30`
      },
    }),
  },
  defaultProps: {
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
  },
};

export default MuiMenu;
