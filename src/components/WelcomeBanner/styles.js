import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const bannerWidth = Dimensions.get('window').width;

const styles = EStyleSheet.create({
  container: {
    height: 80
  }
});

export default styles;
