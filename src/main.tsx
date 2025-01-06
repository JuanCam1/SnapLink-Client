import { createRoot } from "react-dom/client";
import AppRouter from "./router/AppRouter.tsx";
import { Toaster } from "sonner";

import ThemeProvider from "./context/ThemeContext.tsx";
import AuthProvider from "./context/AuthContext.tsx";
import "./index.css";

const idRoot = document.getElementById("root") as HTMLElement;

createRoot(idRoot).render(
  <ThemeProvider defaultTheme="dark" storageKey="blog-ui-theme">
    <AuthProvider>
      <AppRouter />
      <Toaster richColors position="top-right" expand={false} />
    </AuthProvider>
  </ThemeProvider>,
);
