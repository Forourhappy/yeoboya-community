import { Outlet } from "@tanstack/react-router";
import { NavigationBar } from "~/app/NavigationBar";

export const RootLayout = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-background">
      <NavigationBar />
      <main className="">
        <div className="mx-auto min-w-xs p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
