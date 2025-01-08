import { useState, type FormEvent } from "react";
import { doc, getDoc } from "firebase/firestore";

import { useAuth } from "@/hooks/useAuth";
import { db } from "@/lib/firebase";

import { catchError } from "@/utils/catchError";
import { notification } from "@/utils/notification";
import type { LoginModel } from "../model/login-model";
import { useNavigate } from "react-router-dom";

const UseLogin = () => {
	const { login, saveUserName } = useAuth();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		try {
			const formData = new FormData(evt.currentTarget);
			const email = formData.get("email") as string;
			const password = formData.get("password") as string;

			if (!email || !password) {
				notification("Los campos son obligatorios", "warning");
				return;
			}

			setLoading(true);
			const userLogin = await login(email, password);

			const docRef = doc(db, "user", userLogin.user.uid);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				const userData: LoginModel = {
					name: docSnap.data().name,
					username: docSnap.data().username,
				};
				saveUserName(userData);
				navigate("/dash/form");
				setLoading(false);
			} else {
				setLoading(false);
				notification("Usuario no encontrado", "warning");
			}
		} catch (error) {
			setLoading(false);
			catchError(error);
		}
	};
	return {
		handleSubmit,
		loading,
	};
};
export default UseLogin;
