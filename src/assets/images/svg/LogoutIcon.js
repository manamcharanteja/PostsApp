import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LogoutIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.995 5.824A3 3 0 0012 3H5l-.176.005A3 3 0 002 6v12l.005.176A3 3 0 005 21h7l.176-.005A3 3 0 0015 18v-2l-.007-.117A1 1 0 0013 16v2l-.007.117A1 1 0 0112 19H5l-.117-.007A1 1 0 014 18V6l.007-.117A1 1 0 015 5h7l.117.007A1 1 0 0113 6v2l.007.117A1 1 0 0015 8V6l-.005-.176zm3.712 2.469l-.094-.083-.102-.07a1 1 0 00-1.218.153l-.083.094a1 1 0 00.083 1.32L18.585 11H7l-.117.007A1 1 0 007 13h11.584l-1.291 1.293-.083.094a1 1 0 001.497 1.32l2.96-2.958c.103-.094.186-.208.243-.334l.04-.104.037-.146a.98.98 0 00-.28-.872l-3-3z"
        fill="#F97066"
      />
    </Svg>
  )
}

export default LogoutIcon
