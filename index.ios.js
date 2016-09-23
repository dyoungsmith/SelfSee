/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import Camera from 'react-native-camera';

class SelfSee extends Component {
  getInitialState() {
    return { cameraType: Camera.constants.Type.front }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            SelfSee
        </Text>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this._takePicture.bind(this)}>[CAPTURE]</Text>
        </Camera>
      </View>
    );
  }

  _takePicture() {
    this.camera.capture()
    .then((data) => console.log(data))
    .catch(err => console.log(err))
  }
};

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
  }
});


AppRegistry.registerComponent('SelfSee', () => SelfSee);
