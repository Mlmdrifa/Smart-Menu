import { Field } from 'houseform';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

import Input from './Input';

export default function FormFieldPhoneNumber() {
  const { t } = useTranslation();
  return (
    <Field
      name="phoneNumber"
      onChangeValidate={z.string().regex(/^[0-9]{10}$/, t('form.phoneNumber.error'))}>
      {({ value, setValue, onBlur, errors }) => {
        return (
          <Input
            value={value}
            onBlur={onBlur}
            onChangeText={(text) => setValue(text)}
            placeholder={t('form.phoneNumber')}
            error={errors[0]}
            keyboardType="phone-pad"
          />
        );
      }}
    </Field>
  );
}
