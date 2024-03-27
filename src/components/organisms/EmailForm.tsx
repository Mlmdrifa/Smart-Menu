import { Field, Form } from 'houseform';
import { useTranslation } from 'react-i18next';
import { Alert, View } from 'react-native';
import { z } from 'zod';

import Box from '../atoms/Box';
import Button from '../molecules/Button';
import Input from '../molecules/Input';

export default function EmailForm() {
  const { t } = useTranslation();

  return (
    <Form
      onSubmit={(values) => {
        Alert.alert('Form was submitted with: ' + JSON.stringify(values));
      }}>
      {({ isValid, submit }) => (
        <Box flex>
          <Field name="email" onChangeValidate={z.string().email(t('form.emailForm.errorMessage'))}>
            {({ value, setValue, onBlur, errors }) => {
              return (
                <View>
                  <Input
                    value={value}
                    onBlur={onBlur}
                    onChangeText={(text) => setValue(text)}
                    placeholder="Email"
                    error={errors[0]}
                  />
                </View>
              );
            }}
          </Field>
          <Box flex />

          <Button disabled={!isValid} onPress={submit} variant="primary">
            {t('screen.emailVerification.cta')}
          </Button>
        </Box>
      )}
    </Form>
  );
}
