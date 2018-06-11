// @flow
import * as React from 'react';
import { View, Image } from 'react-native';
import { withFirebase, withFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withNavigation } from 'react-navigation';
import { TextInput, Button } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { referrerExist, referrerNotExist } from '../../actions/referralActions';
import { connectAlert } from '../Alert';
import styles from './styles';

class ReferralView extends React.Component<{ firebase: any }> {
  state = {
    referralID: ''
  };

  componentDidMount() {
    // this.updateReferralCollection();
  }

  updateReferralCollection = (userName = 'martin') => {
    const firestore = this.props.firestore;
    // const referralID = this.props.referralID;
    const referralID = 'root';
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

  // NOT SURE: put into redux action if not tied to HOC?
  // TODO: change promise to async await
  checkReferrerExist = () => {
    const ref = this.props.firestore
      .collection('referrals')
      .doc(this.state.referralID);

    const getDoc = ref
      .get()
      .then((doc) => {
        if (!doc.exists) {
          this.props.alertWithType(
            'error',
            'Referral ID not found!',
            'Please confirm with your Referrer'
          );
          this.props.dispatch(referrerNotExist());
        } else {
          // console.log('Document data:', doc.data());
          this.props.dispatch(referrerExist(this.state.referralID));
        }
      })
      .catch((err) => {
        this.props.alertWithType('error', 'Error getting document', err);
      });
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
          label="推荐人号码"
          placeholder="YINCoin_123"
          autoCapitalize="none"
          value={this.state.referralID}
          onChangeText={referralID => this.setState({ referralID })}
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
            style={(styles.button, { width: 200 })}
            onPress={this.checkReferrerExist}
            primary
            dark
            raised
          >
            搜查推荐人号码
          </Button>

          <Button
            primary
            dark
            onPress={() => this.props.navigation.navigate('LogIn')}
          >
            去会员注册
          </Button>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default compose(
  withNavigation,
  withFirebase,
  withFirestore
  // firestoreConnect(['referrals']), // or { collection: 'todos' }
  // connect((state, props) => ({
  //   referrals: state.firestore.ordered.referrals
  // }))
)(connectAlert(ReferralView));
