export const MuiCard = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: 10,
      padding: theme.spacing(1),
      boxShadow: "unset",
      [theme.breakpoints.up("md")]: {
        borderRadius: 16,
      },
    }),
  },
};

export default MuiCard;
