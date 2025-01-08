import { notification } from "./notification";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const catchError = (error: any) => {
	if (error.code === "auth/user-not-found") {
		notification("Usuario no encontrado", "error");
		return;
	}

	if (error.code === "auth/email-already-exists") {
		notification("Email ya registrado", "error");
		return;
	}

	if (error.code === "auth/id-token-expired") {
		notification(
			"Tu sesión ha expirado, por favor inicia sesión nuevamente",
			"error",
		);
		return;
	}

	if (error.code === "auth/id-token-revoked") {
		notification(
			"Tu sesión ha expirado, por favor inicia sesión nuevamente",
			"error",
		);
		return;
	}

	if (error.code === "auth/insufficient-permission") {
		notification("No tienes permiso para acceder a esta función", "error");
		return;
	}

	if (error.code === "auth/internal-error") {
		notification("Error interno, por favor intenta nuevamente", "error");
		return;
	}

	if (error.code === "auth/invalid-argument") {
		notification("Argumento no valido", "error");
		return;
	}

	if (error.code === "auth/invalid-credential") {
		notification("Credenciales no válidas", "error");
		return;
	}

	if (error.code === "auth/invalid-email") {
		notification("Email no valido", "error");
		return;
	}

	if (error.code === "auth/invalid-email-verified") {
		notification("Email no valido", "error");
		return;
	}

	if (error.code === "auth/invalid-id-token") {
		notification("Token de identificación no valido", "error");
		return;
	}

	if (error.code === "auth/invalid-password") {
		notification("Contraseña no válida", "error");
		return;
	}

	if (error.code === "auth/invalid-uid") {
		notification("UID no valido", "error");
		return;
	}

	notification("Error inesperado", "error");
	return;
};
