import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';

import { YellowBox } from 'react-native';
import store from './config/store';
import { Root } from './config/routes';
import { AlertProvider } from './components/Alert';

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader requires',
  'Deprecated firebase.User.prototype.createUserWithEmailAndPassword'
]);

EStyleSheet.build({
  $darkRed: '#5A110D',
  $regularRed: '#C02437',
  $lightRed: '#E72B22',
  $paleRed: '#D67582',
  $darkGray: '#2C2C2C',
  $regularGray: '#686F79',
  $lightGray: '#8C8C8C',
  $paleGray: '#F0EFF5',
  $darkGreen: '#258E77',
  $regularGreen: '#45BFA3',
  $lightGreen: '#50E3C2',
  $darkOrange: '#F59223',
  $regularOrange: '#F5BC23',
  $lightOrange: '#FFCC2D',

  $white: '#FFFFFF'
  // $outline: 1
});

const theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#E72B22',
    accent: '#F0EFF5'
  }
};

export default () => (
  <ReduxProvider store={store}>
    <PaperProvider theme={theme}>
      <AlertProvider>
        <Root />
      </AlertProvider>
    </PaperProvider>
  </ReduxProvider>
);
