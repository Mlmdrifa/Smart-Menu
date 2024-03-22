import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

import { useTheme } from '@/hooks/useTheme';

export default function AuthentificationScreen() {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Text
        onPress={() => navigation.navigate('PublicStack', { screen: 'EmailVerification' })}
        style={{ color: theme.text }}>
        Authentification
      </Text>
    </View>
  );
}
