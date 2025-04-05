import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";

function EmailIcon(props) {
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
      <Path fill="url(#pattern0_303_123)" d="M0 0H24V24H0z" />
      <Defs>
        <Pattern
          id="pattern0_303_123"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_303_123" transform="scale(.04167)" />
        </Pattern>
        <Image
          id="image0_303_123"
          width={24}
          height={24}
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAF8SURBVEiJ7ZU9UgJBEEZfI4ElasxfCph4h8XTcAQ9gRFV3sJbuHsGDASMgZyiykRpg/0WVnZ1pWCN7KpJZrrfN90zPWPuTplWKZX+FwJVADO7Bm4AOxLXgSd3fzbgFrgH3jWOYVWNO4C5FF+AurtzyADqYrnYOPAALIAx0DgA3hBjIaYnhzwGAuASCM2ssW9NFBOKEYi5vUXuPtHCBRCZWXMPeBOIFBuIxRcBiUyBPnCuTApF5BMqpi/GxjJ9IIcAqCmT1g/wlnZe086nuz65jeburxI5UyYZEc2F8gkUk7HfdHKHOJN2Ct7WzjtFwbkCZtYR4I34TE6BkZkNzWwIjDTXl0+kmFxzYJC6y11gBkyBVqp5HoGlxiNqSqAl3xnQTXEGYm8FUvAJ0MxppApQyZlvKmYjkghsSmRmPZVlRXzd5plU3dfuvs6Zn6tcK5Wrl6wlAleCL4lvRAZeZIoJxIjEBEp+7Haf6499d/6NnaDn2ty93A/n/9Mvsk+vrE2Mi0OfCQAAAABJRU5ErkJggg=="
        />
      </Defs>
    </Svg>
  );
}

export default EmailIcon;
