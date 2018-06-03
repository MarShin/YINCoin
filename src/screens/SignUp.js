// @flow
import * as React from 'react';
import {
  View,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { connect } from 'react-redux';

import Background from '../components/Background';
import SignUpView from '../components/Auth/SignUpView';
import ReferralView from '../components/Auth/ReferralView';

class SignUp extends React.Component {
  // todo use navigation or just render diff component?
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
          <StatusBar barStyle="dark-content" />
          {this.props.referral.isReferrerExist ? (
            <SignUpView />
          ) : (
            <ReferralView />
          )}
        </Background>
      </TouchableWithoutFeedback>
    );
  }
}

export default connect(state => state)(SignUp);
// referralID={this.props.referral.referralID} no need to pass to SignUpView coz using redux
