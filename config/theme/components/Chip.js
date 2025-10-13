export const MuiChip = {
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      const background = theme?.palette?.[ownerState?.color]?.main + 10;

      return {
        backgroundColor: background || "#f2f2f2",

        "&.MuiChip-sizeMedium": {
          borderRadius: 5,
          fontSize: "10px",
          height: "24px",
          ".MuiChip-label": {
            padding: theme.spacing(0.5, 2),
          },
        },

        "&.MuiChip-sizeLarge": {
          borderRadius: 5,
          fontSize: "14px",
          height: "24px",

          ".MuiChip-label": {
            padding: theme.spacing(0.5, 1),
          },
        },

        "&.MuiChip-sizeSmall": {
          borderRadius: 5,
          fontSize: "10px",
          aspectRatio: "1/1",

          ".MuiChip-label": {
            padding: theme.spacing(0.5),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        },
      };
    },
  },
};

export default MuiChip;
