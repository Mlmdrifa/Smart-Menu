import { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { Edges, SafeAreaView } from 'react-native-safe-area-context';

interface ScreenWrapperProps extends PropsWithChildren {
  edges?: Edges;
}

export default function ScreenWrapper({ children, edges = ['top', 'bottom'] }: ScreenWrapperProps) {
  return (
    <SafeAreaView edges={edges} style={styles.container}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
  },
});
