// @flow
import * as React from 'react';
import {
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { withFirebase, firebaseConnect } from 'react-redux-firebase';
import { compose } from 'recompose';
import { withNavigation } from 'react-navigation';

import Background from '../components/Background';
import { LogInView } from '../components/Auth';

class LogIn extends React.Component<{ firebase: any }> {
  state = {
    email: '',
    password: '',
    errorMessage: null
  };

  handleSignIn = () => {
    const { email, password } = this.state;
    this.props.firebase
      .auth()
      .signInAndRetrieveDataWithEmailAndPassword(email, password)
      .then(() => {})
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Background
          backgroundColor="#FFFFFF"
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <StatusBar barStyle="light-content" />
          <LogInView />
        </Background>
      </TouchableWithoutFeedback>
    );
  }
}

export default LogIn;
