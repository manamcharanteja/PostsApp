import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowRightIcon({strokeColor='#D0D5DD',...props}) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.083 4.167L12.917 10l-5.834 5.834"
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ArrowRightIcon
