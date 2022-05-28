import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {withNavigation} from '@react-navigation/compat';

import colors from '../Themes/colors';
import FastImage from 'react-native-fast-image';
import {StarIcon} from '../Assets/svgIcons';
import Divider from './Divider';

const SectionCard = ({data, title, isMore, divider, navigation, initial}) => {
  const cutText = title => {
    if (title.length > 15) {
      return `${title.slice(0, 14)}...`;
    } else {
      return title;
    }
  };
  return (
    <View>
      <View
        style={{
          padding: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              height: 20,
              width: 3,
              backgroundColor: colors.PRIMARY,
              marginRight: 5,
            }}
          />
          <Text style={{fontSize: 15, fontWeight: '700'}}>{title}</Text>
        </View>
        <TouchableOpacity onPress={isMore}>
          <Text style={{color: colors.PRIMARY}}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{paddingBottom: 16}}
        data={data.list}
        keyExtractor={(item, index) => `item${index}`}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                width: 150,
                height: 275,
                marginLeft: 16,
                marginRight: index === 9 ? 16 : 0,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() =>
                navigation.navigate('Detail', {
                  itemId: item.id,
                  initial: initial,
                })
              }
            >
              <FastImage
                source={{
                  uri: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
                  priority: FastImage.priority.normal,
                }}
                style={{
                  height: 223,
                  width: 149,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
              <View
                style={{
                  width: 150,
                  height: 48,
                  backgroundColor: 'white',
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: 5,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}
              >
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <StarIcon size={15} />
                  <Text style={{fontSize: 11, marginLeft: 5}}>
                    {item.vote_average}
                  </Text>
                </View>
                <Text>
                  {item.original_title
                    ? cutText(item.original_title)
                    : cutText(item.original_name)}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      {divider && <Divider />}
    </View>
  );
};

export default withNavigation(SectionCard);

const styles = StyleSheet.create({});
