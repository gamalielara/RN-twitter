import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
export const CheckIconOutlined = () => (
  <Svg width={12} height={12} fill="none">
    <G clipPath="url(#a)">
      <Path
        fill="#AC8EC9"
        fillRule="evenodd"
        d="m9.746 1.903-5.12 5.34a.388.388 0 0 1-.537 0L1.994 5.558.918 6.606 4.62 9.853l6.47-6.643-1.343-1.307Zm2.143 1.562-6.993 7.18a.387.387 0 0 1-.538 0L.11 6.868a.363.363 0 0 1 0-.524l1.614-1.57c.149-.145.765-.145.913 0l1.71 1.674 5.12-5.34a.387.387 0 0 1 .538 0l1.883 1.834a.363.363 0 0 1 0 .523Z"
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

export const CheckIconFilled = () => (
  <Svg width={12} height={12} fill="none">
    <G clipPath="url(#a)">
      <Path
        fill="#AECB4F"
        fillRule="evenodd"
        d="m11.889 3.465-6.993 7.18a.387.387 0 0 1-.538 0L.11 6.868a.363.363 0 0 1 0-.524l1.614-1.57c.149-.145.765-.145.913 0l1.71 1.674 5.12-5.34a.387.387 0 0 1 .538 0l1.883 1.834a.363.363 0 0 1 0 .523Z"
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
