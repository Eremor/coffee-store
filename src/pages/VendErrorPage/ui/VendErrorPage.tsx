import { memo, useEffect } from 'react';

import { emulator } from 'shared/api/emulator';

export const VendErrorPage = memo(() => {
  useEffect(() => {
    emulator.StopVend();
  }, []);

  return (
    <>
      VendErrorPage
    </>
  );
});
