import React, {useRef, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Animated,
  Text,
  TouchableOpacity,
} from 'react-native';
import HomeCarousel from '../Components/HomeCarousel';
import NewSearchField from '../Components/NewSearchField';
import {iphoneHasNotch} from '../Utils/deviceInfo';
import {Popular, InTheater, ComingSoon} from '../Assets/svgIcons';
import colors from '../Themes/colors';
import BannerCollection from '../Components/BannerCollection';
import SectionCard from '../Components/SectionCard';
import axios from 'axios';

const size = Dimensions.get('screen').width;

const Home = () => {
  const scroll = useRef(new Animated.Value(0)).current;

  const [popularMovie, setPopularMovie] = useState({
    list: [],
    isloading: true,
  });

  const [popularTV, setPopularTV] = useState({
    list: [],
    isloading: true,
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url:
          'https://api.themoviedb.org/3/movie/popular?api_key=464b6412840269fe91e87ba7d6958784&language=en-US&page=1',
      });
      setPopularMovie({
        ...popularMovie,
        list: response.data.results.slice(0, 10),
        isloading: false,
      });
      const popularTV = await axios({
        method: 'GET',
        url:
          'https://api.themoviedb.org/3/tv/popular?api_key=464b6412840269fe91e87ba7d6958784&language=en-US&page=1',
      });
      setPopularTV({
        ...popularTV,
        list: popularTV.data.results.slice(0, 10),
        isloading: false,
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Animated.View
        style={[
          styles.searchContainer,
          {
            opacity: scroll.interpolate({
              inputRange: [0, 100, 200],
              outputRange: [0, 0, 1],
              extrapolate: 'clamp',
            }),
          },
        ]}
      />
      <View style={styles.searchPosition}>
        <View style={{flex: 1}}>
          <NewSearchField onPress={() => console.log('search')} />
        </View>
      </View>
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
              height: size * (3 / 4),
              width: size,
            },
            {
              transform: [
                {
                  translateY: scroll.interpolate({
                    inputRange: [-size, 0, size, size + 1],
                    outputRange: [-size / 2, 0, size * 0.75, size * 0.75],
                  }),
                },
                {
                  scale: scroll.interpolate({
                    inputRange: [-size, 0],
                    outputRange: [2 * 1.5, 1],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            },
          ]}
        >
          <HomeCarousel />
        </Animated.View>

        <View
          style={{
            backgroundColor: '#FFF',
            marginTop: -35,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}
        >
          <View
            style={{
              padding: 16,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}
          >
            <TouchableOpacity onPress={() => console.log('test')}>
              <View
                style={{
                  width: 90,
                  borderRadius: 10,
                  alignItems: 'center',
                }}
              >
                <ComingSoon />
                <Text style={{fontSize: 13, color: colors.PRIMARY}}>
                  Coming Soon
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('test')}>
              <View
                style={{
                  width: 90,
                  borderRadius: 10,
                  alignItems: 'center',
                }}
              >
                <Popular />
                <Text style={{fontSize: 13, color: colors.PRIMARY}}>
                  Popular
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('test')}>
              <View
                style={{
                  width: 90,
                  borderRadius: 10,
                  alignItems: 'center',
                }}
              >
                <InTheater />
                <Text style={{fontSize: 13, color: colors.PRIMARY}}>
                  In Theater
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <BannerCollection />
        {!popularMovie.isloading && (
          <SectionCard
            title={'Popular Movie'}
            isMore={() => console.log('more')}
            data={popularMovie}
            initial={'movie'}
          />
        )}
        {!popularTV.isloading && (
          <SectionCard
            title={'Popular TV'}
            isMore={() => console.log('more')}
            data={popularTV}
            initial={'tv'}
          />
        )}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    position: 'absolute',
    height: 116,
    backgroundColor: '#FFF',
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },
  searchPosition: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: iphoneHasNotch ? 32 : 18,
    backgroundColor: 'transparent',
    top: 20,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  notifContainer: {
    height: 36,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F9F9',
    borderRadius: 100,
  },
});

export default Home;
