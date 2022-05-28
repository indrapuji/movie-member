import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SearchIcon = props => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M14.568 5.016a6.605 6.605 0 01.864 8.268c.144.12.264.252.432.372.24.192.564.432.972.708.408.288.672.468.792.564.504.372.876.684 1.128.936.384.384.72.78 1.008 1.2.3.42.528.828.708 1.248.168.42.252.816.216 1.2a1.457 1.457 0 01-.432.972 1.457 1.457 0 01-.972.432 2.551 2.551 0 01-1.188-.228 5.702 5.702 0 01-1.248-.708 8.485 8.485 0 01-1.2-1.008 9.856 9.856 0 01-.924-1.116c-.12-.156-.3-.42-.564-.792-.264-.384-.48-.684-.672-.936a6.94 6.94 0 00-.528-.6 6.604 6.604 0 01-7.728-1.176c-2.568-2.58-2.568-6.768 0-9.336a6.598 6.598 0 019.336 0zm-1.692 7.632a4.216 4.216 0 000-5.94 4.194 4.194 0 00-5.94 0 4.194 4.194 0 000 5.94 4.194 4.194 0 005.94 0z"
        fill="#4F6060"
      />
    </Svg>
  );
};

export default SearchIcon;