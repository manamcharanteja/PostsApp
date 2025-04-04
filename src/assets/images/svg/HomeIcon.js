import * as React from "react"
import Svg, { G, Rect, Path, Defs } from "react-native-svg"

function HomeIcon(props) {
  return (
    <Svg
      width={68}
      height={59}
      viewBox="0 0 68 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_d_318_3940)">
        <Rect
          x={16}
          y={11}
          width={36}
          height={36}
          rx={18}
          fill="#F2F4F7"
          shapeRendering="crispEdges"
        />
        <Path
          d="M28 28.043c0-.383 0-.574.05-.75a1.33 1.33 0 01.211-.434c.11-.147.26-.265.563-.5l4.521-3.516c.234-.183.352-.274.48-.309a.666.666 0 01.35 0c.129.035.246.127.48.309l4.521 3.516c.303.235.454.353.563.5.096.13.168.277.212.434.049.176.049.367.049.75v4.824c0 .746 0 1.12-.145 1.405-.128.25-.332.455-.583.583-.285.145-.659.145-1.405.145h-7.734c-.746 0-1.12 0-1.405-.145a1.334 1.334 0 01-.583-.583C28 33.987 28 33.613 28 32.867v-4.824z"
          stroke="#000"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs></Defs>
    </Svg>
  )
}

export default HomeIcon