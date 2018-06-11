import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { createMaterialIcon } from '../utils/createIcon';

import Home from '../screens/Home';

import Me from '../screens/Me';
import Trend from '../screens/Trend';
import Settings from '../screens/Settings';
import Transactions from '../screens/Transactions';
import Contacts from '../screens/Contacts';

import Login from '../screens/Login';
import Loading from '../screens/Loading';
import SignUp from '../screens/SignUp';

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
      title: '设定'
    }
  },
  Trend: {
    screen: Trend,
    navigationOptions: {
      title: '趋势图'
    }
  }
});

export const HomeNavigator = createMaterialBottomTabNavigator(
  {
    Landing: {
      screen: LandingStack,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon: ({ tintColor }) => createMaterialIcon('home', tintColor, 24)
      }
    },
    Transactions: {
      screen: Transactions,
      navigationOptions: {
        tabBarLabel: '历史',
        tabBarIcon: ({ tintColor }) => createMaterialIcon('info', tintColor, 24)
      }
    },
    Contacts: {
      screen: Contacts,
      navigationOptions: {
        tabBarLabel: '朋友',
        tabBarIcon: ({ tintColor }) =>
          createMaterialIcon('people', tintColor, 24)
      }
    },
    Me: {
      screen: MeStack,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({ tintColor }) =>
          createMaterialIcon('person', tintColor, 24)
      }
    }
  },
  {
    initialRouteName: 'Me',
    activeTintColor: '#E72B22',
    barStyle: {
      backgroundColor: '#F0EFF5',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 3
    },
    shifting: false
  }
);

export const AppNavigator = createStackNavigator(
  {
    HomeNavigator
  },
  {
    headerMode: 'none'
  }
);

export const Root = createSwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    AppNavigator
  },
  {
    initialRouteName: 'Loading'
  }
);
