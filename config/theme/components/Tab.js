export const MuiTabs = {
  styleOverrides: {
    root: ({ theme }) => ({
      paddingTop: theme.spacing(3),
      minHeight: "initial",
      backgroundColor: "initial",
      justifyContent: "space-between",
      margin: "auto",

      ".MuiTabs-indicator": {
        height: "1px",
      },

      ".MuiTabs-indicator": {
        background: theme.palette.primary.main,
        height: "1px",
      },

      ".MuiButtonBase-root": {
        padding: theme.spacing(0, 1),
        fontSize: "14px",
        fontWeight: "400",
        minHeight: "24px",
        minWidth: "60px",
        textTransform: "none",
        color: theme.palette.grey[40],

        "&.Mui-selected": {
          color: theme.palette.primary.main,
          background: "none",
        },
      },
    }),
  },
};

export default MuiTabs;
