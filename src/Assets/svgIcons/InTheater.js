import * as React from 'react';
import Svg, {Path, Defs, Pattern, Use, Image} from 'react-native-svg';

const InTheater = props => (
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

export default InTheater;
