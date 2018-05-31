import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';

import styles from './styles';

class IconButton extends Component {
  handleButtonPress = () => {
    console.log('press IconButton button~');
  };

  render() {
    const filename = require('./images/icon.png');

    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <View style={styles.wrapper}>
          <Image
            resizeMode="contain"
            // style={styles.icon}
            style={this.props.iconImage ? this.props.iconImage : styles.icon}
            source={this.props.imageSource ? this.props.imageSource : filename}
          />
          <Text style={this.props.iconText ? this.props.iconText : styles.text}>
            {this.props.text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

IconButton.propTypes = {
  // iconName: PropTypes.string,
  text: PropTypes.string,
  onPress: PropTypes.func,
  iconImage: PropTypes.number,
  imageSource: PropTypes.number,
  iconText: PropTypes.number,
};

export default IconButton;
