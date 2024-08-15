import { useContext } from 'react';

import { Theme } from 'shared/const/theme';
import { ThemeContext } from 'shared/lib/context';

interface UseThemeResult {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  return {
    theme,
    setTheme,
  };
};
