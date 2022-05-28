import React from 'react';
import {View} from 'react-native';
import colors from '../Themes/colors';

const Divider = () => {
  return <View style={{height: 8, borderTopWidth: 1, borderTopColor: colors.PRIMARY_P2, backgroundColor: colors.PRIMARY_P1}} />;
};

export default Divider;
