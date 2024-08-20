import React from 'react';
import { View, Text, Button } from 'react-native';
import { useHeartBeat } from './HeartBeatContext';

const MainApp = () => {
  const { heartBeat, setHeartBeat } = useHeartBeat();

  return (
    <View>
      <Text>HeartBeat is {heartBeat ? 'On' : 'Off'}</Text>
      <Button title="Toggle HeartBeat" onPress={() => setHeartBeat(!heartBeat)} />
    </View>
  );
};

export default MainApp;