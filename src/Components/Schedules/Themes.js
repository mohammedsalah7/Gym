import { createMuiTheme } from "@material-ui/core/styles";

export const themes = createMuiTheme({
  palette: {
    primary: {
      main: "#ed563b",
      light: "#ed563b",
      padding: "0",
    },
    secondary: {
      main: "#0",
      light: "#ed563b",
      padding: "0",
    },
    success: {
      main: "#fff",
      light: "#fff",
      padding: "0",
    },
  },

  typography: {
    button: {
      whiteSpace: "0px",
      textTransform: "none",
    },
    fontFamily: "'Poppins', sans-serif",
    body2: {
      // fontSize: "1.1rem",
    },
  },
  overrides: {
    MuiTab: {
      labelIcon: {},
      wrapper: {
        border: "10px solid 1px",
        width: "150px",
        height: "5px",
        textTransform: "none",
      },
      root: {
        maxWidth: "450px ",
        width: "350px ",
        fontFamily: "'Poppins', sans-serif",
      },
    },
  },
});
