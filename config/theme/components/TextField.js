const MuiTextField = {
  styleOverrides: {
    root: ({ theme }) => ({
      width: "100%",

      input: {
        '&:-webkit-autofill': {
          boxShadow: `0 0 0 60px ${theme.palette.background.default} inset !important`,
          '-webkit-text-fill-color': '#ffffff !important',
        }
      },

      ".MuiInputBase-root": {
        fontWeight: 400,
        backgroundColor: theme.palette.background.default,
        border: "none",
        borderRadius: "12px",
        paddingLeft: 0,

        ".MuiInputBase-input": {
          textAlign: "inherit",
          height: "24px",
          color: theme.palette.text.main,
          padding: theme.spacing(1.3),

          fontSize: "12px",
          fontWeight: 400,

          "&::placeholder ": {
            fontSize: "12px",
            fontWeight: 400,
          },
        },

        color: theme.palette.text.main,

        "&.Mui-focused": {
          border: `none`,
        },
      },


      ".MuiFormHelperText-root": {
        textAlign: "inherit",
        direction: "rtl",
      },

      fieldset: {
        borderWidth: "1px !important",
        
      },
    }),
  },

  // defaultProps: {
  //   dir: "rtl",
  // },
};

export default MuiTextField;
