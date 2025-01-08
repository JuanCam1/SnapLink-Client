import LoginPage from "@/page/login/LoginPage";
import RegisterPage from "@/page/register/RegisterPage";
import HomePage from "@/page/home/HomePage";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import DashboardPage from "@/page/dahsboard/DashboardPage";
import ProtectedRoute from "./ProtectedRoute";
import PublicRouter from "./PublicRouter";
import FormLink from "@/page/dahsboard/pages/FormLink";
import ListLink from "@/page/dahsboard/pages/ListLink";
import RedirectPage from "@/page/redirect/RedirectPage";

const AppRouter = () => {
	const routerApp = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path="/" element={<HomePage />} />
				<Route path="/:slug" element={<RedirectPage />} />

				<Route path="/dash" element={<ProtectedRoute />}>
					<Route element={<DashboardPage />}>
						<Route index path="form" element={<FormLink />} />
						<Route path="list" element={<ListLink />} />
					</Route>
				</Route>

				<Route path="/auth" element={<PublicRouter />}>
					<Route path="login" element={<LoginPage />} />
				</Route>

				<Route path="/register" element={<RegisterPage />} />
			</>,
		),
	);

	return <RouterProvider router={routerApp} />;
};
export default AppRouter;
