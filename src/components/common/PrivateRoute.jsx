import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { checkAuthentication } from 'store';

function PrivateRoute() {
  const location = useLocation();
  const checkUser = checkAuthentication();
  if (checkUser) return <Outlet />;
  else return <Navigate to="/members/login" state={{ from: location }} />;
}

export default PrivateRoute;
