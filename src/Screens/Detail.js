import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import FastImage from 'react-native-fast-image';
import {StarIcon, ArrowLeftIcon} from '../Assets/svgIcons';

const Detail = ({route, navigation}) => {
  const scroll = useRef(new Animated.Value(0)).current;
  const width = Dimensions.get('screen').width;
  const {itemId, initial} = route.params;
  const [detail, setDetail] = useState({
    data: null,
    loading: true,
  });
  console.log(itemId);

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/${initial}/${itemId}?api_key=464b6412840269fe91e87ba7d6958784&language=en-US`,
      });

      setDetail({...detail, data: response.data, loading: false});
    } catch (error) {
      console.log('detail', error.response.data.success);
      if (!error.response.data.success) {
        navigation.goBack();
      }
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 50,
          marginHorizontal: 16,
          zIndex: 2,
        }}
        onPress={() => navigation.goBack()}
      >
        <ArrowLeftIcon color={'white'} size={30} />
      </TouchableOpacity>
      {!detail.loading && (
        <Animated.ScrollView
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scroll}}}],
            {
              useNativeDriver: true,
            },
          )}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >
          <Animated.View
            style={[
              {
                height: 550,
                width: width,
              },
              {
                transform: [
                  {
                    translateY: scroll.interpolate({
                      inputRange: [-width, 0, width, width + 1],
                      outputRange: [-width / 2, 0, width * 0.75, width * 0.75],
                    }),
                  },
                  {
                    scale: scroll.interpolate({
                      inputRange: [-width, 0],
                      outputRange: [2 * 1.5, 1],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              },
            ]}
          >
            <FastImage
              source={{
                uri: `https://image.tmdb.org/t/p/w300${detail.data.poster_path}`,
                priority: FastImage.priority.normal,
              }}
              style={{
                height: width * 1.5,
                width: width,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          </Animated.View>
          <View
            style={{
              backgroundColor: '#FFF',
              marginTop: 10,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              marginBottom: 20,
            }}
          >
            <View style={{paddingHorizontal: 16, paddingVertical: 10}}>
              <Text style={{fontWeight: '700', fontSize: 20}}>
                {detail.data.original_title
                  ? detail.data.original_title
                  : detail.data.original_name}
              </Text>
              <View style={{flexDirection: 'row'}}>
                {detail.data.genres.slice(0, 5).map((item, index) => {
                  return (
                    <View
                      key={item.id}
                      style={{
                        backgroundColor: 'red',
                        borderRadius: 10,
                        padding: 5,
                        marginTop: 10,
                        marginLeft: index === 0 ? 0 : 10,
                      }}
                    >
                      <Text style={{fontSize: 11}}>{item.name}</Text>
                    </View>
                  );
                })}
              </View>
              <View style={{marginTop: 10}}>
                <Text style={{fontSize: 11, color: 'grey'}}>
                  {detail.data.release_date
                    ? detail.data.release_date
                    : detail.data.first_air_date}
                </Text>
              </View>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                {Array.apply(
                  null,
                  Array(Math.round(Number(detail.data.vote_average) / 2)),
                ).map((item, index) => {
                  return (
                    <View key={index}>
                      <StarIcon size={20} />
                    </View>
                  );
                })}
                {Array.apply(
                  null,
                  Array(Math.round(5 - Number(detail.data.vote_average) / 2)),
                ).map((item, index) => {
                  return (
                    <View key={index}>
                      <StarIcon size={20} color={'grey'} />
                    </View>
                  );
                })}

                <Text style={{marginLeft: 5, fontSize: 13, color: 'grey'}}>
                  {Math.round(Number(detail.data.vote_average))} / 10
                </Text>
              </View>

              <View style={{marginTop: 15}}>
                <Text style={{fontSize: 15}}>{detail.data.overview}</Text>
              </View>
            </View>
          </View>
        </Animated.ScrollView>
      )}
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
