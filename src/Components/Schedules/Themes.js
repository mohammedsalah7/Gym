import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
export const themes = createMuiTheme({
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
    success: {
      main: "#fff",
      light: "#fff",
      padding: "0",
    },
  },

  typography: {
    button: {
      // backgroundColor: "blue",
      // width: "12px",
      // border: "10px solid 1px",
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
      labelIcon: {
        // backgroundColor: "red",
      },
      // fullWidth: { maxWidth: "120px" },
      wrapper: {
        border: "10px solid 1px",
        width: "150px",
        height: "5px",
        // backgroundColor: "red",
        textTransform: "none",
      },
      // wrapped: {
      //   border: "10px solid 1px",
      //   width: "150px",
      //   height: "5px",
      //   backgroundColor: "red",
      // },
      // position: "relative",
      // width: "600px",
      // height: "95px",
      // fontFamily: "'Poppins', sans-serif",
      // border: "1px solid 1px",
      // backgroundColor: "red",
    },
  },

  // MuiTabs: {
  //   root: {
  // position: "relative",
  // backgroundColor: "black",
  // padding: "5px",
  // left: "60px",
  // height: "1500px",
  // width: "500px",
  // width: "1200px",
  //     },
  //   },
  // },
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
  // props: {
  // MuiTab: {
  // disableRipple: true,
  // variant: "contained",
  // color: "primary",
  // fullWidth: {
  //   color: "red",
  //   border: "1px solid red",
  // },
  // },
  // },
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
