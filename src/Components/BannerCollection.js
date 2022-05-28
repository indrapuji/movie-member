import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

import axios from 'axios';
import colors from '../Themes/colors';

const width = Dimensions.get('screen').width;

const BannerCollection = () => {
  const [data, setData] = useState({
    list: null,
    loading: true,
  });

  useEffect(() => {
    getCollection();
  }, []);

  const getCollection = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/collection?api_key=464b6412840269fe91e87ba7d6958784&language=en-US&query=harry%20potter&page=1',
      });
      setData({...data, list: response.data.results[0], loading: false});
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <>
      {!data.loading && (
        <TouchableOpacity style={{backgroundColor: 'black', flexDirection: 'row', padding: 16, justifyContent: 'space-between'}}>
          <FastImage source={{uri: `https://image.tmdb.org/t/p/w300${data.list.poster_path}`}} style={{height: 200, width: 200 / 1.5}} />
          <View style={{justifyContent: 'space-between'}}>
            <Text style={{color: 'white', fontSize: 25, fontWeight: '700', width: width / 2.2}}>{data.list.original_name}</Text>
            <Text style={{color: 'white', fontSize: 13, fontWeight: '500', width: width / 2.4}}>{data.list.overview}</Text>
            <TouchableOpacity
              style={{height: 30, width: 100, backgroundColor: colors.PRIMARY, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}
            >
              <Text style={{color: colors.SECONDARY, fontWeight: '700', fontSize: 15}}>Detail</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default BannerCollection;

const styles = StyleSheet.create({});
