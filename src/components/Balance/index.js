import React, { Component } from 'react';
import { Card, CardContent, Title, Paragraph } from 'react-native-paper';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { withFirebase } from 'react-redux-firebase';

class Balance extends Component {
  handleSettingsPress = () => {
    this.props.navigation.navigate('Settings');
  };

  render() {
    const { profile } = this.props;
    return (
      <React.Fragment>
        <Card elevation={4}>
          <CardContent>
            <Title>总币量</Title>
            <Paragraph>{profile.total}</Paragraph>
          </CardContent>
        </Card>

        <Card elevation={4}>
          <CardContent>
            <Title>存币</Title>
            <Paragraph>{profile.fixed}</Paragraph>
          </CardContent>
        </Card>

        <Card elevation={4}>
          <CardContent>
            <Title>可用币</Title>
            <Paragraph>{profile.trading}</Paragraph>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}

export default compose(
  withNavigation,
  withFirebase,
  connect(({ firebase: { auth, profile } }) => ({
    auth,
    profile
  }))
)(Balance);
