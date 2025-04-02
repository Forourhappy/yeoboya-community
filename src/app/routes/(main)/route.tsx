import { createFileRoute } from "@tanstack/react-router";
import { RootLayout } from "../../layout/RootLayout";

export const Route = createFileRoute("/(main)")({
  component: RootLayout,
});
