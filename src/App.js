import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

// import { Provider } from 'react-redux';
// import store from './config/store';
// import { Root } from './config/routes';

import Home from './screens/Home';

EStyleSheet.build({
  $darkBlue: '#142026',
  $regularBlue: '#22455B',
  $lightBlue: '#2089dc',
  $paleBlue: '#ADC7D4',
  $darkGreen: '#258E77',
  $regularGreen: '#45BFA3',
  $lightGreen: '#50E3C2',
  $darkOrange: '#F59223',
  $regularOrange: '#F5BC23',
  $lightOrange: '#FFCC2D',
  $darkGray: '#2C2C2C',
  $regularGray: '#686F79',
  $lightGray: '#8C8C8C',
  $paleGray: '#F0EFF5',

  $white: '#FFFFFF',

  $border: '#979797',
  $inputText: '#797979'
  // $outline: 1,
});

export default () => <Home />;

// export default () => (
//   <Provider store={store}>
//     <Root />
//   </Provider>
// );
