import { memo, useEffect } from 'react';

import { emulator } from 'shared/api/emulator';
import { AppLink } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/const/route';

import AttentionIcon from 'shared/assets/attention.svg';

import sls from './VendErrorPage.module.css';

export const VendErrorPage = memo(() => {
  useEffect(() => {
    emulator.StopVend();
  }, []);

  return (
    <div className={sls.VendErrorPage}>
      <div className={sls.icon}>
        <AttentionIcon />
      </div>
      <h2 className={sls.title}>
        Данного напитка
        <br />
        {' '}
        нет в наличии
      </h2>
      <AppLink
        className={sls.btn}
        to={RoutePath.main}
      >
        Вернуться на главную
      </AppLink>
    </div>
  );
});
