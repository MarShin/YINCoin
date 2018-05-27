import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const bannerWidth = Dimensions.get('window').width;

const styles = EStyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: bannerWidth,
    backgroundColor: '$regularGray',
    flexDirection: 'row',
  },
  // text: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   color: '$darkGray',
  //   height: 20,
  //   paddingBottom: 50,
  // },
});

export default styles;
