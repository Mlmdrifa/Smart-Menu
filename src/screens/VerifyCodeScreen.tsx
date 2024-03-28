import { RouteProp, useRoute } from '@react-navigation/native';

import ScreenWrapper from '@/components/ScreenWrapper';
import Box from '@/components/atoms/Box';
import Spacer from '@/components/atoms/Spacer';
import Typo from '@/components/atoms/Typo';
import AuthMethodItem from '@/components/molecules/AuthMethodItem';
import Button from '@/components/molecules/Button';
import { PublicStackParamList } from '@/navigation/stacks/PublicStack';

export default function VerifyCodeScreen() {
  const route = useRoute<RouteProp<PublicStackParamList, 'VerifyCode'>>();
  const { email, phoneNumber } = route.params;
  const onSubmit = () => {};

  return (
    <ScreenWrapper>
      <Spacer vertical={70} />
      <Box flex>
        <Box gap={14}>
          <Typo center variant="h2">
            ️Verify Code ⚡️
          </Typo>
          <Typo center variant="body2">
            Select where do you want to receive the verification code
          </Typo>
          <Spacer vertical={60} />

          <AuthMethodItem email={email} phoneNumber={phoneNumber} />
        </Box>
        <Box flex />

        <Button onPress={onSubmit} variant="primary">
          Next
        </Button>
      </Box>
    </ScreenWrapper>
  );
}
