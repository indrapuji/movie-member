import React from 'react';
import Splash from './src/Screens/Splash';
import Home from './src/Screens/Home';
import Detail from './src/Screens/Detail';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import colors from './src/Themes/colors';
import {Image} from 'react-native';

// const HOME_TAB_ICON_ACTIVE = (
//   <Image
//     style={{height: 32, width: 32}}
//     source={require('./src/Assets/tabbar-icon/home.png')}
//   />
// );
// const HOME_TAB_ICON_INACTIVE = (
//   <Image
//     style={{height: 32, width: 32}}
//     source={require('./src/Assets/tabbar-icon/home_disabled.png')}
//   />
// );
// const FAV_TAB_ICON_ACTIVE = (
//   <Image
//     style={{height: 32, width: 32}}
//     source={require('./src/Assets/tabbar-icon/more.png')}
//   />
// );
// const FAV_TAB_ICON_INACTIVE = (
//   <Image
//     style={{height: 32, width: 32}}
//     source={require('./src/Assets/tabbar-icon/more_disabled.png')}
//   />
// );
// const PROFILE_TAB_ICON_ACTIVE = (
//   <Image
//     style={{height: 32, width: 32}}
//     source={require('./src/Assets/tabbar-icon/profile.png')}
//   />
// );
// const PROFILE_TAB_ICON_INACTIVE = (
//   <Image
//     style={{height: 32, width: 32}}
//     source={require('./src/Assets/tabbar-icon/profile_disabled.png')}
//   />
// );

// const BottomTab = createBottomTabNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <BottomTab.Navigator
//         detachInactiveScreens
//         initialRouteName={'Home'}
//         screenOptions={{
//           activeTintColor: 'black',
//           inactiveTintColor: 'grey',
//           headerShown: false,
//           style: {
//             borderWidth: 0,
//             borderTopColor: 'transparent',
//             backgroundColor: colors.PRIMARY,
//             alignItems: 'center',
//             justifyContent: 'center',
//             shadowColor: 'black',
//             shadowOpacity: 0.3,
//             elevation: 6,
//             shadowRadius: 6,
//             shadowOffset: {
//               height: 1,
//               width: 1,
//             },
//           },
//         }}
//       >
//         <BottomTab.Screen
//           name="Home"
//           component={Home}
//           options={{
//             title: 'Home',
//             tabBarIcon: ({focused}) =>
//               focused ? HOME_TAB_ICON_ACTIVE : HOME_TAB_ICON_INACTIVE,
//           }}
//         />
//         <BottomTab.Screen
//           name="Favorite"
//           component={Favorite}
//           options={{
//             title: 'Favorite',
//             tabBarIcon: ({focused}) =>
//               focused ? FAV_TAB_ICON_ACTIVE : FAV_TAB_ICON_INACTIVE,
//           }}
//         />
//         <BottomTab.Screen
//           name="Account"
//           component={Account}
//           options={{
//             title: 'Account',
//             tabBarIcon: ({focused}) =>
//               focused ? PROFILE_TAB_ICON_ACTIVE : PROFILE_TAB_ICON_INACTIVE,
//           }}
//         ></BottomTab.Screen>
//       </BottomTab.Navigator>
//     </NavigationContainer>
//   );
// };

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
