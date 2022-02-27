import { useState } from "react";
import { styled } from "stitches.config";

const Switch = ({ value }) => {
  const [isActive, setIsActive] = useState(value);

  return (
    <StyledSwitch
      onClick={() => {
        setIsActive((prev) => !prev);
      }}
      active={isActive}
    />
  );
};

const StyledSwitch = styled("button", {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  width: 64,
  height: 32,
  borderRadius: 20,
  backgroundColor: "$borderDivider",
  p: "$1",
  transition: "250ms background-color, 250ms background",

  "&::after": {
    content: "",
    width: 24,
    height: 24,
    backgroundColor: "$white",
    borderRadius: "50%",
    transition: "220ms margin-left",
  },

  variants: {
    active: {
      true: {
        backgroundColor: "$color1",
        background: "$gradient",
        "&::after": {
          marginLeft: 32,
        },
      },
    },
  },
});

export default Switch;
