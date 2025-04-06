import { createFileRoute } from "@tanstack/react-router";
import { BoardEditPage } from "~/pages/board/BoardEditPage";

export const Route = createFileRoute("/(main)/board/edit/")({
  component: BoardEditPage,
});
