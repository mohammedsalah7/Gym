import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ed563b",
      light: "#ed563b",
      padding: "0",
    },
    secondary: {
      main: "#ed563b",
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
    MuiButton: {
      label: {
        backgroundColor: "balck",
        // width: "500px",
        // height: "100px",
        border: "1px solid blue",
      },
    },
  },
});
