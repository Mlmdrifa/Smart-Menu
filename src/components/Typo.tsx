import { PropsWithChildren } from 'react';
import { Text } from 'react-native';

import { Colors, colors } from '@/designs/colors';
import { TextVariant, textStyles } from '@/designs/styles';
import { useTheme } from '@/hooks/useTheme';

interface TypoProps extends PropsWithChildren {
  variant: TextVariant;
  color?: Colors;
}

export default function Typo({ children, variant, color }: TypoProps) {
  const theme = useTheme();

  return (
    <Text style={[textStyles[variant], { color: color ? colors[color] : theme.text }]}>
      {children}
    </Text>
  );
}
