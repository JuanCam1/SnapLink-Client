import type { FC } from "react";
import Loading from "@/components/shared/loading";
import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PublicRouter: FC = () => {
  const { user, loading } = useAuth();

  if (loading) return <Loading contain="pt-40" svgStyle="size-20" />;

  if (user) return <Navigate to="/dash/form" />;

  return <Outlet />;
}
export default PublicRouter