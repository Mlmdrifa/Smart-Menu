import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PrivateStack from './stacks/PrivateStack';
import PublicStack, { PublicStackParamList } from './stacks/PublicStack';

import { useNavigationTheme } from '@/hooks/useNavigationTheme';

type RootStackParamList = {
  // For PublicStackScreens injection in RootStack
  PublicStack: NavigatorScreenParams<PublicStackParamList>;
  PrivateStack: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  const navTheme = useNavigationTheme();
  const user = false;
  return (
    <NavigationContainer theme={navTheme}>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <RootStack.Screen name="PrivateStack" component={PrivateStack} />
        ) : (
          <RootStack.Screen name="PublicStack" component={PublicStack} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
