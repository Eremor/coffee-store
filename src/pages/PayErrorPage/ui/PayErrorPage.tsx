import { memo } from "react";

import { AppLink } from "shared/ui/AppLink";
import { RoutePath } from "shared/const/route";

import CancelIcon from 'shared/assets/plus.svg'

import sls from './PayErrorPage.module.css';

export const PayErrorPage = memo(() => {
  return (
    <div className={sls.PayErrorPage}>
      <div className={sls.container}>
        <div className={sls.icon}>
          <CancelIcon />
        </div>
        <p className={sls.text}>
          Оплата не прошла
        </p>
      </div>
      <div className={sls.controls}>
        <AppLink
          className={sls.returnBtn}
          to={RoutePath.order_card}
        >
          Попробовать ещё раз
        </AppLink>
        <AppLink
          className={sls.cancelBtn}
          to={RoutePath.main}
        >
          Отмена
        </AppLink>
      </div>
    </div>
  )
})