import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Toolbar, ToolbarContent, ToolbarAction } from 'react-native-paper';

import styles from './styles';

class WelcomeBanner extends Component {
  onSearch = () => {
    console.log('Press search icon');
  };

  onNotifications = () => {
    console.log('Press notifications icon');
  };

  render() {
    const { firstName, lastName } = this.props.profile;
    return (
      <Toolbar style={styles.container}>
        <ToolbarContent
          subtitleStyle={styles.subtitle}
          title="红胤会"
          subtitle={firstName && lastName && `${firstName} ${lastName}`}
        />
        <ToolbarAction icon="search" onPress={this.onSearch} />
        <ToolbarAction icon="notifications" onPress={this.onNotifications} />
      </Toolbar>
    );
  }
}

export default connect(({ firebase: { profile } }) => ({ profile }))(WelcomeBanner);
