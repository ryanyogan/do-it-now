import type { Project, Task } from "@prisma/client";
import type { LoaderArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { Greetings } from "~/components/greetings";
import { ProjectCard } from "~/components/project-card";
import { TaskList } from "~/components/task-card";
import { getProjectsByOwner } from "~/utils/project.server";
import { getUser } from "~/utils/session.server";
import { getRecentTasksByOwner } from "~/utils/task.server";

export async function loader({ request }: LoaderArgs) {
  //TODO: Conver this into a logical query
  // look up the user and get their projects.
  // const userId = await getUserId(request);
  const user = await getUser(request);
  if (!user) {
    throw new Error("How did you even get here?");
  }

  //TODO: This should all be one easy query in Prisma :)
  const [projects, tasks] = await Promise.all([
    getProjectsByOwner(user.id),
    getRecentTasksByOwner(user.id),
  ]);

  return { projects, user, tasks };
}

function HomePage() {
  const { projects, user, tasks } = useLoaderData();

  return (
    <div className="h-full overflow-y-auto w-full sm:pl-6 mt-6 sm:mt-0">
      <div className="h-full items-stretch justify-center min-h-[content]">
        <div className="flex-1 grow flex">
          <Greetings user={user} />
        </div>
        <div className="flex grow items-center flex-wrap mt-3 -m-3">
          {projects.map((project: Project & { tasks: Task[] }) => (
            <div key={project.id} className="p-3">
              <Link to={`/project/${project.id}`}>
                <ProjectCard project={project} />
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-6 flex-2 grow w-full flex">
          <div className="w-full">
            <TaskList title="Tasks" tasks={tasks} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
