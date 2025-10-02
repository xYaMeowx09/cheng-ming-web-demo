import { Outlet } from 'react-router';
import Navbar from './Navbar';

function Layout() {
  return (
    <>
      <Navbar />
      <div className="mt-5">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
