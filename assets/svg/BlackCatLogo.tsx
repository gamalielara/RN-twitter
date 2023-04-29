import * as React from "react";
import Svg, { G, Path, Circle, Defs, ClipPath } from "react-native-svg";
const BlackCatLogo = () => (
  <Svg
    width={64}
    height={64}
    fill="none"
    style={{ marginRight: "auto", marginLeft: "auto" }}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#D5EF7F"
        fillRule="evenodd"
        d="m27.552 8-7.027 5.642L11 31.396l6.657 14.426-3.05 3.236V51h5.036l1.238-.668 1.002.668h25.551v-2.311l-5.733-5.733V35.65l3.065-4.978h1.108l.555 4.345h1.615l.42-7.582h-5.7l-4.561 7.382v10.014l3.703 3.307h-8.905l3.614-3.333V34.54l-8.332-11.786h5.28l2.497-2.362-4.439-6.75-4.624-1.388L27.552 8Z"
        clipRule="evenodd"
      />
      <Circle cx={32} cy={32} r={30} stroke="#D5EF7F" />
      <Circle cx={32} cy={32} r={32} stroke="#D5EF7F" opacity={0.3} />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h64v64H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default BlackCatLogo;
