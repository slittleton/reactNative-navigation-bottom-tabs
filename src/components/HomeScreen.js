import React, { Component } from 'react';
import {View, Text, Button } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>HomeScreen</Text>
        <Button title="Go User" onPress={ ()=>{this.props.navigation.navigate('UserScreen')}}/>
      </View>
    )
  }
}
