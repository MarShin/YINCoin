// @flow
import * as React from 'react';
import { Text, StatusBar, View, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { withFirebase, firebaseConnect } from 'react-redux-firebase';
import { compose } from 'recompose';
import { withNavigation } from 'react-navigation';

import styles from './styles';

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
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../images/logo.png')} />
        {this.state.errorMessage ? (
          <Text style={{ fontSize: 16, color: 'tomato' }}>
            {this.state.errorMessage}
          </Text>
        ) : (
          <Text style={{ fontSize: 16, color: '#FFFFFF' }}>
            Create your account
          </Text>
        )}

        <StatusBar barStyle="light-content" />
        <TextInput
          label="Email"
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
          label="Password"
          placeholder="password"
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
        <Button
          // style={styles.button}
          onPress={this.handleSignIn}
          primary
          dark
          raised
        >
          Log In
        </Button>
        <Button
          primary
          dark
          onPress={() => this.props.navigation.navigate('SignUp')}
        >
          Go to Sign Up
        </Button>
      </View>
    );
  }
}

export default compose(withNavigation, withFirebase)(LogIn);
