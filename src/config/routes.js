import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { createMaterialIcon } from '../utils/createIcon';

import Home from '../screens/Home';

import Settings from '../screens/Settings';
import Me from '../screens/Me';

import Login from '../screens/Login';
import Loading from '../screens/Loading';

export const LandingStack = createStackNavigator(
  { Home },
  {
    headerMode: 'none'
  }
);

export const MeStack = createStackNavigator({
  Me: {
    screen: Me,
    navigationOptions: {
      title: '我的'
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: '設定'
    }
  }
});

export const BottomTabNavigator = createMaterialBottomTabNavigator(
  {
    Landing: {
      screen: LandingStack,
      navigationOptions: {
        tabBarLabel: '首頁'
      }
    },
    Me: {
      screen: MeStack,
      navigationOptions: {
        tabBarLabel: '我的',
        // commented for now until found solution for 'materialIcons' not found error
        // tabBarIcon: ({ tintColor }) =>
        //   createMaterialIcon('explore', tintColor, 24),
        tabBarColor: '#374B57'
      }
    }
  },
  {
    initialRouteName: 'Landing',
    activeTintColor: '#FFFFFF',
    barStyle: {
      backgroundColor: '#374B57',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 4
    }
  }
);

export const AppNavigator = createStackNavigator(
  {
    BottomTabNavigator
  },
  {
    headerMode: 'none'
  }
);

export const Root = createSwitchNavigator({
  Loading,
  Login,
  AppNavigator
});
