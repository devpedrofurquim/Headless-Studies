import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import MyHeadlessTask from './src/HeartBeat';
import MainApp from './MainApp';

const App = () => (
    <MainApp/>
);

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerHeadlessTask('Heartbeat', () => MyHeadlessTask);