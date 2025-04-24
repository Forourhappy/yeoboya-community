import { createFileRoute } from "@tanstack/react-router";
import { PostPage } from "~/pages/post/PostPage";

export const Route = createFileRoute("/(main)/")({
  component: PostPage,
});
