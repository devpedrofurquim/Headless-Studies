import React, {useEffect} from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Heartbeat from './Heartbeat.js';
import Home from './Home.js';

const App = () => {
    
    useEffect(() => {
        console.log('App is fully loaded');
    }, []);

    return (
        <Home/>
    )
}

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerHeadlessTask('Heartbeat', () => Heartbeat);