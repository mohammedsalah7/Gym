import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
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
        position: "relative",
        width: "600px",
        height: "95px",
        fontFamily: "'Poppins', sans-serif",

        // backgroundColor: "red",
      },
    },

    MuiTabs: {
      root: {
        position: "relative",
        // backgroundColor: "black",
        padding: "5px",
        // left: "60px",
        // height: "1500px",
        // width: "500px",
        // width: "1200px",
      },
    },
  },
  //   typography: {
  //     fontFamily: "Comic Sans MS",
  //     body2: {
  //       fontFamily: "Times New Roman",
  //       fontSize: "1.1rem",
  //     },
  //   },
  //   shape: {
  //     borderRadius: 30,
  //   },
  //   spacing: 8,
  //   overrides: {
  //     MuiFilledInput: {
  //       root: {
  //         backgroundColor: "green",
  //       },
  //     },
  //     MuiInputLabel: {
  //       root: {
  //         backgroundColor: "yellow",
  //       },
  //     },
  //     MuiTextField: {
  //       root: {},
  //     },
  //     MuiButton: {
  //       root: {
  //         textTransform: "none",
  //         padding: "20px",
  //       },
  //       fullWidth: {
  //         maxWidth: "300px",
  //       },
  // },
  //   },
  //   props: {
  //     MuiButton: {
  //       disableRipple: true,
  //       variant: "contained",
  //       color: "primary",
  //     },
  //     MuiCheckbox: {
  //       disableRipple: true,
  //     },
  //     MuiTextField: {
  //       variant: "filled",
  //       InputLabelProps: {
  //         shrink: true,
  //       },
  //     },
  //     MuiPaper: {
  //       elevation: 12,
  //     },
  //     MuiCard: {
  //       elevation: 12,
  //     },
  //   },
});
