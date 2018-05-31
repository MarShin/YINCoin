import React, { Component } from 'react';

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
    return (
      <Toolbar style={styles.container}>
        <ToolbarContent title="Welcome!" subtitle="Martin Shin" />
        <ToolbarAction icon="search" onPress={this.onSearch} />
        <ToolbarAction icon="notifications" onPress={this.onNotifications} />
      </Toolbar>
    );
  }
}

export default WelcomeBanner;
