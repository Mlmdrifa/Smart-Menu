import { PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native';

interface BoxProps extends PropsWithChildren {
  flex?: boolean;
  horizontal?: boolean;
  gap?: number;
  center?: boolean;
  xcenter?: boolean;
  ycenter?: boolean;
}

export default function Box({
  children,
  flex,
  horizontal,
  gap,
  center,
  xcenter,
  ycenter,
}: BoxProps) {
  return (
    <View
      style={[
        flex && styles.flex,
        horizontal && styles.horizontal,
        center && styles.center,
        xcenter && styles.xcenter,
        ycenter && styles.ycenter,
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
  ycenter: { justifyContent: 'center' },
  xcenter: { alignItems: 'center' },
});
