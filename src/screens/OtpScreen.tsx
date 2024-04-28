import { RouteProp, useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import ScreenWrapper from '@/components/ScreenWrapper';
import Box from '@/components/atoms/Box';
import OTPInput from '@/components/atoms/OtpInput';
import Spacer from '@/components/atoms/Spacer';
import Typo from '@/components/atoms/Typo';
// import Button from '@/components/molecules/Button';
import NavigationBar from '@/components/organisms/NavigationBar';
import { PublicStackParamList } from '@/navigation/stacks/PublicStack';

export default function OtpScreen() {
  const { t } = useTranslation();

  const route = useRoute<RouteProp<PublicStackParamList, 'OtpScreen'>>();
  const { email, phoneNumber } = route.params;

  return (
    <ScreenWrapper>
      <Spacer vertical={16} />
      <NavigationBar />
      <Spacer vertical={40} />
      <Box flex>
        <Box gap={14}>
          <Typo center variant="h2">
            {t('screen.verifyCode.title')}
          </Typo>
          <Typo variant="body2">
            We just sent a 4-digit verification code to {email}. Enter the code in the box below to
            continue.
          </Typo>
          <Typo variant="h1">{email}</Typo>
          <Typo variant="h1">{phoneNumber}</Typo>
          <OTPInput />
          <Typo variant="body2">Didn’t receive a code? Resend Code</Typo>
        </Box>
      </Box>
    </ScreenWrapper>
  );
}
