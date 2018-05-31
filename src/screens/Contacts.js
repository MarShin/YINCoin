/* @flow */

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Contacts extends React.Component<Props, State> {
  static title = 'Floating Action Button';

  render() {
    return (
      <View style={[styles.container]}>
        <View style={styles.row}>
          <Text>Coming soon </Text>
        </View>
      </View>
    );
  }
}

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
