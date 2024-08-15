import { memo } from 'react';

import { AuthButton } from 'features/authUser';
import Figure from 'shared/assets/figure.svg';

import sls from './Header.module.css';

export const Header = memo(() => (
  <header className={sls.Header}>
    <div className={sls.figure}>
      <Figure />
    </div>
    <div className={sls.wrapper}>
      <h2 className={sls.title}>Выбор напитка</h2>
      <AuthButton />
    </div>
  </header>
));
