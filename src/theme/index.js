import { createTheme } from "@mui/material";

export const PRIMARY_COLOR = "#923D66";
export const PRIMARY_DARK_COLOR = "#6B3555";
export const WHITE_COLOR = "#FFFFFF";
export const BLACK_COLOR = "#000000";
export const LOADING_SKELETON_COLOR = "#FAF0F5";
export const DEEP_SPACE_SPARKLE_COLOR = "#455E64";
export const LIGHT_GRAY_COLOR = "#0000001F";
export const GRAY_COLOR = "#666666";

const theme = createTheme({
  palette: {
    background: {
      paper: "#FFFFFF",
    },
    primary: {
      main: PRIMARY_COLOR,
      dark: PRIMARY_DARK_COLOR,
      light: "#F7E6EF",
      gray: GRAY_COLOR,
    },
    secondary: {
      main: "#78949b",
      light: "#ECF0F1",
      dark: "#273539",
    },
  },
  typography: {
    h1: {
      fontFamily: 'Source Sans Pro", sans-serif',
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "96px",
      lineHeight: "112px",
      letterSpacing: " -1.5px",
      color: BLACK_COLOR,
    },
    h2: {
      fontFamily: 'Source Sans Pro", sans-serif',
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "60px",
      lineHeight: "72px",
      letterSpacing: " -0.5px",
      color: BLACK_COLOR,
    },
    h3: {
      fontFamily: 'Source Sans Pro", sans-serif',
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "48px",
      lineHeight: "56px",
      color: BLACK_COLOR,
    },
    h4: {
      fontFamily: 'Source Sans Pro", sans-serif',
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "34px",
      lineHeight: "36px",
      color: BLACK_COLOR,
    },
    h5: {
      fontFamily: 'Source Sans Pro", sans-serif',
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "24px",
      lineHeight: "24px",
      letterSpacing: "0.18px",
      color: BLACK_COLOR,
    },
    h6: {
      fontFamily: 'Source Sans Pro", sans-serif',
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "20px",
      lineHeight: "24px",
      letterSpacing: "0.15px",
    },
    subtitle1: {
      fontFamily: 'Source Sans Pro", sans-serif',
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.15px",
      color: BLACK_COLOR,
    },
    subtitle2: {
      fontFamily: 'Source Sans Pro", sans-serif',
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "24px",
      letterSpacing: "0.1px",
    },
    body1: {
      fontFamily: 'Source Sans Pro", sans-serif',
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.5px",
      color: BLACK_COLOR,
    },
    body2: {
      fontFamily: 'Source Sans Pro", sans-serif',
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.25px",
      color: BLACK_COLOR,
    },
    button: {
      fontFamily: 'Source Sans Pro", sans-serif',
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "16px",
      letterSpacing: "1.25px",
      textTransform: "uppercase",
    },
    caption: {
      fontFamily: 'Source Sans Pro", sans-serif',
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0.5px",
      color: BLACK_COLOR,
    },
    overline: {
      fontFamily: 'Source Sans Pro", sans-serif',
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "10px",
      lineHeight: "16px",
      letterSpacing: "1.5px",
      textTransform: "uppercase",
      color: BLACK_COLOR,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          position: "relative",
          fontFamily: 'Source Sans Pro", sans-serif',
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "16px",
          textAlign: "justify",
          letterSpacing: "1.25px",
          textTransform: "uppercase",
        },
        text: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px 8px",

          left: "0%",
          right: "0%",
          top: "0%",
          bottom: "0%",
          borderRadius: "4px",
          flex: "none",
          order: 0,
          flexGrow: 0,
          margin: "0px 0px",
          color: PRIMARY_COLOR,
        },
        outlined: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px 14px",

          left: "0%",
          right: "0%",
          top: "0%",
          bottom: "0%",
          border: "1px solid rgba(0, 0, 0, 0.12)",
          borderRadius: "4px",
          flex: "none",
          order: 0,
          flexGrow: 0,
          margin: "0px 0px",
          color: PRIMARY_COLOR,
        },

        contained: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px 14px",
          left: "0%",
          right: "0%",
          top: "0%",
          bottom: "0%",
          background: PRIMARY_COLOR,
          backgroundColor: PRIMARY_COLOR,
          borderRadius: "4px",
          flex: "none",
          order: 0,
          flexGrow: 0,
          margin: "0px 0px",
          fontFamily: 'Source Sans Pro", sans-serif',
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "16px",
          textAlign: "justify",
          letterSpacing: "1.25px",
          textTransform: "uppercase",
          color: WHITE_COLOR,
          "&:hover": {
            backgroundColor: PRIMARY_COLOR,
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "8px 16px",
          minHeight: "54px",
          left: "0px",
          top: "0px",
          background: "rgba(33, 33, 33, 0.08)",
          borderRadius: "4px 4px 0px 0px",
          flex: "none",
          order: 0,
          flexGrow: 0,
          margin: "0px 0px",
        },
        input: {
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          padding: "14px 0px 0px",

          /* Inside Auto Layout */

          flex: "none",
          order: 1,
          alignSelf: "stretch",
          flexGrow: 0,
          margin: "0px 0px",
          left: "calc(50% - 69px/2 - 93.5px)",
          top: "0px",

          /* Fonter/Sub 1 */

          fontFamily: 'Source Sans Pro", sans-serif',
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "16px",
          lineHeight: "24px",
          /* identical to box height, or 150% */

          letterSpacing: "0.15px",

          /* Emphasis on Surface/High - Black 87% - Emphasis On Surface */

          color: "rgba(0, 0, 0, 0.87)",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          // padding: '8px 16px',
          minHeight: "54px",
          left: "0px",
          top: "0px",
          borderRadius: "3.5px",
          flex: "none",
          order: 0,
          flexGrow: 0,
          margin: "0px 0px",
          "&$helper-text": {
            color: "white",
          },
        },
        input: {
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",

          /* Fonter/Sub 1 */

          fontFamily: 'Source Sans Pro", sans-serif',
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "16px",
          lineHeight: "24px",
          /* identical to box height, or 150% */

          letterSpacing: "0.15px",

          /* Emphasis on Surface/High - Black 87% - Emphasis On Surface */

          color: "rgba(0, 0, 0, 0.87)",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        filled: {
          transform: "translate(16px, 16px) scale(1)",
          fontFamily: 'Source Sans Pro", sans-serif',
          fontStyle: "italic",
          fontWeight: "normal",
          fontSize: "16px",
          lineHeight: "24px",
          /* identical to box height, or 150% */

          display: "flex",
          alignItems: "center",
          letterSpacing: "0.15px",

          /* Emphasis on Surface/High - Black 87% - Emphasis On Surface */

          color: "rgba(0, 0, 0, 0.87)",
          "&$shrink": {
            transform: "translate(16px, 8px) scale(0.75)",
            fontFamily: 'Source Sans Pro", sans-serif',
            fontStyle: "normal",
            fontSize: "12px",
            lineHeight: "16px",
            /* or 133% */

            letterSpacing: "0.4px",

            /* Emphasis on Surface/Disabled - Black 38% - Emphasis On Surface */

            color: "rgba(0, 0, 0, 0.38)",

            /* Inside Auto Layout */

            flex: "none",
            order: 0,
            alignSelf: "stretch",
            flexGrow: 0,
            margin: "0px 0px",
            "&$focused": {
              color: PRIMARY_COLOR,
            },
          },
        },
        outlined: {
          fontFamily: 'Source Sans Pro", sans-serif',
          fontStyle: "italic",
          fontWeight: "normal",
          fontSize: "16px",
          lineHeight: "24px",

          display: "flex",
          alignItems: "center",
          letterSpacing: "0.15px",

          color: "rgba(0, 0, 0, 0.87)",
          "&$shrink": {
            transform: "translate(16px, -6px) scale(0.75)",
            fontFamily: 'Source Sans Pro", sans-serif',
            fontStyle: "normal",
            fontSize: "12px",
            lineHeight: "16px",

            letterSpacing: "0.4px",

            color: "rgba(0, 0, 0, 0.6)",

            flex: "none",
            order: 0,
            alignSelf: "stretch",
            flexGrow: 0,
            margin: "0px 0px",
            "&$focused": {
              color: PRIMARY_COLOR,
            },
          },
        },
        shrink: {
          transform: "translate(16px, 8px) scale(0.75)",
          fontFamily: 'Source Sans Pro", sans-serif',
          fontStyle: "normal",
          fontSize: "12px",
          lineHeight: "16px",
          /* or 133% */

          letterSpacing: "0.4px",

          /* Emphasis on Surface/Disabled - Black 38% - Emphasis On Surface */

          color: "rgba(0, 0, 0, 0.38)",

          /* Inside Auto Layout */

          flex: "none",
          order: 0,
          alignSelf: "stretch",
          flexGrow: 0,
          margin: "-15px 0px",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: 'Source Sans Pro", sans-serif',
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "12px",
          lineHeight: "16px",
          letterSpacing: "0.4px",
          color: "rgba(0, 0, 0, 0.6)",
          marginTop: "3px",
          margin: "3px 0px 0px 16px",
        },
        contained: {
          margin: "3px 0px 0px 16px",
          "&$focused": {
            color: PRIMARY_COLOR,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        filled: {},
      },
    },
    MuiAvatar: {
      defaultProps: {
        imgProps: {
          loading: "lazy",
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        circular: {
          backgroundColor: LOADING_SKELETON_COLOR,
        },
        text: { backgroundColor: LOADING_SKELETON_COLOR, transform: "none" },
        rectangular: {
          backgroundColor: LOADING_SKELETON_COLOR,
        },
      },
      defaultProps: {
        animation: "wave",
      },
    },
  },
});

export default theme;
