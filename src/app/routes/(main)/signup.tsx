import { createFileRoute } from "@tanstack/react-router";
import { SignupPage } from "~/pages/auth/signup/SingupPage";

export const Route = createFileRoute("/(main)/signup")({
  component: SignupPage,
});
