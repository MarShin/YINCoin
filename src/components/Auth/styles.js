// @flow
import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const containerWidth = Dimensions.get('window').width * 0.9;
export default EStyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: containerWidth,
    paddingHorizontal: 15
  },
  logo: {
    alignSelf: 'center',
    marginTop: 10,
    width: 120,
    height: 120,
    resizeMode: 'contain'
  },
  button: {
    width: 124,
    marginTop: 24
  }
});
