import { use } from "react";
import { AuthProviderContext } from "@/context/AuthContext";

export const useAuth = () => {
	const context = use(AuthProviderContext);
	if (!context) throw new Error("There is no Auth provider");
	return context;
};
