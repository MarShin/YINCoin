import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import Balance from '../components/Balance';

class Me extends Component {
  handleSettingsPress = () => {
    this.props.navigation.navigate('Settings');
  };

  render() {
    return (
      <ScrollView>
        <Balance />
        <List>
          <ListItem title="会员编号" />
          <ListItem title="设定" onPress={this.handleSettingsPress} />
        </List>
      </ScrollView>
    );
  }
}
export default Me;
