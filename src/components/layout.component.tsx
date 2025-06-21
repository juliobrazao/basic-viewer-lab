import { Outlet } from 'react-router';
import Header from './header.component';
import { MenuItem } from '@/models/menu-item.model';

export default function Layout() {
  const title = 'Project Zero';
  const menuItems: MenuItem[] = [
    {
      title: 'Home',
      url: '/',
      isActive: true,
    },
    {
      title: 'About',
      url: '/about',
      isActive: false,
    },
  ];

  return (
    <>
      <Header title={title} menuItems={menuItems} />
      <div className="container-fluid mt-3">
        <Outlet />
      </div>
    </>
  );
}
