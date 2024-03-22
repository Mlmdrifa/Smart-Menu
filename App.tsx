import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Navigation from '@/navigation/Navigation';
import { ThemeProvider } from '@/providers/ThemeProvider';

export default function App() {
  return (
    <View style={StyleSheet.absoluteFill}>
      <StatusBar style="auto" />
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    </View>
  );
}
