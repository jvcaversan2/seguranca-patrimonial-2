import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "./auth";
import type { ReactElement } from "react";
import { useEffect, useState } from "react";

export function PrivateRoute({ children }: { children: ReactElement }) {
  const accessToken = useAuthStore((state) => state.token);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => setLoading(false), 10);
  }, []);

  if (loading) return null;

  return accessToken ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
