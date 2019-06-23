
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './src/components/HomeScreen';
import UserScreen from './src/components/UserScreen';
import SettingScreen from './src/components/SettingScreen';

import HomeIcon from './src/img/home.png'
import UserIcon from './src/img/user.png'


/* 
// You can combine nagivation types ex bottomTab and stack 
// each stack in this instance will have its own set of screens
// in this example if you press stack2 you have access to stack2 screens
// stack2 screens do not contain home or user, but if you press button it takes you
// to the other stack. 
// if you press the button within stack 1 you stay in stack1 for user or home 
const Stack1 = createStackNavigator({
  HomeScreen: HomeScreen,
  UserScreen: UserScreen
})
const Stack2 = createStackNavigator({
  SettingScreen:SettingScreen
})
const AppNavigator = createBottomTabNavigator({
  Stack1: Stack1,
  Stack2: Stack2
})

*/


const AppNavigator = createBottomTabNavigator ({
  HomeScreen: HomeScreen,
  UserScreen: UserScreen
},{
  initialRouteName: 'HomeScreen',
  order: ['UserScreen', 'HomeScreen'],
  tabBarOptions: {
    activeTintColor: 'purple',
    activeBackgroundColor: 'lightgreen',
    inactiveTintColor: 'black',
    inactiveBackgroundColor: 'lightgray',
    showLabel: true, // set to false to hide label words ex- "HomeScreen" will not show
    labelStyle: {
      fontSize: 15
    },
    tabStyle: {
      border: 3
    }
  },
  defaultNavigationOptions: ({navigation})=> ({
    tabBarIcon: ({focused, horizontal, tintColor})=>{
      const { routeName } = navigation.state;
      if(routeName === 'HomeScreen'){
        return <Image source={HomeIcon} style={{width:20,height:20}}/>
      }
      if(routeName === 'UserScreen'){
        return <Image source={UserIcon} style={{width: 20, height: 20}}/>
      }
      
    },
    tabBarOnPress:({navigation, defaultHandler})=>{
      if(navigation.state.key === 'UserScreen'){

        // alert('hello');

        navigation.navigate('UserScreen')
      }else {
        defaultHandler()
      }
    }
  })
}
)
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}




