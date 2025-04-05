import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";

function UserIcon(props) {
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
      <Path fill="url(#pattern0_303_122)" d="M0 0H24V24H0z" />
      <Defs>
        <Pattern
          id="pattern0_303_122"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_303_122" transform="scale(.04167)" />
        </Pattern>
        <Image
          id="image0_303_122"
          width={24}
          height={24}
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAH/SURBVEiJrdbNi01xGMDxz++aiEK6K4lm2BqMlzASmoWS/AvGziyUFGU1SzZWLCYslCRZSLKRlRRmGm9NVl6miSTvI0w087P4/cZcc+89d7rmqVPnPL/nPN/nPG8dMUZFF1pwBLfxES9xFbsavRtj1Mh5GwbwC1dwHCdwDxM4g1JTgBx5P16go8Z5D8ZxrFnAYfzGpgKbkxhDazOAG7jZIIUL81fsr2dTUl/a8bTgXIzxG55jXT2bIsAnlIsAWcr40AzgCbaHEFrqGYQQNmTAw7peCvK7USpyb53zeXiUA5nb7Bz0IuIclmZdCVuy4zGsbXrQssNufM6gd/ie7wewutH7ITuZntsy1udob2EJOtGBrxjEA2mad0uTPhhj/NKwBjiKHznKmB111rDbmWswaTeKQ4UpwsFsfAqt2IahrBvCRVzCs6x7nJthJU5nXXdNABblKPqmQQP24Tzu4g7OYg8pxRW2F6T5WVAL0JPbclmjwhU0RKu0Og7UWhVd6I8xvqkq1Awlxjic09Y1qasEtON+s84rpD/7qgIsx6tZALzOvqYAIYQ5mI+fswAYldb4FCDGOI732DoLgM14+/epogOuSVO6+D+6qCytkstVqyKEsErqgIDrUs9X75HaUsIO7JVafU2MceSfL8igNunvYcTUCpjJNYFhacpXVPr8A5ma6p0xqaUXAAAAAElFTkSuQmCC"
        />
      </Defs>
    </Svg>
  );
}

export default UserIcon;
