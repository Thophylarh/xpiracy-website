import { createBrowserRouter } from 'react-router-dom';
import WebLayout from '../components/layouts/WebLayout';
import React from 'react';
import Hero from '../pages/landingpage/Hero';
import Home from '../pages/landingpage/Home';
import SingleSuccess from '../pages/landingpage/SingleSuccess';

import MultipleEmailPayment from '../pages/MultipleEmailPayment';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        // index: true,
        element: <WebLayout />,
        children: [
          { element: <Home />, path: '/' },
          { element: <SingleSuccess />, path: '/singlePayment' },
          { element: <MultipleEmailPayment />, path: '/multiPayment' },
        ],
      },
    ],
  },
]);

export default router;
