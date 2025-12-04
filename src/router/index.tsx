import { createBrowserRouter, Navigate } from 'react-router-dom';
import LoginPage from '../pages/login/LoginPage';
import InboxPage from '../pages/inbox/InboxPage';
import ProtectedRoute from './ProtectedRoute';
import Layout from '../components/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/app',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/app',
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Navigate to="/app/inbox" replace />,
          },
          {
            path: 'inbox',
            element: <InboxPage />,
          },
        ],
      },
    ],
  },
]);
