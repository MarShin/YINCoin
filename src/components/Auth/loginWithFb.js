// @flow
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'react-native-firebase';

const loginWithFb = async () => {
  try {
    const result = await LoginManager.logInWithReadPermissions([
      'public_profile',
      'email'
    ]);

    if (result.isCancelled) throw console.log('User cancelled request');

    console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);

    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw new Error('Something went wrong obtaining the users access token');
    }

    const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

    await firebase.auth().signInAndRetrieveDataWithCredential(credential);
  } catch (e) {
    console.log(e);
  }
};

export default loginWithFb;
