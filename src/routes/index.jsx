import Layout from 'components/common/Layout';
import PrivateRoute from 'components/common/PrivateRoute';
import Main from 'pages/Main';
import Join from 'pages/auth/Join';
import Login from 'pages/auth/Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const MainRoutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [{ path: '', element: <Main /> }],
    },
    {
      // 비회원
      path: 'members',
      children: [
        { path: 'join', element: <Join /> },
        { path: 'login', element: <Login /> },
      ],
    },
    {
      // members - 회원
      path: 'members',
      element: <PrivateRoute />,
      children: [{ path: 'logout' }],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MainRoutes;
