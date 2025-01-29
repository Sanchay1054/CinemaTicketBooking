import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackRouting from './Screen/Routing/StackRouting';
import Routing from './Screen/Routing/Routing';

export default function App() {
  return (
    <Routing/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
