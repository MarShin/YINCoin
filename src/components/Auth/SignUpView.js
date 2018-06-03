// @flow
import * as React from 'react';
import { View, Image } from 'react-native';
import { withFirebase, withFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withNavigation } from 'react-navigation';
import { TextInput, Button } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { connectAlert } from '../Alert';
import styles from './styles';

class SignUpView extends React.Component<{ firebase: any }> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      fixed: 0,
      trading: 0,
      total: 0
    };
  }

  updateReferralCollection = (userName) => {
    const firestore = this.props.firestore;
    const referralID = this.props.referralID;
    const parentRef = { collection: 'referrals', doc: referralID };
    const childRef = { collection: 'referrals', doc: userName };

    firestore
      .get(parentRef)
      .then(doc => doc.data())
      .then((data) => {
        const newData = data.children.concat(userName);
        firestore.update(parentRef, { children: newData });
      });

    firestore.set(childRef, { children: [] });
  };

  generateUsername = () => {
    const email = this.state.email;
    const uid = this.props.auth.uid;
    const userName = `${email.substr(0, email.indexOf('@'))}_${uid.substr(
      0,
      6
    )}`;
    return userName;
  };

  // react-redux-firebase bug: https://github.com/prescottprue/react-redux-firebase/issues/475
  // workaround for now: createUser then updateProfile
  handleSignUp = async () => {
    const {
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      fixed,
      trading,
      total
    } = this.state;

    try {
      await this.props.firebase.createUser({
        email,
        password
      });

      const userName = this.generateUsername();
      const referralID = this.props.referralID;
      await this.props.firebase.updateProfile({
        referralID,
        firstName,
        lastName,
        phoneNumber,
        fixed,
        trading,
        total,
        userName
      });

      // Update Referral collection: Referrer's children array & new User entry
      this.updateReferralCollection(userName);
      this.props.alertWithType('info', 'This is a prototye', '');
    } catch (error) {
      this.props.alertWithType('error', 'Sign Up Failed!', error.message);
      console.log('ERROR: ', error.message);
    }
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
          label="姓氏"
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
          label="名字"
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
          label="手机号码"
          placeholder="12345678"
          autoCapitalize="none"
          value={this.state.phoneNumber}
          onChangeText={phoneNumber => this.setState({ phoneNumber })}
          theme={{
            colors: {
              disabled: '#b4c1c8',
              placeholder: '#b4c1c8'
            }
          }}
        />
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

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Button
            style={styles.button}
            onPress={this.handleSignUp}
            primary
            dark
            raised
          >
            会员注册
          </Button>

          <Button
            primary
            dark
            onPress={() => this.props.navigation.navigate('LogIn')}
          >
            去登入
          </Button>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default compose(
  withNavigation,
  withFirebase,
  withFirestore,
  connect((state, props) => ({
    auth: state.firebase.auth,
    referralID: state.referral.referralID
  }))
)(connectAlert(SignUpView));
