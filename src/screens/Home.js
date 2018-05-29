// @flow
import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
// import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

import { Container } from '../components/Container';
import { TaskBanner } from '../components/TaskBanner';
import { CardContainer } from '../components/CardContainer';

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  handleSwapCurrency = () => {
    console.log('press swap currency');
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding">
          <TaskBanner navigation={this.props.navigation} />
          <CardContainer />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;
