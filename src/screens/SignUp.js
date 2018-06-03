// @flow
import * as React from 'react';
import { StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Background from '../components/Background';
import { SignUpView } from '../components/Auth';

const Login = () => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <Background
      backgroundColor="#FFFFFF"
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <StatusBar barStyle="dark-content" />
      <SignUpView />
    </Background>
  </TouchableWithoutFeedback>
);

export default Login;
