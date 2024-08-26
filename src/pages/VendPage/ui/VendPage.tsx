import { memo, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { emulator } from 'shared/api/emulator';
import { RoutePath } from 'shared/const/route';
import { Timer } from 'shared/ui/Timer';

import sls from './VendPage.module.css';

export const VendPage = memo(() => {
  const navigate = useNavigate();

  const emulate = useCallback((result: boolean) => {
    if (result) {
      console.log('Кофе выдано успешно');
      navigate(RoutePath.vend_finish);
    }
    else {
      console.log('Ошибка выдачи кофе');
      navigate(RoutePath.vend_error);
    }
  }, []);

  useEffect(() => {
    emulator.Vend(
      '1',
      emulate,
    );
  }, []);

  return (
    <div className={sls.VendPage}>
      <Timer
        initialTime={60}
        path={RoutePath.vend_finish}
      />
    </div>
  );
});
