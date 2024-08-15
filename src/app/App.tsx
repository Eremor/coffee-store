import { useTheme } from 'shared/lib/hooks';
import { classNames } from 'shared/lib/helpers';

import { AppRouter } from './providers/RouterProvider';

import './styles/index.css';

export const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', [theme])}>
      <AppRouter />
    </div>
  );
};
