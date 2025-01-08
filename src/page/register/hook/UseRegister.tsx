import type { FormEvent, RefObject } from "react";
import { setDoc, doc } from "firebase/firestore";

import { useAuth } from "@/hooks/useAuth";
import { db } from "@/lib/firebase";

import { capitalize } from "@/utils/capitalize";
import { catchError } from "@/utils/catchError";
import { notification } from "@/utils/notification";

const UseRegister = (formRef: RefObject<HTMLFormElement | null>) => {
	const { signup } = useAuth();
	const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		try {
			const formData = new FormData(evt.currentTarget);
			const name = formData.get("name") as string;
			const username = formData.get("username") as string;
			const email = formData.get("email") as string;
			const password = formData.get("password") as string;

			if (!name || !username || !email || !password) {
				notification("Los campos son obligatorios", "warning");
				return;
			}

			if (name.length < 6 && name.length > 40) {
				notification("Los campos son obligatorios", "warning");
				return;
			}

			const nameCapitalize = capitalize(name);

			const userRegister = await signup(email, password);

			await setDoc(doc(db, "user", userRegister.user.uid), {
				id: userRegister.user.uid,
				name: nameCapitalize,
				username: username,
				createdAt: new Date().toISOString(),
			});

			formRef.current?.reset();
		} catch (error) {
			catchError(error);
		}
	};
	return {
		handleSubmit,
	};
};
export default UseRegister;
