import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { Color } from "../../utils/constants";
const BackIcon = () => (
  <Svg width={24} height={24} fill="none">
    <Path
      fill={Color.WHITE}
      d="m4.31 11.25 7.22-7.22-1.06-1.06-8.495 8.494a.748.748 0 0 0 0 1.072l8.495 8.494 1.06-1.06-7.22-7.22H22.5v-1.5H4.31Z"
    />
  </Svg>
);
export default BackIcon;
