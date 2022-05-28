import React from 'react';
import Svg, {Path} from 'react-native-svg';

import PropTypes from 'prop-types';

const ArrowLeftIcon = ({color, size, ...props}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 11H7.8l5.6-5.6L12 4l-8 8 8 8 1.4-1.4L7.8 13H20v-2z"
        fill={color}
      />
    </Svg>
  );
};

ArrowLeftIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

ArrowLeftIcon.defaultProps = {
  color: 'black',
  size: 24,
};

export default ArrowLeftIcon;
