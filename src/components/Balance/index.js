import React, { Component } from 'react';
import { Card, CardContent, Title, Paragraph } from 'react-native-paper';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

class Balance extends Component {
  handleSettingsPress = () => {
    this.props.navigation.navigate('Settings');
  };

  render() {
    const user = this.props.users && this.props.users[this.props.uid];

    return (
      <React.Fragment>
        <Card elevation={4}>
          <CardContent>
            <Title>Total</Title>
            <Paragraph>{user && user.total}</Paragraph>
          </CardContent>
        </Card>

        <Card elevation={4}>
          <CardContent>
            <Title>Fixed</Title>
            <Paragraph>{user && user.fixed}</Paragraph>
          </CardContent>
        </Card>

        <Card elevation={4}>
          <CardContent>
            <Title>Trading</Title>
            <Paragraph>{user && user.trading}</Paragraph>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}

export default compose(
  firestoreConnect(props => [{ collection: 'users', doc: props.uid }]),
  connect((state, props) => ({
    users: state.firestore.data.users
  }))
)(Balance);
