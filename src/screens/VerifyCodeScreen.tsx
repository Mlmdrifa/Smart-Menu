import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';

import ScreenWrapper from '@/components/ScreenWrapper';
import Box from '@/components/atoms/Box';
import Icon from '@/components/atoms/Icon';
import Spacer from '@/components/atoms/Spacer';
import Typo from '@/components/atoms/Typo';
import AuthMethodItem from '@/components/molecules/AuthMethodItem';
import Button from '@/components/molecules/Button';
import { useTheme } from '@/hooks/useTheme';
import { PublicStackParamList } from '@/navigation/stacks/PublicStack';

export default function VerifyCodeScreen() {
  const theme = useTheme();
  const navigation = useNavigation();

  const route = useRoute<RouteProp<PublicStackParamList, 'VerifyCode'>>();
  const { email, phoneNumber } = route.params;
  const onSubmit = () => {};

  return (
    <ScreenWrapper>
      <Spacer vertical={16} />
      <Pressable onPress={navigation.goBack}>
        <Icon iconName="ArrowLeft" stroke={theme.text} />
      </Pressable>
      <Spacer vertical={50} />
      <Box flex>
        <Box gap={14}>
          <Typo center variant="h2">
            Verify Code ⚡️
          </Typo>
          <Typo center variant="body2">
            Select where do you want to receive the verification code
          </Typo>
          <Spacer vertical={40} />
          <Box gap={24}>
            <AuthMethodItem title="Via email" value={email} onPress={() => {}} />
            <AuthMethodItem title="Via SMS" value={phoneNumber} onPress={() => {}} />
          </Box>
        </Box>
        <Box flex />

        <Button onPress={onSubmit} variant="primary">
          Next
        </Button>
      </Box>
    </ScreenWrapper>
  );
}
