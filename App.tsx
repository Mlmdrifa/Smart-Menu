import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Navigation from './src/navigation/Navigation';

export default function App() {
  return (
    <View style={StyleSheet.absoluteFill}>
      <StatusBar style="auto" />
      <Navigation />
    </View>
  );
}
