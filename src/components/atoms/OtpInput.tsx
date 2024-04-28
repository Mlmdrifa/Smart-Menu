import React, { useMemo } from 'react';
import { OtpInput, OtpInputProps } from 'react-native-otp-entry';

import { colors } from '@/designs/colors';
import { useTheme } from '@/hooks/useTheme';

type OTPProps = Pick<OtpInputProps, 'onTextChange' | 'onFilled'> & { error?: boolean };

export default function OTPInput({ onTextChange, onFilled }: OTPProps) {
  const theme = useTheme();

  const otpTheme = useMemo(() => {
    return {
      pinCodeContainerStyle: {
        height: 54,
        width: 54,
        backgroundColor: theme.mode === 'light' ? colors.n0 : colors.n700,
        borderWidth: 1,
      },
    };
  }, [theme]);

  return (
    <OtpInput
      numberOfDigits={4}
      onTextChange={onTextChange}
      autoFocus
      onFilled={onFilled}
      theme={otpTheme}
    />
  );
}
