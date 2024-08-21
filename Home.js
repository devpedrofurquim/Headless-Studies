import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import Heartbeat from './Heartbeat';

const Home = () => {
    return (
        <View style={styles.container}>
            <Button title="Start Service" onPress={() => Heartbeat.startService()} />
            <Button title="Stop Service" onPress={() => Heartbeat.stopService()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
  });
export default Home;