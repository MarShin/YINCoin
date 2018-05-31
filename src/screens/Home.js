// @flow
import * as React from 'react';
import { Dimensions, StatusBar, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

import Background from '../components/Background/';
import { WelcomeBanner } from '../components/WelcomeBanner';
import { CardContainer } from '../components/CardContainer';

const PhoneButton = () => (
  <FAB style={styles.fab} medium icon="phone" onPress={() => {}} />
);

const fabTop = Dimensions.get('window').height * 0.8;
const fabLeft = Dimensions.get('window').width * 0.555;

const styles = StyleSheet.create({
  fab: {
    marginHorizontal: 100,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: 10,
    position: 'absolute',
    top: fabTop,
    left: fabLeft,
    backgroundColor: '#E72B22'
  }
});

const Home = () => (
  <Background backgroundColor="#F5F8FA">
    <StatusBar
      translucent={false}
      barStyle="light-content"
      backgroundColor="#F5F8FA"
    />
    <WelcomeBanner />
    <CardContainer />
    <PhoneButton />
  </Background>
);

export default Home;
