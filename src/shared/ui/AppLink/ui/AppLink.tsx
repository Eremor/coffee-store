import { memo, ReactNode } from 'react';
import { LinkProps, Link } from 'react-router-dom';

import { classNames } from 'shared/lib/helpers';

import { AppLinkTheme } from '../const/AppLinkTheme';

import sls from './AppLink.module.css';

interface AppLinkProps extends LinkProps {
  theme?: AppLinkTheme
  className?: string
  children?: ReactNode
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    className,
    theme = AppLinkTheme.CLEAR,
    children,
    to,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(sls.AppLink, [className, sls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
