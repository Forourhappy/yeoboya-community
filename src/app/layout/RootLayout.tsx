import type { ReactNode } from "react";
import { NavigationBar } from "~/app/NavigationBar";

export const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <NavigationBar />
      <main className="flex min-w-xs flex-grow items-center justify-center p-4">
        {children}
      </main>
    </div>
  );
};
