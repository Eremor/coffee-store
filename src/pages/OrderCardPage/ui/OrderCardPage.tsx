import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getTotalPrice } from 'entities/Total';

import { AppLink } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/const/route';
import { emulator } from 'shared/api/emulator';

import CardIcon from 'shared/assets/card.svg';

import sls from './OrderCardPage.module.css';

export const OrderCardPage = memo(() => {
  const total = useSelector(getTotalPrice);

  const emulate = useCallback((result: boolean) => {
    if (result) {
      console.log('Платёж прошел успешно');
    }
    else {
      console.log('Платёж не удался');
      emulator.BankCardCancel();
    }
  }, []);

  const printMessage = useCallback((message: string) => {
    console.log(`Пин-пад: ${message}`);
  }, []);

  useEffect(() => {
    emulator.BankCardPurchase(
      total,
      emulate,
      printMessage,
    );
  }, []);

  return (
    <div className={sls.OrderCardPage}>
      <div className={sls.container}>
        <div className={sls.icon}>
          <CardIcon />
        </div>
        <p className={sls.text}>
          Приложите карту к терминалу
        </p>
      </div>
      <AppLink
        className={sls.cancel}
        to={RoutePath.order}
      >
        Отмена
      </AppLink>
    </div>
  );
});
