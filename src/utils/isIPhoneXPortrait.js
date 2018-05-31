// @flow
import { Dimensions, Platform } from 'react-native';

const isIPhoneXPortrait = () => {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    dimen.height === 812
  );
};

export default isIPhoneXPortrait();
