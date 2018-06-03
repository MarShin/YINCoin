/* @flow */

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Contacts = () => (
  <View style={[styles.container]}>
    <View style={styles.row}>
      <Text>会员朋友名单</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4
  },

  row: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Contacts;
