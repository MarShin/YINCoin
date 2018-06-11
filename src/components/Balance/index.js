import React, { Component } from 'react';
import { Clipboard, View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import { Icon, List, ListItem } from 'react-native-elements';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { withFirebase } from 'react-redux-firebase';

import { connectAlert } from '../Alert';

import { createMaterialIcon } from '../../utils/createIcon';

class Balance extends Component {
  constructor(props) {
    super(props);

    this.handleUsernameCopy = this.handleUsernameCopy.bind(this);
  }

  handleTrendPress = () => {
    this.props.navigation.navigate('Trend');
  };

  handleUsernameCopy = (userName) => {
    console.log('Pressed coyp UserName');
    Clipboard.setString(userName);
    this.props.alertWithType(
      'success',
      '已复制到剪贴板',
      '您现在可以与朋友分享推荐人号码'
    );
  };

  render() {
    const { profile } = this.props;
    return (
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Title style={{ paddingHorizontal: 15 }}>胤币</Title>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 10,
              justifyContent: 'space-around'
            }}
          >
            <Icon
              containerStyle={{ padding: 4 }}
              type="material-community"
              name="qrcode"
            />
            <Icon
              containerStyle={{ padding: 4 }}
              type="ionicon"
              name="ios-qr-scanner"
            />
          </View>
        </View>

        <List>
          <ListItem title="总币量" subtitle={profile.total} hideChevron />
          <ListItem title="存币" subtitle={profile.fixed} hideChevron />
          <ListItem title="可用币" subtitle={profile.trading} hideChevron />
          <ListItem title="趋势图" onPress={this.handleTrendPress} />
        </List>
        <List>
          <ListItem
            title="会员号码"
            subtitle={profile.userName}
            rightIcon={{ name: 'content-copy' }}
            onPress={() => this.handleUsernameCopy(profile.userName)}
            // hideChevron
          />
        </List>
      </View>
    );
  }
}

export default compose(
  withNavigation,
  withFirebase,
  connect(({ firebase: { auth, profile } }) => ({
    auth,
    profile
  }))
)(connectAlert(Balance));
