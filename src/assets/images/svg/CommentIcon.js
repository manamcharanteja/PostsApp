import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";

function CommentIcon(props) {
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
      <Path fill="url(#pattern0_303_121)" d="M0 0H24V24H0z" />
      <Defs>
        <Pattern
          id="pattern0_303_121"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_303_121" transform="scale(.04167)" />
        </Pattern>
        <Image
          id="image0_303_121"
          width={24}
          height={24}
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAACxAAAAsQHGLUmNAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAdNJREFUSIm11LtrVEEUx/HPxoTEoBgUo4QgFoISERQ7O0EFH/gobCOWKaztBBvx0UrANmIj+BeIiMSgWIiJjU9QIUoUxKALSiJrMefqzTLZ3bjJFwbunZnzm3POzDmsMJUGa+uxHZvQtcieOczgJb62eugxPMA8ai2O+bA52iiCNRjDqfj/gInw8NciznRjM/ZhS8zdwRlUyxt7QqyGFzjcUqwLHT2CV6ExEYf/ZTQWHmLdEsXL9JUcvV5MDkk5nMHGNsQL+vFFegA7OnEWq3A1FspswwUphTl+4pKU1oLPuIJroW1SCmkgIzCs+QsaztgNxtqzCmbxW3r39VSwU92Flfgh1UCOb3GIqpT/5eajlEKvpQjWZjbtx7RUpbkxjUMZux7pkt93YBwdUgXXU0FnAy9r8kV4MOwew4HY+LyJWKt042lonigm78XEqMYNsBlduBVa98tag9Kl1HBb6qBLpR93Q+NdTmMIb2LDd9zECE7H2CvdVY6T+BS2k+Fwlj6pCqvyRTUudd2CAal7Fus3sLpZqNCL4ziPy3HoVIhcjEhG/Cumt9LLaYtdITaFR/E9J/Wc3nbFYauF6XqCPcshXLBBauuzOCd14GVnt/97wivHH7sDilfgmvCrAAAAAElFTkSuQmCC"
        />
      </Defs>
    </Svg>
  );
}

export default CommentIcon;
