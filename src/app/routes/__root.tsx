import {
  CatchBoundary,
  ErrorComponent,
  Outlet,
  createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { RootLayout } from "../layout/RootLayout";
import { Button } from "~/shared/ui/shadcn/button";

export const Route = createRootRoute({
  component: () => (
    <>
      <RootLayout>
        <CatchBoundary
          getResetKey={() => "reset"}
          errorComponent={({ error, reset }) => (
            <>
              <ErrorComponent error={error} />
              <Button onClick={reset}>리셋</Button>
            </>
          )}
        >
          <Outlet />
        </CatchBoundary>
      </RootLayout>
      <TanStackRouterDevtools />
    </>
  ),
});
