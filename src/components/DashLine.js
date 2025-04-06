import * as React from "react";
import { Dimensions } from "react-native";
import Svg, { G, Rect } from "react-native-svg";
import { Colors } from "../theme/colors";

function DashLine({ fill = Colors.gray300, spacing = 16, ...props }) {
  const { width } = Dimensions.get("screen");
  const dashes = new Array(Math.floor(width / spacing)).fill(null);
  return (
    <Svg height="11" width="100%">
      <G>
        {dashes.map((_, index) => (
          <Rect
            key={index}
            x="11"
            y="10"
            width="5"
            height="1"
            fill={fill}
            translateX={spacing * index}
            {...props}
          />
        ))}
      </G>
    </Svg>
  );
}

export default DashLine;
