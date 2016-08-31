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
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const PLAY = require('./images/play.png');
const PAUSE = require('./images/pause.png');

class ImageProblem extends Component {
  state = {
    isPlaying: false,
  };

  toggle = () => this.setState({
    isPlaying: !this.state.isPlaying,
  });

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.toggle}>
          <Image
            source={this.state.isPlaying
              ? PAUSE
              : PLAY}
            style={{
              width: 50,
              height: 50,
            }} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

AppRegistry.registerComponent('ImageProblem', () => ImageProblem);
