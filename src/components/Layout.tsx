import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="grow p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
