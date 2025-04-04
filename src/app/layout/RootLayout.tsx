import type { ReactNode } from "react";
import { NavigationBar } from "~/app/NavigationBar";

export const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen overflow-hidden bg-background">
      <NavigationBar />
      <main className="">
        <div className="mx-auto min-w-xs p-4">{children}</div>
      </main>
    </div>
  );
};
