import { styled } from "stitches.config";
import { Tooltip } from "components";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

const InfoCard = ({ icon, description, info, header }) => (
  <StyledInfoCard>
    {icon && <div className="icon">{icon}</div>}
    <span>
      <h5>{header}</h5>
      <div className="description">
        <span>{description}</span>
        {info && (
          <span className="info">
            <Tooltip message={info}>
              <HiOutlineQuestionMarkCircle />
            </Tooltip>
          </span>
        )}
      </div>
    </span>
  </StyledInfoCard>
);

const StyledInfoCard = styled("div", {
  display: "flex",
  alignItems: "center",
  backgroundColor: "$paper",
  maxWidth: 640,
  borderRadius: "$3",
  p: "$4",

  ".icon": {
    width: 56,
    height: 56,
    borderRadius: "$2",
    backgroundColor: "$lightLinear",
    display: "grid",
    placeItems: "center",
    marginRight: "$3",

    ".ricon": {
      color: "$color2",
    },
  },

  span: {
    h5: {
      fontSize: "$4",
      fontWeight: "$2",
      color: "$heading",
    },

    ".description": {
      display: "flex",
      alignItems: "center",
      color: "$secondary",

      ".info": {
        marginLeft: "$2",
        display: "grid",
        placeItems: "center",
      },
    },
  },
});

export default InfoCard;
