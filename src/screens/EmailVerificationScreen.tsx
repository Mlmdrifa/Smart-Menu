import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

export default function EmailVerificationScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text onPress={() => navigation.goBack()}>Email</Text>
    </View>
  );
}
