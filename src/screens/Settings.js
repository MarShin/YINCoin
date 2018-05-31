import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import {
  TextInput,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paragraph
} from 'react-native-paper';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withNavigation } from 'react-navigation';
import { firebaseConnect, withFirebase, isLoaded } from 'react-redux-firebase';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      displayName: '',
      tempName: '',
      errorMessage: null,
      visible: false
    };
  }

  _showDialog = () => this.setState({ visible: true });
  _hideDialog = () => this.setState({ visible: false });

  handleSignOut = () => {
    this.props.firebase.logout();
  };

  // TODO: updated displayName in FB & render on screen
  updateName = () => {
    console.log('Update name dialog');
    const user = this.props.firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: this.state.tempName
      })
      .then(function () {
        const name = this.state.tempName;
        this.setState({ displayName: name });
        console.log('state: ', this.state);
      })
      .catch((error) => {});
    this._hideDialog();
  };

  render() {
    const { auth } = this.props;
    const { visible } = this.state;

    return (
      <ScrollView>
        <Dialog visible={visible} onDismiss={this._hideDialog}>
          <DialogTitle>Change Display Name</DialogTitle>
          <DialogContent>
            <TextInput
              label="Name"
              value={this.state.tempName}
              onChangeText={tempName => this.setState({ tempName })}
            />
          </DialogContent>

          <DialogActions>
            <Button onPress={this.updateName}>Confirm</Button>
            <Button onPress={this._hideDialog}>Cancel</Button>
          </DialogActions>
        </Dialog>
        <List>
          <ListItem
            title="名字"
            rightTitle={auth.displayName}
            // onPress={this._showDialog}
          />
          <ListItem title="電郵" rightTitle={auth.email} />
          <ListItem title="手機號碼" rightTitle={auth.phoneNumber} />
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
            title="登出"
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

export default compose(
  withNavigation,
  withFirebase,
  connect(({ firebase: { auth, profile } }) => ({
    auth,
    profile
  }))
)(Settings);
