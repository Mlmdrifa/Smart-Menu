import { PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native';

interface BoxProps extends PropsWithChildren {
  flex?: boolean;
  horizontal?: boolean;
  gap?: number;
  center?: boolean;
}

export default function Box({ children, flex, horizontal, gap, center }: BoxProps) {
  return (
    <View
      style={[
        flex && styles.flex,
        horizontal && styles.horizontal,
        center && styles.center,
        { gap },
      ]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  horizontal: { flexDirection: 'row' },
  center: { justifyContent: 'center', alignItems: 'center' },
});
