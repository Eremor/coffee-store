import { memo } from 'react';
import { Button } from 'shared/ui/Button';

import PhoneIcon from 'shared/assets/phone.svg';

import sls from './AuthButton.module.css';

export const AuthButton = memo(() => {
  return (
    <Button className={sls.AuthButton}>
      <span className={sls.icon}>
        <PhoneIcon />
      </span>
      <span className={sls.title}>
        Вход / регистрация
      </span>
    </Button>
  );
});
