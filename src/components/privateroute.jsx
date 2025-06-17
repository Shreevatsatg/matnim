import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/authcontext";

function PrivateRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) return <div>Checking authentication...</div>;

  if (!isAuthenticated) {
    // Redirect and save the current location
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

export default PrivateRoute;
