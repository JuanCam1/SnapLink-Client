import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navbar from "@/components/shared/navbar/navbar";

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col dark:bg-zinc-950 bg-neutral-200 min-h-screen w-full">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </div>
  ),
});
