import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const AdminPrivateRoute = ({ children }) => {
  const location = useLocation();
  const adminAuth = useSelector((store) => {
    return store.authReducer.isAdminAuth;
  });
  // console.log(auth);
  return ! adminAuth ? (
    <Navigate to={"/login"} state={location.pathname} replace={true} />
  ) : (
    children
  );
};
