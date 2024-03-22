import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PrivateStack from "./stacks/PrivateStack";
import PublicStack from "./stacks/PublicStack";

type RootStackParamList = {
  PublicStack: undefined;
  PrivateStack: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  const user = false;
  return (
    <NavigationContainer>
      <RootStack.Navigator>
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
