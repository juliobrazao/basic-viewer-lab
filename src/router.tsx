import { createBrowserRouter } from 'react-router';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import Layout from './components/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
