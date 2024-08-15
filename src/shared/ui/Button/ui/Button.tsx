import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { ButtonTheme } from '../const/ButtonTheme';
import { classNames } from 'shared/lib/helpers';

import sls from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  children: ReactNode
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    theme = ButtonTheme.CLEAR,
    children,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(sls.Button, [className, sls[theme]])}
      disabled={theme === ButtonTheme.DISABLES}
      {...otherProps}
    >
      {children}
    </button>
  );
});
