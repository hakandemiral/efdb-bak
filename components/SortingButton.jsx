import { useState } from "react";
import { FaSortNumericDown, FaSortNumericDownAlt } from "react-icons/fa";
import { styled } from "stitches.config";

const SortingButton = () => {
  const [sorting, setSorting] = useState("asc");

  const handleSorting = () => {
    setSorting((prev) => {
      if (prev === "asc") {
        return "desc";
      } else {
        return "asc";
      }
    });
  };

  return (
    <StyledSortingButton onClick={handleSorting}>
      {sorting === "asc" ? <FaSortNumericDown /> : <FaSortNumericDownAlt />}
      <span className="button-text">
        EFDB Puanı:{" "}
        {sorting === "asc" ? "Düşükten Yükseğe" : "Yüksekten Düşüğe"}
      </span>
    </StyledSortingButton>
  );
};

const StyledSortingButton = styled("button", {
  p: "$3",
  backgroundColor: "$background",
  borderRadius: "$2",
  border: "1px solid $borderDivider",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",

  svg: {
    marginRight: "$2",
    color: "$borderDivider",
  },

  ".button-text": {
    color: "$bodyText",
    fontWeight: 700,
  },
});

export default SortingButton;
