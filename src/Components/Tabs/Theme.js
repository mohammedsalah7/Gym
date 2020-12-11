import { createMuiTheme } from "@material-ui/core/styles";

export const themeTab = createMuiTheme({
  palette: {
    primary: {
      main: "#ed563b",
      light: "#ed563b",
      padding: "0",
    },
    secondary: {
      main: "#fff",
      light: "#ed563b",
      padding: "0",
    },
  },

  overrides: {
    MuiTab: {
      root: {
        maxWidth: "450px ",
        width: "350px ",
        fontFamily: "'Poppins', sans-serif",
      },
    },
  },
});
