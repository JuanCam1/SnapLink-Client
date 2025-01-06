/* eslint-disable react-refresh/only-export-components */
import { createContext, type ReactNode, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  type UserCredential,
  type User,
} from "firebase/auth";
import { auth } from "../lib/firebase";
import type { LoginModel } from "@/page/login/model/login-model";

type AuthProviderProps = {
  children: ReactNode;
};

type AuthProviderState = {
  signup: (email: string, password: string) => Promise<UserCredential>;
  login: (email: string, password: string) => Promise<UserCredential>;
  user: User | null;
  userName: LoginModel | null;
  saveUserName: (user: LoginModel) => void;
  logout: () => Promise<void>;
  loading: boolean;
  resetPassword: (email: string) => Promise<void>;
}

export const AuthProviderContext = createContext<AuthProviderState>(
  {} as AuthProviderState,
);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [userName, setUserName] = useState<LoginModel | null>(null);
  const [loading, setLoading] = useState(true);
  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => signOut(auth);

  const resetPassword = async (email: string) => sendPasswordResetEmail(auth, email);

  const saveUserName = (user: LoginModel) => {
    setUserName(user);
  }

  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubuscribe();
  }, []);

  return (
    <AuthProviderContext
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        resetPassword,
        userName,
        saveUserName
      }}
    >
      {children}
    </AuthProviderContext>
  );
}

export default AuthProvider;