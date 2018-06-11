import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import { Title, ListItem, Paper, Text, Paragraph } from 'react-native-paper';
import { List, ListItem } from 'react-native-elements';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { withFirebase } from 'react-redux-firebase';

class Balance extends Component {
  handleSettingsPress = () => {
    this.props.navigation.navigate('Trend');
  };

  render() {
    const { profile } = this.props;
    return (
      <View style={{ backgroundColor: 'pink' }}>
        <List>
          <Text title="胤币" />
          <ListItem>
            <Text>总币量</Text>
            <Text>{profile.total}</Text>
          </ListItem>
          <ListItem title="总币量" subtitle={profile.total} hideChevron />
          <ListItem title="存币" subtitle={profile.fixed} hideChevron />
          <ListItem title="可用币" subtitle={profile.trading} hideChevron />
          <ListItem title="趋势图" onPress={this.handleSettingsPress} />
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  paper: {
    padding: 8,
    flexDirection: 'row',
    // height: 80,
    // width: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 4
  }
});
export default compose(
  withNavigation,
  withFirebase,
  connect(({ firebase: { auth, profile } }) => ({
    auth,
    profile
  }))
)(Balance);
