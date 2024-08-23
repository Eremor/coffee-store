import { memo, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { emulator } from 'shared/api/emulator';
import { RoutePath } from 'shared/const/route';

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
    <>
      vend
    </>
  );
});
