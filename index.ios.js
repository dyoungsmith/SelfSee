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
  // getEmotions() {
  //   let apiReqUrl = 'https://api.projectoxford.ai/emotion/v1.0/recognize';
  //   // Save imageUrl to db
  //   return fetch('/api/selfies', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       url: "http://universe.byu.edu/wp-content/uploads/2014/02/SelfiePolice_1.jpg"
  //     })
  //   })
  //   .then((res) => {
  //     console.log('THINGS ARE HAPPENING')
  //     res.json()
  //   })
  //   .then((resJson) => {
  //     console.log('FINISHED POSTING PIC')
  //     fetch(apiReqUrl, {
  //       method: 'POST',
  //       headers: { 
  //         'Content-Type': 'application/json',
  //         'Ocp-Apim-Subscription-Key': '94d515677e3a410c9ce8792baeb53c6c'
  //       },
  //       body: JSON.stringify({
  //         url: resJson.imageUrl // pass this in as props??
  //       })
  //     })
  //     .then((res) => res.json())
  //     .then((resJson) => {
  //       // for emo scores: resJson[0][scores] >> {anger: x, sadness: y, ..., surprise: z}
  //       console.log('RESPONSE', resJson)
  //       return [resJson[0][scores]] // should return scores {} 
  //     })
  //   })

  //   .catch((error) => {
  //     console.error(error);
  //   })
  // }

  saveSelfie() {
    return fetch('http://http://localhost:8080/api/selfies', {
      method: 'POST',
      body: JSON.stringify({
        url: "http://universe.byu.edu/wp-content/uploads/2014/02/SelfiePolice_1.jpg"
      })
    })
    .then((res) => res.json())
    .then((resJson) => {
      console.log('SAVED PHOTO??', resJson)
      return resJson
    })
    .catch((err) => {
      console.error(err);
    })
  }

  getEmotions() {
    let apiReqUrl = 'https://api.projectoxford.ai/emotion/v1.0/recognize';
    return fetch(apiReqUrl, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '94d515677e3a410c9ce8792baeb53c6c'
      },
      body: JSON.stringify({
        url: "http://universe.byu.edu/wp-content/uploads/2014/02/SelfiePolice_1.jpg" // pass this in as props??
      })
    })
    .then((res) => res.json())
    .then((resJson) => {
      console.log('RESPONSE', resJson)
      // let scores = createFragment(resJson[0][scores]) // should return scores {}
      return [resJson[0][scores]];
    })
    .catch((err) => {
      console.error(err);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Text>
            {this.saveSelfie()}
          </Text>
        </View>
      </View>
    );
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
