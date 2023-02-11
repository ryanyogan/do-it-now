import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Greetings } from "~/components/greetings";
import { getProjectsByOwner } from "~/utils/project.server";
import { getUser } from "~/utils/session.server";

export async function loader({ request }: LoaderArgs) {
  //TODO: Conver this into a logical query
  // look up the user and get their projects.
  // const userId = await getUserId(request);
  const user = await getUser(request);
  if (!user) {
    throw new Error("How did you even get here?");
  }

  const projects = await getProjectsByOwner(user.id);

  return { projects, user };
}

function HomePage() {
  const { projects, user } = useLoaderData<typeof loader>();

  return (
    <div className="h-full overflow-y-auto w-full pl-6">
      <div className="h-full items-stretch justify-center min-h-[content]">
        <div className="flex-1 grow flex">
          <Greetings user={user} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
