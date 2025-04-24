import type { ReactNode } from "react";
import { NavigationBar } from "../NavigationBar";

export const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid h-screen grid-cols-12 grid-rows-12">
      <NavigationBar className="col-span-full row-span-1" />
      <main className="col-span-8 col-start-3 row-span-11 row-start-2 flex flex-col">
        <div className="flex grow items-center justify-center p-4">
          {children}
        </div>
      </main>
    </div>
  );
};

//
