import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { TextInput, Button } from 'react-native-paper';
import { firebaseConnect } from 'react-redux-firebase';
import { me } from '../config/data';

class Settings extends React.Component<{ firebase: any }> {
  state = { email: '', password: '', errorMessage: null };

  handleSignOut = () => {
    const { email, password } = this.state;
    this.props.firebase
      .auth()
      .signOut()
      .then(() => {})
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      <ScrollView>
        <List>
          <ListItem title="電郵" rightTitle={this.props.email} />
          <ListItem title="手機號碼" rightTitle={this.props.phone} />
          <ListItem title="密碼設置" />
          <ListItem title="指紋保護" />
          <ListItem title="隱私設置" />
          <ListItem title="語言" />
        </List>

        <List>
          <ListItem title="關於" />
        </List>

        <List>
          <ListItem
            title="Sign Out"
            rightIcon={{ name: 'cancel' }}
            hideChevron
            onPress={this.handleSignOut}
          />
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 124,
    marginTop: 24
  }
});

Settings.defaultProps = { ...me };

export default firebaseConnect()(Settings);
