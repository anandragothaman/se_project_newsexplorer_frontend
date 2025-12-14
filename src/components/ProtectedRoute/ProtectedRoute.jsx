import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import AppContext from "../Contexts/AppContext";

function ProtectedRoute({ children, anonymous = false }) {
  const location = useLocation();
  const from = location.state?.from || "/";

  const { isLoggedIn, isAuthChecked } = useContext(AppContext);
  if (!isAuthChecked) {
    return null;
  }
  if (anonymous && isLoggedIn) {
    return <Navigate to={from} replace />;
  }
  if (!anonymous && !isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
}

export default ProtectedRoute;
