import { memo, useEffect } from 'react';

import { emulator } from 'shared/api/emulator';

import CupIcon from 'shared/assets/cup.svg';

import sls from './VendFinishPage.module.css';

export const VendFinishPage = memo(() => {
  useEffect(() => {
    emulator.StopVend();
  }, []);

  return (
    <div className={sls.VendFinishPage}>
      <div className={sls.icon}>
        <CupIcon />
      </div>
      <h2 className={sls.title}>
        Напиток готов!
      </h2>
      <p className={sls.text}>
        вы можете забрать его
      </p>
    </div>
  );
});
