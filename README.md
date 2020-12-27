## deepseen-mobile

Mobile application for the [Deepseen](https://github.com/peterdee/deepseen-desktop) project

This application is used as a remote control for the Deepseen desktop application

Stack: [React Native](https://reactnative.dev), [Redux](https://redux.js.org), [Expo](https://expo.io), [Socket.IO](https://socket.io), [Typescript](https://www.typescriptlang.org)

### Deploy

```shell script
git clone https://github.com/peterdee/deepseen-mobile
cd ./deepseen-mobile
nvm use 14
npm i -g expo-cli yarn
yarn
```

### Launch

Run on a device via the Expo application:

```shell script
yarn start
```

Android emulator:

```shell script
yarn android
```

iOS emulator:

```shell script
yarn ios
```

### License

[MIT](LICENSE)
