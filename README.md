Please install prettier and eslint plugin in your text editor/IDE before coding anything.

# Brainpick - `development`

## Stack

* [React Navigation](https://github.com/react-navigation/react-navigation)
* [React Native Elements](https://react-native-training.github.io/react-native-elements/
* Frontend: ES6,Eslint, Redux

## Project Info
* Refer to trello (https://trello.com/b/Eg6jQsnI/yincoin) for tasks breakdown
* Branch naming with your_name/feature_name e.g. martin/firebase_auth
* general flow branch out from `development/` to build feature, when read to push, pull latest `development/`, rebase (& squash commit) on top of development `git rebase -i development`, then `git push origin martin/firebase_auth` 
* commit messages usually 3 categories 
     ```feat(branch_name), refine(branch_name), fix(branch_name): fix button routing```

# Incoporated React Native Firebase Starter<a href="https://rnfirebase.io"><img align="left" src="http://i.imgur.com/01XQL0x.png"></a>

A basic react native app with [`react-native-firebase`](https://github.com/invertase/react-native-firebase) pre-integrated to get you started quickly.

The official Starter kit ReadMe availble [here](https://github.com/invertase/react-native-firebase-starter)

---

### Getting Started

> If you're only developing for one platform you can ignore the steps below that are tagged with the platform you don't require.

#### 1) Clone & Install Dependencies

* 1.1) Install NPM packages with your package manager of choice - i.e run `yarn`
* 1.4) **[iOS]** `cd ios` and run `pod install` - if you don't have CocoaPods you can follow [these instructions](https://guides.cocoapods.org/using/getting-started.html#getting-started) to install it.
* 1.5) **[Android]** No additional steps for android here.

#### 2) Part 2 renaming not need for our project

#### 3) Add `Google Services` files (plist & JSON)

* 3.0)**[NOT ACTION BUT READ THE INSTRUCTIONS]** 
      **[iOS]** READ the `add firebase to your app` instructions [here](https://firebase.google.com/docs/ios/setup#add_firebase_to_your_app) to obtain your `GoogleService-Info.plist` file if you haven't done so already - use the package name generated previously as your `iOS bundle ID`. For our app I already started one call `com.yincoin.yincoin` iOS app
* 3.1) **[iOS]** Download `.plist` file from Firebase Console
* 3.2 Drag the file into XCode Project into Main app, linked in XCode to **all targets**. If you happen to delete it just download again from the console. The file contains API key & other developer app info to connect to Firebase.

* 3.3) **[Android]** Follow the `manually add firebase` to your app instructions [here](https://firebase.google.com/docs/android/setup#manually_add_firebase) to generate your `google-services.json` file if you haven't done so already - use the package name generated previously as your `Android package name`.
* 3.4) Place this file in the `android/app/` directory of your project.

#### 4) Start your app
* can follow below or just run `react-native run-ios` like how we usually do.
* 4.1) Start the react native packager, run `yarn run start` or `npm start` from the root of your project.
* 4.2) **[iOS]** Build and run the iOS app, run `npm run ios` or `yarn run ios` from the root of your project. The first build will take some time. This will automatically start up a simulator also for you on a successful build if one wasn't already started.
* 4.3) **[Android]** If you haven't already got an android device attached/emulator running then you'll need to get one running (make sure the emulator is with Google Play / APIs). When ready run `npm run android` or `yarn run android` from the root of your project.
