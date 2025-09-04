import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <Outlet />
    </main>
  );
};

export default Layout;