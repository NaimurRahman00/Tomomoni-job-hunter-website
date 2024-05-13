import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const PrivateRoute = ({ children }) => {
  // toast
  const displayErrorToast = () => {
    toast.error("You have to log in first to view details");
  };

  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <h1>Loading...</h1>;
  if (user) return children;

  // Function to display error toast and navigate to login page
  const navigateToLogin = () => {
    displayErrorToast();
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  };

  return navigateToLogin();
};

export default PrivateRoute;
