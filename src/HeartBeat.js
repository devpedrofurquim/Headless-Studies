import { DeviceEventEmitter } from 'react-native';
import { NativeModules } from 'react-native';
const { Heartbeat } = NativeModules;

const MyHeadlessTask = async (event) => {
    console.log('Heartbeat event received:', event);
};

DeviceEventEmitter.addListener('HeartbeatEvent', Heartbeat);

export default Heartbeat;