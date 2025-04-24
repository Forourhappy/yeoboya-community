import { createFileRoute } from "@tanstack/react-router";
import { PostEditPage } from "~/pages/post/PostEditPage";

export const Route = createFileRoute("/(main)/post/edit/")({
  component: PostEditPage,
});
