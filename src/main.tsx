import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import HomeRoute from './routes/HomeRoute.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomeRoute />,
      },
    ],
  },
]);

ReactDOM.createRoot(
  document.getElementById('root')!
).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
