import { theme } from "stitches.config";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";

const RangeSelect = ({ ...props }) => (
  <Range
    trackStyle={[{ height: 16, background: theme.colors.gradient }]}
    handleStyle={[
      {
        height: 26,
        width: 26,
        backgroundColor: theme.colors.borderDivider,
        borderColor: theme.colors.paper,
        borderWidth: 3,
        boxShadow: "none !important",
      },
      {
        height: 26,
        width: 26,
        backgroundColor: theme.colors.borderDivider,
        borderColor: theme.colors.paper,
        borderWidth: 3,
        boxShadow: "none !important",
      },
    ]}
    railStyle={{ height: 16, backgroundColor: theme.colors.paper }}
    dotStyle={null}
    activeDotStyle={null}
    {...props}
  />
);

export default RangeSelect;
