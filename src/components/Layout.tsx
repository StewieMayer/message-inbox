import React, { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps extends PropsWithChildren {
  headerContent: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, headerContent }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header>{headerContent}</Header>
      <main className="grow p-4">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
