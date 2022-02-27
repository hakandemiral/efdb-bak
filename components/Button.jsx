import { styled } from "stitches.config";

const Button = ({ label, icon, ...props }) => (
  <StyledButton {...props}>
    {icon && icon}
    {label}
  </StyledButton>
);

const StyledButton = styled("button", {
  display: "flex",
  alignItems: "center",
  borderRadius: "$1",
  lineHeight: "24px",
  fontSize: "$3",
  fontWeight: 700,
  cursor: "pointer",
  userSelect: "none",

  ".ricon": {
    marginRight: "$2",
  },

  variants: {
    type: {
      primary: {
        background: "$gradient",
        color: "$white",
      },
      secondary: {
        color: "$color2",
        border: "1px solid $color1",
        textGradient: "$gradient",
        ".ricon": {
          color: "$color1",
        },
      },
    },

    size: {
      short: {
        p: "$3",
      },
      long: {
        px: "$4",
        py: "$3",
      },
      small: {
        color: "$bodyText",
        px: "$3",
        py: "$2",
        fontWeight: 500,
      },
    },
  },
  defaultVariants: {
    type: "primary",
    size: "short",
  },
});

export default Button;
