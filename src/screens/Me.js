import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import Background from '../components/Background/';
import Balance from '../components/Balance';
import Sample from '../components/Sample';

class Me extends Component {
  handleSettingsPress = () => {
    this.props.navigation.navigate('Settings');
  };

  render() {
    return (
      <Background backgroundColor="#F0EFF5">
        <StatusBar
          translucent={false}
          barStyle="dark-content"
          backgroundColor="#E72B22"
        />
        <ScrollView>
          <Balance />
          <List>
            <ListItem title="会员号码" />
            <ListItem title="设定" onPress={this.handleSettingsPress} />
          </List>
        </ScrollView>
        <Sample />
      </Background>
    );
  }
}
export default Me;
