export const typography = {
  fontFamily: "var(--font-jakarta, 'Helvetica Neue', Arial, sans-serif)",

  subtitle1: {
    fontSize: "12px",
    fontWeight: 400,
  },

  subtitle2: {
    fontSize: "10px",
    fontWeight: 400,
  },

  subtitle3: {
    fontSize: "10px",
  },

  subtitle4: {
    fontSize: "9px",
  },

  label: {
    fontSize: "13px",
    fontWeight: 500,
    display: "block",
    marginBottom: "4px",
    marginRight: "8px",
  },

  h1: {
    fontSize: "32px",
    fontWeight: 600,
    lineHeight: 1.35,
    "@media (max-width: 900px)": {
      fontSize: "28px",
    },
    "@media (max-width: 600px)": {
      fontSize: "24px",
    },
  },

  h2: {
    fontSize: "30px",
    "@media (max-width: 900px)": {
      fontSize: "24px",
    },
    "@media (max-width: 600px)": {
      fontSize: "22px",
    },
  },

  h3: {
    fontSize: "24px",
    '@media (max-width: 900px)' :{
      fontSize: "18px"
    }

  },

  h4: {
    fontSize: "20px",
    '@media (max-width: 900px)' :{
      fontSize: "18px",
    },
    '@media (max-width: 768px)' :{
      fontSize: "16px",
    }
  },

  h5: {
    fontSize: "16px",
    
    '@media (max-width: 900px)' :{
      fontSize: "15px",
    },
    '@media (max-width: 600px)' :{
      fontSize: "13px",
    }
  },
  
  h6: {
    fontSize: "16px",
    fontWeight: 400,
    '@media (max-width: 900px)' :{
      fontSize: "14px",
    }
  },
};

export default typography;
