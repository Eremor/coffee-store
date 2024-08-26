import { Page } from 'widgets/Page';

import { useTheme } from 'shared/lib/hooks';
import { classNames } from 'shared/lib/helpers';

import { AppRouter } from './providers/RouterProvider';

import './styles/index.css';

export const App = () => {
  const { theme } = useTheme();
  return (
    <main className={classNames('app', [theme])}>
      <Page>
        <AppRouter />
      </Page>
    </main>
  );
};
