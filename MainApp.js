import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Heartbeat from './src/HeartBeat';

const MainApp = () => {
  return (
      <View style={styles.container}>
          <Button title="Start Service" onPress={() => Heartbeat.startService()} />
          <Button title="Stop Service" onPress={() => Heartbeat.stopService()} />
      </View>
  );
};


const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
});
export default MainApp;