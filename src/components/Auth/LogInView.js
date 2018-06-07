// @flow
import * as React from 'react';
import { Text, StatusBar, View, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { withFirebase, firebaseConnect } from 'react-redux-firebase';
import { compose } from 'recompose';
import { withNavigation } from 'react-navigation';
import { connectAlert } from '../Alert';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';

class LogIn extends React.Component<{ firebase: any }> {
  state = {
    email: '',
    password: ''
  };

  handleSignIn = () => {
    const { email, password } = this.state;
    this.props.firebase
      .auth()
      .signInAndRetrieveDataWithEmailAndPassword(email, password)
      .then(() => {})
      .catch(error =>
        this.props.alertWithType('error', 'Log In Failed!', error.message));
  };

  render() {
    return (
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled
      >
        <Image style={styles.logo} source={require('../../images/logo.png')} />

        <TextInput
          label="电邮地址"
          placeholder="yin@coin.com"
          autoCapitalize="none"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          theme={{
            colors: {
              disabled: '#b4c1c8',
              placeholder: '#b4c1c8'
            }
          }}
        />
        <TextInput
          label="个人密码"
          autoCapitalize="none"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          secureTextEntry
          theme={{
            colors: {
              disabled: '#b4c1c8',
              placeholder: '#b4c1c8'
            }
          }}
        />
        <Button onPress={this.handleSignIn} primary dark raised>
          登入
        </Button>
        <Button
          primary
          dark
          onPress={() => this.props.navigation.navigate('SignUp')}
        >
          去会员注册
        </Button>
      </KeyboardAwareScrollView>
    );
  }
}

export default compose(withNavigation, withFirebase)(connectAlert(LogIn));
