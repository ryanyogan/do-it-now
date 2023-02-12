import type { LoaderArgs } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { GlassPane } from "~/components/glass-pane";
import { Sidebar } from "~/components/sidebar";
import { requireUserId } from "~/utils/session.server";

export async function loader({ request }: LoaderArgs) {
  await requireUserId(request);
  return null;
}

function HomeRoot() {
  return (
    <GlassPane className="h-full w-full p-6 flex flex-col sm:flex-row items-center justify-center">
      <Sidebar />
      <Outlet />
    </GlassPane>
  );
}

export default HomeRoot;
