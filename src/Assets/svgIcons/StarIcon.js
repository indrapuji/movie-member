import React from 'react';
import Svg, {Path} from 'react-native-svg';
import PropTypes from 'prop-types';

function StarIcon({size, color, ...props}) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path d="M12 17.77l6.18 3.73-1.64-7.03L22 9.74l-7.19-.61L12 2.5 9.19 9.13 2 9.74l5.46 4.73-1.64 7.03L12 17.77z" fill={color} />
    </Svg>
  );
}

StarIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

StarIcon.defaultProps = {
  color: '#EFD50C',
  size: 24,
};

export default StarIcon;
