import React, { Component } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { List, Card, Button } from 'react-native-elements';
import styles from './styles';

import { IconButton } from '../Button';

class CardContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  handleCoupons = () => {
    console.log('press coupons');
  };

  render() {
    const couponsImg = require('./images/coupons.png');
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Powered by Tencent</Text>
        <View style={styles.iconContainer}>
          <IconButton
            iconName="coupons"
            text="優惠券"
            onPress={this.handleCoupons}
            iconImage={styles.iconImage}
            iconText={styles.iconText}
            imageSource={couponsImg}
          />
        </View>
      </View>
    );
  }
}

export default CardContainer;
