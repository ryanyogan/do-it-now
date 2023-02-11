import type { LoaderArgs } from "@remix-run/node";
import { requireUserId } from "~/utils/session.server";

export async function loader({ request }: LoaderArgs) {
  await requireUserId(request);
  return null;
}

function HomePage() {
  return (
    <div className="h-full overflow-y-auto w-full pl-6">
      <div className="h-full items-stretch justify-center min-h-[content]">
        Home!
      </div>
    </div>
  );
}

export default HomePage;
