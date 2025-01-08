import type { FC } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import Loading from "@/components/shared/loading";

const ProtectedRoute: FC = () => {
  const { user, loading } = useAuth();
  console.log("🚀 ~ ProtectedRoute ~ user:");

  if (loading) return <Loading contain="py-20" svgStyle="size-20" />;

  if (!user) return <Navigate to="/auth/login" />;

  return <Outlet />;
}
export default ProtectedRoute