import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const containerHeight = Dimensions.get('window').height * 0.8;

const styles = EStyleSheet.create({
  container: {
    flex: 3
    // height: 500,
    // marginTop: 400,
  },
  iconContainer: {
    // justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  title: {
    paddingVertical: 10,
    paddingLeft: 10,
    backgroundColor: '$paleGray'
  },
  iconImage: {
    width: 30,
    height: 30,
    marginBottom: 10
    // tintColor: '$regularGreen'
  },
  iconText: {
    // color: '$darkRed',
    fontSize: 15,
    fontWeight: '300'
  },
  FAB: {
    padding: 20,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'blue'
  }
});

export default styles;
