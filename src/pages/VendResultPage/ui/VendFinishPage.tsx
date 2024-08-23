import { memo, useEffect } from 'react';
import { emulator } from 'shared/api/emulator';

export const VendFinishPage = memo(() => {
  useEffect(() => {
    emulator.StopVend();
  }, []);

  return (
    <>
      VendFinishPage
    </>
  );
});
