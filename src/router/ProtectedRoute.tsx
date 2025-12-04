import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../utils/authController";

const ProtectedRoute: React.FC = () => {
  if (!isLoggedIn()) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
