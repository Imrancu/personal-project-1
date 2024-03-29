import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation();

  if (loading) {
    return (
      <button className="btn">
        <span className="loading loading-spinner"></span>
        loading
      </button>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;
