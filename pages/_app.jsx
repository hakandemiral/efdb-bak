import { globalCss } from "stitches.config";

const globalStyles = globalCss({
  ":root": {
    backgroundColor: "$background",
  },
  body: {
    "#__next > *": {
      m: "$3",
    },
  },
  "*": {
    margin: 0,
    padding: 0,
    listStyle: "none",
    listStyle: "none",
    border: "none",
    textDecoration: "none",
    boxSizing: "border-box",
    fontFamily: "$body",
    "&:focus": {
      outline: 0,
    },
  },
  ".ricon": {
    fontSize: 24,
  },
});

function MyApp({ Component, pageProps }) {
  globalStyles();

  return <Component {...pageProps} />;
}

export default MyApp;
