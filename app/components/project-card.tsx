import type { Project, Task } from "@prisma/client";
import { TASK_STATUS } from "@prisma/client";
import clsx from "clsx";
import { Card } from "./card";

export function ProjectCard({
  project,
}: {
  project: Project & { tasks: Task[] };
}) {
  const completedTasksCount = project.tasks.filter(
    (t) => t.status === TASK_STATUS.COMPLETED
  ).length;
  console.log(completedTasksCount);
  const progress = Math.ceil(
    (completedTasksCount / project.tasks.length || 0) * 100
  );
  console.log(progress);

  return (
    <Card className="!px-6 !py-8 hover:scale-105 transition-all ease-in-out duration-200">
      <div>
        <span className="text-sm text-gray-400">
          {formatDate(project.createdAt)}
        </span>
      </div>
      <div className="mb-6">
        <span className="text-3xl text-gray-600">{project.name}</span>
      </div>
      <div className="mb-2">
        <span className="text-gray-400">
          {completedTasksCount}/{project.tasks.length} completed
        </span>
      </div>
      <div>
        <div className="w-full h-2 bg-violet-200 rounded-full mb-2">
          <div
            className={clsx(
              "h-full text-center text-xs text-white bg-violet-600 rounded-full"
            )}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="text-right">
          <span className="text-sm text-gray-600 font-semibold">
            {progress} %
          </span>
        </div>
      </div>
    </Card>
  );
}

function formatDate(date: Date) {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
