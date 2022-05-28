import React from 'react';
import {View, Text, StyleSheet, Dimensions, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import colors from '../Themes/colors';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Home');
  }, 5000);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.PRIMARY} />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={2000}
          source={require('../Assets/images/logo.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
        <Animatable.View animation="bounceInUp" duration={2000}>
          <Text style={styles.logoText}>Cinema Apps</Text>
          <Text style={styles.logoSubText}>Million of movie to discover</Text>
        </Animatable.View>
      </View>
    </View>
  );
};

export default Splash;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.48;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  logoText: {
    textAlign: 'center',
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
    marginTop: -30,
  },
  logoSubText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    marginTop: -10,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginBottom: 10,
    marginRight: 10,
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 20,
    marginBottom: 10,
    fontSize: 20,
  },
});
