import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'app/providers/ThemeProvider';
import { StoreProvider } from 'app/providers/StoreProvider';

import { App } from 'app/App';

const container = document.getElementById('root');

if (!container) {
  throw new Error('root not found');
}

createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <StoreProvider>
          <App />
        </StoreProvider>
      </ThemeProvider>
    </BrowserRouter>
    ,
  </StrictMode>,
);
