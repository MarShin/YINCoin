// @flow
import * as React from 'react';
import { View, Image, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { firebaseConnect } from 'react-redux-firebase';

import { createMaterialCommunityIcon } from '../../utils/createIcon';
// import loginWithFb from './loginWithFb';
import styles from './styles';

class SignUpView extends React.Component<{ firebase: any }> {
  state = { email: '', password: '', errorMessage: null };

  handleSignUp = () => {
    const { email, password } = this.state;
    this.props.firebase
      .auth()
      .createUserAndRetrieveDataWithEmailAndPassword(email, password)
      .then(() => {})
      .catch(error => this.setState({ errorMessage: error.message }));
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
      <View style={styles.container}>
        <Image
          style={{ alignSelf: 'center', marginBottom: 32 }}
          source={require('../../images/logo.png')}
        />
        {this.state.errorMessage ? (
          <Text style={{ fontSize: 16, color: 'tomato' }}>
            {this.state.errorMessage}
          </Text>
        ) : (
          <Text style={{ fontSize: 16, color: '#FFFFFF' }}>
            Create or sign in your account
          </Text>
        )}
        <TextInput
          label="Email"
          placeholder="brain@pick.com"
          autoCapitalize="none"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          keyboardAppearance="dark"
          theme={{
            dark: true,
            colors: {
              disabled: '#b4c1c8',
              text: '#FFFFFF',
              placeholder: '#b4c1c8'
            }
          }}
        />
        <TextInput
          label="Password"
          placeholder="password"
          autoCapitalize="none"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          keyboardAppearance="dark"
          secureTextEntry
          theme={{
            dark: true,
            colors: {
              disabled: '#b4c1c8',
              text: '#FFFFFF',
              placeholder: '#b4c1c8'
            }
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'stretch',
            justifyContent: 'center',
            marginBottom: 16
          }}
        >
          <Button
            style={styles.button}
            onPress={this.handleSignUp}
            primary
            dark
            raised
          >
            Sign Up
          </Button>
          <Button
            style={styles.button}
            onPress={this.handleSignIn}
            primary
            dark
            raised
          >
            Log In
          </Button>
        </View>
      </View>
    );
  }
}

export default firebaseConnect()(SignUpView);
