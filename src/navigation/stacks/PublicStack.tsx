import { RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthentificationScreen from '@/screens/AuthentificationScreen';
import CreateAccountScreen from '@/screens/CreateAccountScreen';
import EmailVerificationScreen from '@/screens/EmailVerificationScreen';
import LoginScreen from '@/screens/LoginScreen';
import OtpScreen from '@/screens/OtpScreen';
import VerifyCodeScreen from '@/screens/VerifyCodeScreen';

export type PublicStackParamList = {
  Authentification: undefined;
  EmailVerification: undefined;
  Login: undefined;
  CreateAccount: undefined;
  VerifyCode: { phoneNumber?: string };
  OtpScreen: { phoneNumber: string };
};

export type PublicStackRoutes<RouteName extends keyof PublicStackParamList> = RouteProp<
  PublicStackParamList,
  RouteName
>;

const Public = createNativeStackNavigator<PublicStackParamList>();

export default function PublicStack() {
  return (
    // hide header in all Screens
    <Public.Navigator screenOptions={{ headerShown: false }}>
      <Public.Screen name="Authentification" component={AuthentificationScreen} />
      <Public.Screen name="EmailVerification" component={EmailVerificationScreen} />
      <Public.Screen name="Login" component={LoginScreen} />
      <Public.Screen name="CreateAccount" component={CreateAccountScreen} />
      <Public.Screen name="VerifyCode" component={VerifyCodeScreen} />
      <Public.Screen name="OtpScreen" component={OtpScreen} />
    </Public.Navigator>
  );
}
