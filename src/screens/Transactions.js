import React from 'react';
import { StatusBar } from 'react-native';

import Background from '../components/Background/';
import TransactionHistory from '../components/TransactionHistory';

const Transactions = () => (
  <Background backgroundColor="#F5F8FA">
    <StatusBar
      translucent={false}
      barStyle="dark-content"
      backgroundColor="#E72B22"
    />
    <TransactionHistory />
  </Background>
);

export default Transactions;
