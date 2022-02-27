import { styled } from "stitches.config";

const CategoryTag = ({ label }) => (
  <StyledCategoryTag>{label}</StyledCategoryTag>
);

const StyledCategoryTag = styled("span", {
  display: "inline-block",
  color: "$bodyText",
  p: "$2",
  border: "1px solid $borderDivider",
  borderRadius: "$1",
  backgroundColor: "$paper",
});

export default CategoryTag;
