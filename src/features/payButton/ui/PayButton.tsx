import { memo } from "react";

import { AppLink, AppLinkTheme } from "shared/ui/AppLink";
import { RoutePath } from "shared/const/route";
import { classNames } from "shared/lib/helpers";

import sls from './PayButton.module.css';

interface PayButtonProps {
  total: number;
  className?: string;
}

export const PayButton = memo((props: PayButtonProps) => {
  const {
    total,
    className
  } = props;

  return (
    <AppLink
      to={RoutePath.order}
      className={classNames(sls.PayButton, [className])}
      theme={AppLinkTheme.CONTAINED}
    >
      <span>Оплатить</span>
      <span className={sls.total}>
        {total}
        &#8381;
      </span>
    </AppLink>
  )
})