import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthentificationScreen from '@/screens/AuthentificationScreen';
import EmailVerificationScreen from '@/screens/EmailVerificationScreen';
import LoginScreen from '@/screens/LoginScreen';

export type PublicStackParamList = {
  Authentification: undefined;
  EmailVerification: undefined;
  Login: undefined;
};

const Public = createNativeStackNavigator<PublicStackParamList>();

export default function PublicStack() {
  return (
    // hide header in all Screens
    <Public.Navigator screenOptions={{ headerShown: false }}>
      <Public.Screen name="Authentification" component={AuthentificationScreen} />
      <Public.Screen name="EmailVerification" component={EmailVerificationScreen} />
      <Public.Screen name="Login" component={LoginScreen} />
    </Public.Navigator>
  );
}
