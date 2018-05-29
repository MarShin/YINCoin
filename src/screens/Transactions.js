import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';

import Background from '../components/Background/';
import TransactionHistory from '../components/TransactionHistory';

class Transactions extends Component {
  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    return (
      <Background backgroundColor="#F5F8FA">
        <StatusBar translucent />
        <TransactionHistory />
      </Background>
    );
  }
}

const styles = StyleSheet.create({
  paper: {
    padding: 8,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4
  }
});

export default Transactions;
