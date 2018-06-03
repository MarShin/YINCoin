import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import Balance from '../components/Balance';

class Me extends Component {
  handleSettingsPress = () => {
    this.props.navigation.navigate('Settings');
  };

  render() {
    return (
      <ScrollView>
        <Balance uid={this.props.auth.uid} />
        <List>
          <ListItem title="設定" onPress={this.handleSettingsPress} />
          <ListItem title="客服" />
          <ListItem title="餘額增值 / 直接買幣功能" />
          <ListItem title="身分認證" />
        </List>
      </ScrollView>
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

export default compose(connect((state, props) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile // TODO: not sure why empty
})))(Me);
