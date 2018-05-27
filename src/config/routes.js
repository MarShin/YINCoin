import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
// import { Icon } from 'react-native-elements';

import Home from '../screens/Home';
import Prices from '../screens/Prices';

import Settings from '../screens/Settings';
import Me from '../screens/Me';

export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null // specifies no object return for header, default white space
    }
  },
  Prices: {
    screen: Prices,
    navigationOptions: ({ navigation }) => ({
      // navigation object automatically attached to screen
      headerTitle: '價格'
    })
  }
});

export const Tabs = TabNavigator({
  Feed: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: '首頁'
    }
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: '我的'
      // tabBarIcon: ({ tintColor }) => (
      // <Icon name="account-circle" size={35} color={tintColor} />
      // )
    }
  }
});

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: '設定'
    }
  }
});

export const Root = StackNavigator(
  {
    Tabs: {
      screen: Tabs
    },
    Settings: {
      screen: SettingsStack
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);
