import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";

export default function RequireAuth() {
  const { auth } = useAuth();
  const location = useLocation();

  let user = false;

  if (localStorage.getItem("user")) {
    user = JSON.parse(localStorage.getItem("user"));
  } else if (auth.user) {
    user = auth.user;
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
