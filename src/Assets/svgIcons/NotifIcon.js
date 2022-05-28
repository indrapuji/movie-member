import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import PropTypes from 'prop-types';

function NotifIcon({size, color, ...props}) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M12.488 21.755c1.458 0 2.255-1.031 2.255-2.485h-4.514c0 1.454.797 2.485 2.26 2.485zM19.805 16.89c-.722-.952-1.142-1.51-1.142-5.771 0-4.374-2.931-6.131-4.731-6.553-.169-.042-.29-.099-.29-.277v-.136c0-.628-.516-1.158-1.144-1.153-.629-.01-1.144.525-1.144 1.153v.136c0 .174-.122.235-.29.277-1.806.426-4.732 2.18-4.732 6.553 0 4.26-.42 4.814-1.142 5.77a.93.93 0 00.745 1.49h13.13c.764 0 1.204-.88.74-1.49z"
        fill={color}
      />
    </Svg>
  );
}

NotifIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

NotifIcon.defaultProps = {
  color: '#17948C',
  size: 24,
};

export default NotifIcon;
