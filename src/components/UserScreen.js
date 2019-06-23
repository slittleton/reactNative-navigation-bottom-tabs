import React, { Component } from 'react';
import {View, Text, Button } from 'react-native';

export default class UserScreen extends Component {
  render() {
    return (
      <View>
        <Text>UserScreen</Text>
        <Button title="Go Home" onPress={ ()=>{this.props.navigation.navigate('HomeScreen')}}/>
      </View>
    )
  }
}
