import type { FC } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import Loading from "@/components/shared/loading";

const ProtectedRoute: FC = () => {
	const { user, loading } = useAuth();

	if (loading) {
		return (
			<div className="flex justify-center items-center w-full h-screen">
				<Loading svgStyle="size-20" />
			</div>
		);
	}

	if (!user) return <Navigate to="/auth/login" />;

	return <Outlet />;
};
export default ProtectedRoute;
