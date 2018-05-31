// @flow
import * as React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import firebase from 'react-native-firebase';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default class Loading extends React.Component {
  componentDidMount() {
    console.log('INSIDE LOADING SCREEN Firebase auth', firebase.auth());
    console.log();
    firebase.auth().onAuthStateChanged((user) => {
      this.props.navigation.navigate(user ? 'AppNavigator' : 'SignUp');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
