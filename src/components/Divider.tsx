import { StyleSheet, View } from 'react-native';

import Box from './Box';
import Typo from './Typo';

import { colors } from '@/designs/colors';
import { useTheme } from '@/hooks/useTheme';
import { Theme } from '@/providers/ThemeProvider';

export default function Divider() {
  const theme = useTheme();
  return (
    <Box horizontal xcenter gap={10}>
      <View style={styles(theme).line} />
      <Typo variant="caption3">OR</Typo>
      <View style={styles(theme).line} />
    </Box>
  );
}

const styles = (theme: Theme) =>
  StyleSheet.create({
    line: {
      height: 1,
      backgroundColor: theme.mode === 'light' ? colors.n200 : colors.n600,
      flex: 1,
    },
  });
