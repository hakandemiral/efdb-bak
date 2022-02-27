import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, theme } = createStitches({
  theme: {
    space: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "32px",
      5: "64px",
    },
    fontSizes: {
      1: "12px",
      2: "14px",
      3: "16px",
      4: "20px",
      5: "32px",
    },
    fontWeights: {
      1: 400,
      2: 500,
      3: 700,
    },
    fonts: {
      body: "'Inter', 'sans-serif'",
      heading: "'Lato', 'sans-serif'",
    },
    radii: {
      1: "4px",
      2: "8px",
      3: "16px",
    },
    colors: {
      main: "#EAA011",
      color1: "#744095",
      color2: "#5D48DE",
      gradient: "linear-gradient(90deg, $color1 0%, $color2 100%)",
      background: "#141414",
      borderDivider: "#746C6C",
      heading: "#FAFAFA",
      secondary: "#A7A0A0",
      white: "#FFFFFF",
      bodyText: "#EBEAEA",
      bgBlack70: "rgba(5, 5, 5, 0.7)",
      bgBlack40: "rgba(5, 5, 5, 0.4)",
      paper: "#1B1B1B",
      hover: "#2E2235",
      lightLinear: "#261C2C",
      green: "#0A8A51",
      black: "#000000",
      bgGradient:
        "linear-gradient(180deg, rgba(41, 41, 41, 0.25) 0%, rgba(82, 82, 82, 0.25) 0.01%, #141414 100%)",
    },
    shadows: {
      bgBlur: "blur(16px)",
      darkShadow: "0px 4px 8px 2px rgba(0, 0, 0, 0.75)",
      softShadow: "0px 1px 4px rgba(0, 0, 0, 0.75)",
      textShadow: "0px 0px 2px #FFFFFF;",
    },
  },
  media: {
    bp1: "(min-width: 480px)",
  },
  utils: {
    m: (value) => ({ margin: value }),
    p: (value) => ({ padding: value }),
    mx: (value) => ({ marginLeft: value, marginRight: value }),
    my: (value) => ({ marginTop: value, marginBottom: value }),
    px: (value) => ({ paddingLeft: value, paddingRight: value }),
    py: (value) => ({ paddingTop: value, paddingBottom: value }),
    textGradient: (value) => ({
      background: value,
      backgroundClip: "text",
      textFillColor: "transparent",
    }),
  },
});
