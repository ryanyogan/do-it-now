import { Outlet } from "@remix-run/react";
import { GlassPane } from "~/components/glass-pane";
import { Sidebar } from "~/components/sidebar";

function HomeRoot() {
  return (
    <GlassPane className="h-full w-full p-4 flex flex-row items-center justify-center">
      <Sidebar />
      <Outlet />
    </GlassPane>
  );
}

export default HomeRoot;
