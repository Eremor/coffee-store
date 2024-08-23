import { memo } from 'react';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/const/route';

import BackIcon from 'shared/assets/back.svg';

import sls from './OrderPage.module.css';

export const OrderPage = memo(() => {
  return (
    <>
      <AppLink
        className={sls.backBtn}
        to={RoutePath.main}
      >
        <BackIcon />
      </AppLink>
      <div className={sls.payments}>
        <h2 className={sls.title}>Выберите способ оплаты:</h2>
        <AppLink
          className={sls.paymentBtn}
          to={RoutePath.order_cash}
          theme={AppLinkTheme.CONTAINED}
        >
          Наличными
        </AppLink>
        <AppLink
          className={sls.paymentBtn}
          to={RoutePath.order_card}
          theme={AppLinkTheme.CONTAINED}
        >
          Банковской картой
        </AppLink>
      </div>
    </>
  );
});
