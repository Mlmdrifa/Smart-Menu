import { Field } from 'houseform';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

import Input from './Input';

export default function FormFieldPassword() {
  const { t } = useTranslation();
  return (
    <Field name="password" onChangeValidate={z.string().min(8, t('form.password.error'))}>
      {({ value, setValue, onBlur, errors }) => {
        return (
          <Input
            value={value}
            onBlur={onBlur}
            onChangeText={(text) => setValue(text)}
            placeholder={t('form.password')}
            error={errors[0]}
            secureTextEntry
          />
        );
      }}
    </Field>
  );
}
