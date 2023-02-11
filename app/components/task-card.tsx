import type { Task } from "@prisma/client";
import { Card } from "./card";

export function TaskList({
  title,
  tasks,
}: {
  title: string;
  tasks: Partial<Task>[];
}) {
  return (
    <Card className="!p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl text-gray-700 font-bold mb-4">{title}</h1>
        </div>
        <div>{/* New Task */}</div>
      </div>
      <div>
        {tasks && tasks.length ? (
          <>
            {tasks.map((task) => (
              <div key={task.id} className="py-2 flex flex-row">
                <div>
                  <div>
                    <span className="text-gray-800">{task.name}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">
                      {task.description}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div>No Tasks</div>
        )}
      </div>
    </Card>
  );
}
