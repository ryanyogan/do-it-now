import { Outlet } from "@remix-run/react";
import { GlassPane } from "~/components/glass-pane";

export default function AuthRoot() {
  return (
    <GlassPane className="h-full w-full p-4 flex flex-row items-center justify-center">
      <Outlet />
    </GlassPane>
  );
}
