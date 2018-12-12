// @flow
import * as React from 'react';
import { Dimensions, StatusBar, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

import Background from '../components/Background/';
import { WelcomeBanner } from '../components/WelcomeBanner';
import { CardContainer } from '../components/CardContainer';

const PhoneButton = () => (
  <FAB style={styles.fab} icon="phone" label="去玩" onPress={() => {}} />
);

const fabTop = Dimensions.get('window').height * 0.8;
const fabLeft = Dimensions.get('window').width * 0.75;

const styles = StyleSheet.create({
  fab: {
    // marginHorizontal: 100,
    flex: 1,
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    position: 'absolute',
    top: fabTop,
    left: fabLeft,
    backgroundColor: '#E72B22',
    width: 80
    // height: 60
  }
});

const Home = () => (
  <Background backgroundColor="#E72B22">
    <StatusBar
      translucent={false}
      barStyle="light-content"
      backgroundColor="#E72B22"
    />
    <WelcomeBanner />
    <CardContainer />
    <PhoneButton />
  </Background>
);

export default Home;
