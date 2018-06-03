import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import {
  TextInput,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from 'react-native-paper';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withNavigation } from 'react-navigation';
import { withFirebase } from 'react-redux-firebase';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      tempPhoneNumber: '',
      errorMessage: null,
      visible: false
    };
  }

  _showDialog = () => this.setState({ visible: true });
  _hideDialog = () => this.setState({ visible: false });

  handleSignOut = () => {
    this.props.firebase.logout();
  };

  // TODO: updated tempPhoneNumber in FB & render on screen
  updateName = () => {
    console.log('Update phone dialog ', profile.phoneNumber);

    user
      .updateProfile({
        tempPhoneNumber: this.state.tempPhoneNumber
      })
      .then(() => {
        // const name = this.state.tempPhoneNumber;
        // this.setState({ tempPhoneNumber: name });
        // console.log('state: ', this.state);
      })
      .catch((error) => {});
    this._hideDialog();
  };

  render() {
    const { profile } = this.props;
    const { visible } = this.state;
    return (
      <ScrollView>
        <Dialog visible={visible} onDismiss={this._hideDialog}>
          <DialogTitle>更改手机号码 </DialogTitle>
          <DialogContent>
            <TextInput
              label="手机号码"
              value={this.state.tempPhoneNumber}
              onChangeText={tempPhoneNumber =>
                this.setState({ tempPhoneNumber })
              }
            />
          </DialogContent>

          <DialogActions>
            <Button>确定</Button>
            <Button onPress={this._hideDialog}>取消</Button>
          </DialogActions>
        </Dialog>
        <List>
          <ListItem
            title="名字"
            rightTitle={`${profile.lastName} ${profile.firstName}`}
          />
          <ListItem title="电邮" rightTitle={profile.email} />
          <ListItem
            title="手机号码"
            rightTitle={profile.phoneNumber}
            onPress={this._showDialog}
          />
          <ListItem title="密码设置" />
          <ListItem title="指纹保护" />
          <ListItem title="隐私设置" />
          <ListItem title="语言" />
        </List>

        <List>
          <ListItem title="关于" />
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
