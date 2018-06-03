import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';

import Background from '../components/Background/';
import TransactionHistory from '../components/TransactionHistory';

const Transactions = () => (
  <Background backgroundColor="#F5F8FA">
    <StatusBar translucent />
    <TransactionHistory />
  </Background>
);

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
