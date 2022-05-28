import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import {withNavigation} from '@react-navigation/compat';

import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image';
import axios from 'axios';

import colors from '../Themes/colors';

const width = Dimensions.get('screen').width;
const height = width * (3 / 4);

const HomeCarousel = ({navigation}) => {
  const [popularData, setPopularData] = useState({
    data: null,
    loading: true,
  });

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url:
          'https://api.themoviedb.org/3/trending/all/day?api_key=464b6412840269fe91e87ba7d6958784',
      });
      setPopularData({
        ...popularData,
        data: response.data.results.slice(0, 10),
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View
      style={{
        height,
        width,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
      }}
    >
      <Swiper
        containerStyle={{backgroundColor: 'white'}}
        autoplay
        loop
        autoplayTimeout={5}
        removeClippedSubviews={false}
        activeDot={<View style={styles.dotsActive} />}
        dot={<View style={styles.dotsInactive} />}
        paginationStyle={{
          bottom: 35,
        }}
      >
        {!popularData.loading &&
          popularData.data.map(item => {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  navigation.navigate('Detail', {
                    itemId: item.id,
                    initial: 'movie',
                  })
                }
              >
                <View
                  style={{
                    height,
                    width,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <FastImage
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`,
                    }}
                    style={{height, width}}
                    // resizeMode={FastImage.resizeMode.contain}
                  />
                  <View style={{bottom: 80, width: width - 50}}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 25,
                        fontWeight: '700',
                        textAlign: 'center',
                        shadowColor: '#000',
                        shadowOffset: {
                          width: 0,
                          height: 3,
                        },
                        shadowOpacity: 0.27,
                        shadowRadius: 4.65,

                        elevation: 6,
                      }}
                    >
                      {item.original_title
                        ? item.original_title
                        : item.original_name}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
      </Swiper>
    </View>
  );
};

export default withNavigation(HomeCarousel);

const styles = StyleSheet.create({
  dotsActive: {
    width: 18,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.PRIMARY,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
    zIndex: 3,
  },
  dotsInactive: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: colors.SECONDARY,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
    zIndex: 3,
  },
});
