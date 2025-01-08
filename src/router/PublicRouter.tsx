import type { FC } from "react";
import Loading from "@/components/shared/loading";
import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PublicRouter: FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <Loading svgStyle="size-20" />
      </div>
    );
  }

  if (user) return <Navigate to="/dash/form" />;
  return <Outlet />;
};
export default PublicRouter;
