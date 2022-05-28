import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {SearchIcon} from '../Assets/svgIcons';

const NewSearchField = ({onPress}) => {
  return (
    <View
      style={{
        backgroundColor: '#FFF',
        borderRadius: 10,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'grey',
      }}
    >
      <SearchIcon size={24} />

      <Pressable style={{paddingVertical: 12}} onPress={onPress}>
        <Text
          style={{
            fontSize: 12,
            marginLeft: 8,
            flex: 1,
            color: 'grey',
          }}
        >
          Search for a movie, tv show...
        </Text>
      </Pressable>
    </View>
  );
};

export default NewSearchField;
