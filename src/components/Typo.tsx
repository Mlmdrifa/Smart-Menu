import { PropsWithChildren } from 'react';
import { StyleSheet, Text } from 'react-native';

import { Colors, colors } from '@/designs/colors';
import { TextVariant, textStyles } from '@/designs/text.styles';
import { useTheme } from '@/hooks/useTheme';

interface TypoProps extends PropsWithChildren {
  variant: TextVariant;
  color?: Colors;
  center?: boolean;
}

export default function Typo({ children, variant, color, center }: TypoProps) {
  const theme = useTheme();

  return (
    <Text
      style={[
        textStyles[variant],
        center && styles.center,
        { color: color ? colors[color] : theme.text },
      ]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  center: { textAlign: 'center' },
});
