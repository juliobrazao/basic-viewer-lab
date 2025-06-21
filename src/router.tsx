import { createBrowserRouter } from 'react-router';
import Home from '@/pages/home.page';
import NotFound from '@/pages/not-found.page';
import Layout from './components/layout.component';

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
