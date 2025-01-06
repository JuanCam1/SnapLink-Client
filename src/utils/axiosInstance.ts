import axios from "axios";
import { config } from "../config/config";
// import { useLoginStore } from "../store/login/login.store";

const apiUrl = config.PATH_URL;

export const instance = axios.create({
	baseURL: apiUrl,
});

// instance.interceptors.request.use((config) => {
//   const token = useLoginStore.getState().token;
//   const userData = useLoginStore.getState().userData;

//   if (token || userData) {
//     config.headers["Authorization"] = `Bearer ${token}`;
//     config.headers["X-User-Data"] = JSON.stringify(userData);
//   }

//   return config;
// });
