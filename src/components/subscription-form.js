/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Input, Button, Label } from 'theme-ui';

const SubscriptionForm = ({ buttonLabel, ...props }) => {
  return (
    <Flex as="form" sx={styles.form} {...props}>
      <Label htmlFor="email" variant="styles.srOnly">
        Email
      </Label>
      <Input type="email" id="email" placeholder="Geben Sie Ihre E-Mail-Adresse ein." />
      <Button>{buttonLabel ?? 'Loslegen'}</Button>
    </Flex>
  );
};

export default SubscriptionForm;

const styles = {
  form: {
    input: {
      flexGrow: 1,
      p: ['0 20px', null, null, null, '0 25px'],
      minHeight: [60],
      height: 'auto',
      width: 'auto',
    },
    button: {
      ml: [3],
    },
  },
};
