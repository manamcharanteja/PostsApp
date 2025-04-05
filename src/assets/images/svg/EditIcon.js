import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";

function EditIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#pattern0_304_124)" d="M0 0H24V24H0z" />
      <Defs>
        <Pattern
          id="pattern0_304_124"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_304_124" transform="scale(.04167)" />
        </Pattern>
        <Image
          id="image0_304_124"
          width={24}
          height={24}
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAcFJREFUSInV1T9rVEEUBfCfi42Kf0AUlBRBt9AihY2NTUBQUBLFLxBELST6EUT8BJZiJYhYS2KlkIBYWIqx0oh/VkhYSQo1goXG4s7oqG9339MgeOCxb++de86dM29m+E8whOu4jQNrTb4XHXxEFysYzcl1xcAWzmAMG4r4SoovVZAfxFSqPYxFzGAPDuFxST6NVTzD/eK5g+09On+Pr5gs4jvSTG6Vg88l8vMVRFXItrzDE3zGeMqNCLuulQVTqfMm5N1EthWPksjFFO+Ihf+O2fQMwjBeFuQZ2zAn7FpEOydaNbvO5LPYJBZ0rsjtwk5hzQnM/1o8aAYjeF3ROezHgrClrQf6CWxJnX3BsQrhLt6ItemJfgKXE/ly6jIT1SbvJ9DCK9zFPj+sOJrea5H3ExgV++Nk0fWymNHbOuTrB+SPi6PiAU7hrPjuP6Xci4qavOuX6gi0xXnVwUZh1xVcxYceNTfS73gdgUvConmxDg/FZuqHzeWfQQJPhTV/jCY7+a8EFrB7jTiHEt9POC28nvxteDNcSDwTOZBvtJa4WMbwXJw7TTEsvrppceCtlgL5fQJHxK3UFF3cw81M/k/wDRQhb/xZuyezAAAAAElFTkSuQmCC"
        />
      </Defs>
    </Svg>
  );
}

export default EditIcon;
