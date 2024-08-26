import { ReactNode, useMemo, useState } from 'react';
import { Theme } from 'shared/const/theme';
import { ThemeContext } from 'shared/lib/context';

interface ThemeProviderProps {
  initialTheme?: Theme
  children: ReactNode
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const {
    initialTheme,
    children,
  } = props;
  const [theme, setTheme] = useState<Theme>(initialTheme || Theme.COFFEE);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
