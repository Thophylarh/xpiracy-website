import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import router from './routes/index';
import AppContextProvider from './context/AppContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles>
      <AppContextProvider>
        <RouterProvider router={router} />
      </AppContextProvider>
    </MantineProvider>
  </React.StrictMode>
);
