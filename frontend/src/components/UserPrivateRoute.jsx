import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const UserPrivateRoute = ({ children }) => {
  const location = useLocation();
  const auth = useSelector((store) => {
    return store.authReducer.isAuth;
  });
  console.log(auth);
    return !auth ? (
      <Navigate to={"/login"} state={location.pathname} replace={true} />
    ) : (
      children
    );
//   return !auth ? <Login text={"Bag"} /> : children;
};
