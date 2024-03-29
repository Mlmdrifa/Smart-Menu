import { Field } from 'houseform';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable } from 'react-native';
import { z } from 'zod';

import Input from './Input';
import Icon from '../atoms/Icon';

import { colors } from '@/designs/colors';

export default function FormFieldPassword() {
  const [isSecured, setIsSecured] = useState(true);
  const { t } = useTranslation();

  const handleSecureTextEntry = useCallback(() => {
    setIsSecured((prev) => !prev);
  }, []);

  return (
    <Field name="password" onChangeValidate={z.string().min(8, t('form.password.error'))}>
      {({ value, setValue, onBlur, errors }) => (
        <Input
          value={value}
          onBlur={onBlur}
          onChangeText={(text) => setValue(text)}
          placeholder={t('form.password')}
          error={errors[0]}
          secureTextEntry={isSecured}
          rightIconName={
            <Pressable onPress={handleSecureTextEntry}>
              <Icon iconName={isSecured ? 'EyeOff' : 'Eye'} stroke={colors.n500} />
            </Pressable>
          }
        />
      )}
    </Field>
  );
}
