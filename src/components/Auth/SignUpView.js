// @flow
import * as React from 'react';
import { View, Image, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { withFirebase, firebaseConnect } from 'react-redux-firebase';
import { compose } from 'recompose';
import { withNavigation } from 'react-navigation';

import { checkReferrerExist } from '../../actions/users';
import { connectAlert } from '../Alert';
import styles from './styles';

// TODO: KEYBOARD AVOID VIEW WHEN ENTER FORM - TEXT INPUT UNSCROLLABLE

class SignUpView extends React.Component<{ firebase: any }> {
  state = {
    email: '',
    password: '',
    referrer: '',
    firstName: '',
    lastName: '',
    mobilePhone: '',
    errorMessage: null,
    referrerExist: false
  };

  handleSignUp = () => {
    const {
      email,
      password,
      referrer,
      firstName,
      lastName,
      mobilePhone
    } = this.state;

    console.log('STATE: ', this.state);

    if (!checkReferrerExist()) {
      this.props.alertWithType(
        'error',
        'Referral ID not found!',
        'Please confirm with your referrer'
      );
    }

    // this.props.firebase
    //   .auth()
    //   .createUserAndRetrieveDataWithEmailAndPassword(email, password)
    //   .then(() => {})
    //   .catch(error => this.setState({ errorMessage: error.message }));
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

        <TextInput
          label="Referral ID"
          placeholder="YINCoin_123"
          autoCapitalize="none"
          value={this.state.referrer}
          onChangeText={referrer => this.setState({ referrer })}
          theme={{
            colors: {
              disabled: '#b4c1c8',
              placeholder: '#b4c1c8'
            }
          }}
        />
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
        <TextInput
          label="First Name"
          placeholder="Yin"
          autoCapitalize="none"
          value={this.state.firstName}
          onChangeText={firstName => this.setState({ firstName })}
          theme={{
            colors: {
              disabled: '#b4c1c8',
              placeholder: '#b4c1c8'
            }
          }}
        />

        <TextInput
          label="Last Name"
          placeholder="Coin"
          autoCapitalize="none"
          value={this.state.lastName}
          onChangeText={lastName => this.setState({ lastName })}
          theme={{
            colors: {
              disabled: '#b4c1c8',
              placeholder: '#b4c1c8'
            }
          }}
        />
        <TextInput
          label="Mobile Phone"
          placeholder="12345678"
          autoCapitalize="none"
          value={this.state.mobilePhone}
          onChangeText={mobilePhone => this.setState({ mobilePhone })}
          theme={{
            colors: {
              disabled: '#b4c1c8',
              placeholder: '#b4c1c8'
            }
          }}
        />

        <View
          style={{
            // flexDirection: 'row',
            // alignSelf: 'stretch',
            alignItems: 'center',
            justifyContent: 'center'
            // marginBottom: 16
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
            primary
            dark
            onPress={() => this.props.navigation.navigate('LogIn')}
          >
            Go to Login
          </Button>
        </View>
      </View>
    );
  }
}

export default compose(withNavigation, withFirebase)(connectAlert(SignUpView));
