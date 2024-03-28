import { Form } from 'houseform';
import { useTranslation } from 'react-i18next';

import Box from '../atoms/Box';
import Button from '../molecules/Button';
import FormFieldEmail from '../molecules/FormFieldEmail';

interface EmailFormProps {
  onSubmit: (email: string) => void;
}

export default function EmailForm({ onSubmit }: EmailFormProps) {
  const { t } = useTranslation();

  return (
    <Form<{ email: string }>
      onSubmit={(values) => {
        onSubmit(values.email);
      }}>
      {({ isValid, submit }) => (
        <Box flex>
          <FormFieldEmail />
          <Box flex />
          <Button disabled={!isValid} onPress={submit} variant="primary">
            {t('cta.next')}
          </Button>
        </Box>
      )}
    </Form>
  );
}
