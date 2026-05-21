const MuiBaseLine = {
  MuiCssBaseline: {
    styleOverrides: (theme) => ({
      ":root": {
        "--body-background": theme.palette.modules.bodyBackground,
        "--scrollbar-track": theme.palette.modules.scrollbarTrack,
        "--scrollbar-thumb": theme.palette.modules.scrollbarThumb,
        "--scrollbar-thumb-hover": theme.palette.modules.scrollbarThumbHover,
      },

      body: {
        background: theme.palette.modules.bodyBackground,
      },
    }),
  },
};

export default MuiBaseLine;
