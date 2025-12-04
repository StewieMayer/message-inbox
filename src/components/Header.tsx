import { PropsWithChildren } from "react";

const Header: React.FC<PropsWithChildren> = ({ children }) => {
  return <header className="bg-cyan-700 text-white p-4">{children}</header>;
};
export default Header;
