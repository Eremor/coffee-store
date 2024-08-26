import { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getTotalPrice } from 'entities/Total';

import { AppLink } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/const/route';
import { emulator } from 'shared/api/emulator';

import RubIcon from 'shared/assets/rub.svg';

import sls from './OrderCashPage.module.css';

export const OrderCashPage = memo(() => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0);
  const total = useSelector(getTotalPrice);

  useEffect(() => {
    emulator.StartCashin((amount) => {
      setAmount(prev => prev + amount);
      console.log(`Принята купюра номиналом ${amount}`);
    });
  }, []);

  useEffect(() => {
    if (total - amount < 0) {
      emulator.StopCashin();
      setTimeout(() => {
        navigate(RoutePath.vend);
      }, 2000);
    }
  }, [amount]);

  return (
    <div className={sls.OrderCashPage}>
      <div className={sls.container}>
        <div className={sls.icon}>
          <RubIcon />
        </div>
        <p className={sls.text}>
          Заказа на сумму:
          <span>
            {total}
            {' '}
            &#8381;
          </span>
        </p>
        <p className={sls.text}>
          Внесено:
          <span>
            {amount}
            {' '}
            &#8381;
          </span>
        </p>
        {
          (total > amount)
            ? (
              <p className={sls.text}>
                Осталось внести:
                <span>
                  {total - amount}
                  {' '}
                  &#8381;
                </span>
              </p>
            )
            : (
              <p className={sls.text}>
                Не забудьте сдачу:
                <span>
                  {amount - total}
                  {' '}
                  &#8381;
                </span>
              </p>
            )
        }
      </div>
      <AppLink
        className={sls.cancel}
        to={RoutePath.order}
        onClick={() => emulator.StopCashin()}
      >
        Отмена
      </AppLink>
    </div>
  );
});
