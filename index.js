import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import MyHeadlessTask from './src/HeartBeat';

const App = () => (
  <HeartBeatProvider>
    <MainApp />
  </HeartBeatProvider>
);

AppRegistry.registerHeadlessTask('Heartbeat', () => MyHeadlessTask);
AppRegistry.registerComponent(appName, () => App);