import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { fonts } from '@/designs/fonts';
import Navigation from '@/navigation/Navigation';
import { ThemeProvider } from '@/providers/ThemeProvider';

export default function App() {
  const [fontsLoaded, fontError] = useFonts(fonts);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={StyleSheet.absoluteFill}>
      <StatusBar style="auto" />
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    </View>
  );
}
