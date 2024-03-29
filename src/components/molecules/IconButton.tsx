import { Pressable, StyleSheet } from 'react-native';

import Icon from '../atoms/Icon';

import { colors } from '@/designs/colors';
import { layout } from '@/designs/layout';
import { SvgList } from '@/designs/svg';
import { useTheme } from '@/hooks/useTheme';
import { Theme } from '@/providers/ThemeProvider';

interface IconButtonProps {
  iconName: SvgList;
  onPress: () => void;
}

export default function IconButton({ iconName, onPress }: IconButtonProps) {
  const theme = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles(theme).container,
        { backgroundColor: theme.mode === 'light' ? colors.n0 : colors.n700 },
      ]}>
      <Icon iconName={iconName} stroke={theme.mode === 'light' ? colors.n600 : colors.n0} />
    </Pressable>
  );
}

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      ...layout.border,
      height: 48,
      width: 48,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
