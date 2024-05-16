import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <Header />
      <div style={{ padding: ' 80px 0 0' }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Layout;
