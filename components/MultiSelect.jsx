import { styled } from "stitches.config";
import Select from "react-select";

const options = [
  { value: 1, label: "Aksiyon" },
  { value: 2, label: "Macera" },
  { value: 3, label: "Komedi" },
];

const MultiSelect = ({ ...props }) => (
  <StyledMultiSelect
    placeholder="Tür ara..."
    classNamePrefix="react-select"
    options={options}
    isMulti
    components={{
      IndicatorSeparator: () => null,
    }}
    {...props}
  />
);

const StyledMultiSelect = styled(Select, {
  ".react-select": {
    "&__control": {
      backgroundColor: "$paper",
      height: 56,
      borderRadius: "$2",
      border: "none !important",
      boxShadow: "none !important",
      color: "$white",
    },

    "&__menu": {
      backgroundColor: "$paper",
      "&-list": {
        padding: "$2",
        borderRadius: "$2",
        boxShadow: "$darkShadow",

        ".react-select": {
          "&__option": {
            borderRadius: "$2",
            padding: 16,
            color: "$bodyText",
            cursor: "pointer",
            backgroundColor: "transparent",

            "&--is-focused": {
              backgroundColor: "none",
            },

            "&:hover": {
              backgroundColor: "$hover",
              color: "$color2",
            },
          },
        },
      },
    },

    "&__multi-value": {
      backgroundColor: "$hover",
      border: "1px solid $color1",
      borderRadius: "$1",
      mx: "$1",

      "&__label": {
        color: "$bodyText",
      },
      "&__remove": {
        color: "$color1",
        cursor: "pointer",

        "&:hover": {
          backgroundColor: "$color1",
          color: "$white",
        },
      },
    },
    "&__input-container": {
      color: "$white",
    },
  },
});

export default MultiSelect;
