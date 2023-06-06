import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [isAdmin, isAdminLoading] = useAdmin();

  if (loading || isAdminLoading) {
    return (
      <div className="flex items-center justify-center h-[100vh]">
        <progress className="progress progress-info w-56"></progress>
      </div>
    );
  }

  if (user?.email && isAdmin) {
    return children;
  }

  return <Navigate to="/error" state={{ from: location }} replace />;
};

export default AdminRoute;
