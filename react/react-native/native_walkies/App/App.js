/**
 * App/App.js
 * Walkies - React Native App
 *  main app component
 */

import React, { Component } from 'react';
import { View } from 'react-native';

// import header component
import Header from './components/Header/Header';

export default class App extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>
        <Header />
        <View style={{flex: 8, backgroundColor: 'skyblue'}} />
        <View style={{flex: 1, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}
