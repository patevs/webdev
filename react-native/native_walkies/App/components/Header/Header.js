
/**
  App/components/Header/Header.js
  Header component
**/

import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

// Header component class
export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      titleText: "Walkies"
    };
  }

  render() {
    return (
      <Text style={styles.titleText}> {this.state.titleText} </Text>
    );
  }
}

// Header component styles
const styles = StyleSheet.create({
  titleText: {
    backgroundColor: 'powderblue',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 16,
  },
});
