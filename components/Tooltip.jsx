import { styled } from "stitches.config";

const Tooltip = ({ children, message }) => (
  <StyledTooltip>
    {children}
    <div className="tooltip-message">{message}</div>
  </StyledTooltip>
);

const StyledTooltip = styled("span", {
  position: "relative",
  display: "inline-block",

  ".tooltip-message": {
    position: "absolute",
    top: 0,
    p: "$3",
    color: "$bodyText",
    backgroundColor: "$paper",
    borderRadius: "$2",
    boxShadow: "$softShadow",
    visibility: "hidden",
    opacity: 0,
    transition: "220ms opacity",
    transform: "translateY(calc(-100% - 12px))",

    "&::after": {
      content: "",
      position: "absolute",
      left: 20,
      bottom: -6,
      width: 12,
      height: 16,
      backgroundColor: "inherit",
      transform: "rotate(45deg)",
      boxShadow: "inherit",
    },
  },

  "&:hover": {
    ".tooltip-message": {
      opacity: 1,
      visibility: "visible",
    },
  },
});

export default Tooltip;
