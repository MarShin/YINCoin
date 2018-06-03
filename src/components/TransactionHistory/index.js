import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { ButtonGroup } from 'react-native-elements';

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
    const buttons = ['Fixed', 'Trading'];
    const { selectedIndex } = this.state;

    return (
      <View>
        <View style={styles.container}>
          <Button raised onPress={() => console.log('Pressed')}>
            存币
          </Button>
          <Button raised onPress={() => console.log('Pressed')}>
            可用币
          </Button>
        </View>

        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 30 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 8,
    height: 80,
    elevation: 2
  }
});

export default TransactionHistory;
