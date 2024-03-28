import { Field } from 'houseform';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

import Input from './Input';

export default function FormFieldUsername() {
  const { t } = useTranslation();
  return (
    <Field name="username" onChangeValidate={z.string().min(2, t('form.username.error'))}>
      {({ value, setValue, onBlur, errors }) => {
        return (
          <Input
            value={value}
            onBlur={onBlur}
            onChangeText={(text) => setValue(text)}
            placeholder={t('form.username')}
            error={errors[0]}
            keyboardType="ascii-capable"
          />
        );
      }}
    </Field>
  );
}
