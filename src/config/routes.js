import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Home from '../screens/Home';

import Settings from '../screens/Settings';
import Me from '../screens/Me';

import Login from '../screens/Login';
import Loading from '../screens/Loading';

export const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null // specifies no object return for header, default white space
    }
  }
});

export const MeStack = createStackNavigator({
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: '我的'
      // tabBarIcon: ({ tintColor }) => (
      // <Icon name="account-circle" size={35} color={tintColor} />
      // )
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: '設定'
    }
  }
});

export const BottomTabNavigator = createMaterialBottomTabNavigator({
  Feed: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: '首頁'
    }
  },
  Me: {
    screen: MeStack
  }
});

export const AppNavigator = createStackNavigator({
  BottomTabNavigator
});

export const Root = createSwitchNavigator({
  // Loading,
  // Login,
  AppNavigator
}
  // {
  //   initialRouteName: 'Loading'
  // }
);
