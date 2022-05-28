import * as React from 'react';
import Svg, {Path, Defs, Pattern, Use, Image} from 'react-native-svg';

const ComingSoon = props => (
  <Svg
    width={50}
    height={50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h96v96H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="scale(.01042)" />
      </Pattern>
      <Image
        id="b"
        width={50}
        height={50}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);

export default ComingSoon;
