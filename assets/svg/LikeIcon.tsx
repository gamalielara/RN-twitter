import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export const LikeIconOutlined = () => (
  <Svg width={12} height={12} fill="none">
    <G clipPath="url(#a)">
      <Path
        fill="#AC8EC9"
        fillRule="evenodd"
        d="M8.25 1.5c-.87 0-1.705.405-2.25 1.045A2.994 2.994 0 0 0 3.75 1.5C2.21 1.5 1 2.71 1 4.25c0 1.89 1.7 3.43 4.275 5.77l.725.655.725-.66C9.3 7.68 11 6.14 11 4.25 11 2.71 9.79 1.5 8.25 1.5Zm-2.2 7.775-.05.05-.05-.05C3.57 7.12 2 5.695 2 4.25c0-1 .75-1.75 1.75-1.75.77 0 1.52.495 1.785 1.18h.935c.26-.685 1.01-1.18 1.78-1.18 1 0 1.75.75 1.75 1.75 0 1.445-1.57 2.87-3.95 5.025Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h12v12H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const LikeIconFilled = () => (
  <Svg width={12} height={12} fill="none">
    <G clipPath="url(#a)">
      <Path
        fill="#FF5C5C"
        fillRule="evenodd"
        d="M8.25 1.5c-.87 0-1.705.405-2.25 1.045A2.994 2.994 0 0 0 3.75 1.5C2.21 1.5 1 2.71 1 4.25c0 1.89 1.7 3.43 4.275 5.77l.725.655.725-.66C9.3 7.68 11 6.14 11 4.25 11 2.71 9.79 1.5 8.25 1.5Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h12v12H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
