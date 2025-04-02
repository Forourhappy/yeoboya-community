import { createFileRoute } from "@tanstack/react-router";
import { BoardPage } from "~/pages/board/BoardPage";

export const Route = createFileRoute("/(main)/")({
  component: BoardPage,
});
