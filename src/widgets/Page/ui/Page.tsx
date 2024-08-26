import { memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/helpers';

import sls from './Page.module.css';

interface PageProps {
  className?: string
  children: ReactNode
}

export const Page = memo((props: PageProps) => {
  const {
    className,
    children,
  } = props;

  return (
    <div className={classNames(sls.page, [className])}>
      {children}
    </div>
  );
});
