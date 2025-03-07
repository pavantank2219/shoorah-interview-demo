import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    h1: {
      fontSize: "32px",
      fontWeight: 700,
    },
    h2: {
      fontSize: "28px",
      fontWeight: 700,
    },
    h3: {
      fontSize: "24px",
      fontWeight: 600,
    },
    h4: {
      fontSize: "20px",
      fontWeight: 600,
    },
    h5: {
      fontSize: "18px",
      fontWeight: 500,
    },
    h6: {
      fontSize: "16px",
      fontWeight: 500,
    },

    body1: {
      fontSize: "16px",
      fontWeight: 500,
    },
    body2: {
      fontSize: "14px",
      fontWeight: 500,
    },

    subtitle1: {
      fontSize: "18px",
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "16px",
      fontWeight: 400,
    },

    caption: {
      fontSize: "14px",
      fontWeight: 400,
    },
    overline: {
      fontSize: "12px",
      fontWeight: 400,
    },

    button: {
      fontSize: "16px",
      fontWeight: 500,
    },

    input: {
      fontSize: "16px",
      fontWeight: 400,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#0B1D2E",
        },
      },
    },
  },
});