import Image from "next/image";
import { styled } from "stitches.config";
import { Logo } from "components";

const EfdbBadge = ({ rating, ...props }) => (
  <StyledEfdbBadge {...props}>
    <Logo />
    <span className="rating">{rating}</span>
  </StyledEfdbBadge>
);

const StyledEfdbBadge = styled("div", {
  display: "flex",
  alignItems: "center",
  overflow: "hidden",

  ".rating": {
    fontWeight: "$2",
    display: "grid",
    placeItems: "center",
  },

  variants: {
    variant: {
      1: {
        justifyContent: "space-evenly",
        width: 144,
        height: 40,
        backgroundColor: "$paper",
        borderRadius: "$2",

        svg: {
          color: "$main",
        },
        ".rating": {
          color: "$heading",
        },
      },
      2: {
        justifyContent: "space-evenly",
        width: 144,
        height: 40,
        borderRadius: "$2",
        backgroundColor: "$main",

        ".rating": {
          color: "$black",
        },
      },
      3: {
        justifyContent: "space-between",
        width: 120,
        height: 32,
        borderRadius: "$1",
        backgroundColor: "$paper",
        svg: {
          color: "$main",
        },

        ".rating": {
          width: 48,
          height: "100%",
          backgroundColor: "$main",
          color: "$white",
        },
      },
      4: {
        justifyContent: "space-evenly",
        width: 120,
        height: 32,
        borderRadius: "$1",
        backgroundColor: "$main",
        svg: {
          color: "$paper",
        },

        ".rating": {
          width: 48,
          height: "100%",
        },
      },
    },
  },
});

export default EfdbBadge;
