import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ArrowIcon({ size = 24, color = '#667085', ...props }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.299 12.717a.997.997 0 01-.008-1.416v-.01L10.287 5.3a.99.99 0 011.419 0c.39.389.39 1.018 0 1.418L7.409 11.01H19c.55 0 .999.44.999 1 0 .548-.45.998-1 .998H7.43l4.285 4.282a.994.994 0 010 1.408h-.01c-.19.18-.45.29-.709.29l.011.011c-.27 0-.53-.11-.71-.29L4.301 12.72l-.002-.002z"
        fill={color}
      />
    </Svg>
  );
}

export default ArrowIcon;
