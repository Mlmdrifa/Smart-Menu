import { Field } from 'houseform';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

import Input from './Input';

export default function FormFieldEmail() {
  const { t } = useTranslation();

  return (
    <Field name="email" onChangeValidate={z.string().email(t('form.email.error'))}>
      {({ value, setValue, onBlur, errors }) => (
        <Input
          value={value}
          onBlur={onBlur}
          onChangeText={(text) => setValue(text)}
          placeholder={t('form.email')}
          error={errors[0]}
          keyboardType="email-address"
        />
      )}
    </Field>
  );
}
