/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class SelfSee extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native, fool!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <MKButton
  backgroundColor={MKColor.Teal}
  shadowRadius={2}
  shadowOffset={{width:0, height:2}}
  shadowOpacity={.7}
  shadowColor="black"
  onPress={() => {
    console.log('hi, raised button!');
  }}
  >
  <Text pointerEvents="none"
        style={{color: 'white', fontWeight: 'bold',}}>
    RAISED BUTTON
  </Text>
</MKButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SelfSee', () => SelfSee);
