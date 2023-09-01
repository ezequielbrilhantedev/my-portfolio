import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
// import {
//   RouterProvider,
//   ScrollRestoration,
//   createBrowserRouter,
// } from 'react-router-dom';
// import HomeRoute from './routes/HomeRoute.tsx';
// import About from './components/About/About.tsx';
// import { Navbar } from './components/Navbar/Navbar.tsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '/',
//         element: <HomeRoute />,
//       },
//       {
//         path: '/home',
//         element: <HomeRoute />,
//       },
//       {
//         path: '/sobre',
//         element: <About />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(
  document.getElementById('root')!
).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <>
      <App />
    </>
  </React.StrictMode>
);
