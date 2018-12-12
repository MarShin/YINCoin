import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { ButtonGroup } from 'react-native-elements';
import Sample from '../Sample';

class TransactionHistory extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }
  render() {
    const buttons = ['存币', '可用币'];
    const { selectedIndex } = this.state;

    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <View>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{ marginTop: 20, height: 30 }}
          />
        </View>
        <Sample />
      </View>
    );
  }
}

export default TransactionHistory;
