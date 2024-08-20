import React from 'react';
import { AppRegistry } from 'react-native';
import { HeartBeatProvider } from './HeartBeatContext';
import MainApp from './MainApp';
import { name as appName } from './app.json';

const App = () => (
  <HeartBeatProvider>
    <MainApp />
  </HeartBeatProvider>
);

AppRegistry.registerComponent(appName, () => App);