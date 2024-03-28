import { Form } from 'houseform';
import { useTranslation } from 'react-i18next';

import Box from '../atoms/Box';
import Button from '../molecules/Button';
import FormFieldEmail from '../molecules/FormFieldEmail';
import FormFieldPassword from '../molecules/FormFieldPassword';
import FormFieldPhoneNumber from '../molecules/FormFieldPhoneNumber';
import FormFieldUsername from '../molecules/FormFieldUsername';

interface FormType {
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
}

interface AccountFormProps {
  onSubmit: (values: FormType) => void;
}

export default function AccountForm({ onSubmit }: AccountFormProps) {
  const { t } = useTranslation();
  return (
    <Form<FormType>
      onSubmit={(values) => {
        onSubmit(values);
      }}>
      {({ isValid, submit }) => (
        <Box flex gap={40}>
          <FormFieldUsername />
          <FormFieldEmail />
          <FormFieldPhoneNumber />
          <FormFieldPassword />
          <Box flex />
          <Button disabled={!isValid} onPress={submit} variant="primary">
            {t('cta.next')}
          </Button>
        </Box>
      )}
    </Form>
  );
}
