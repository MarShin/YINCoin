import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { IconButton } from '../Button';

import styles from './styles';

class TaskBanner extends Component {
  handlePrices = () => {
    console.log('press prices button');
    this.props.navigation.navigate('Prices');
  };

  handleSendMoney = () => {
    console.log('press send money');
  };

  handleReceiveMoney = () => {
    console.log('press receive money');
  };

  handleBalance = () => {
    console.log('press convert coin');
  };

  render() {
    const sendMoneyImg = require('./images/send_money.png');
    const receiveMoneyImg = require('./images/receive_money.png');
    const pricesImg = require('./images/prices.png');
    const balanceImg = require('./images/balance.png');
    return (
      <View style={styles.container}>
        <IconButton
          iconName="send_money"
          text="付錢"
          onPress={this.handleSendMoney}
          imageSource={sendMoneyImg}
        />
        <IconButton
          iconName="receive_money"
          text="收錢"
          onPress={this.handleReceiveMoney}
          imageSource={receiveMoneyImg}
        />
        <IconButton
          iconName="prices"
          text="價格"
          onPress={this.handlePrices}
          imageSource={pricesImg}
        />
        <IconButton
          iconName="balance"
          text="賬戶餘額"
          onPress={this.handleBalance}
          imageSource={balanceImg}
        />
      </View>
    );
  }
}

TaskBanner.propTypes = {
  navigation: PropTypes.object,
};
export default TaskBanner;
