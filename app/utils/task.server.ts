import type { User } from "@prisma/client";
import { TASK_STATUS } from "@prisma/client";
import { db } from "./db.server";

export async function getRecentTasksByOwner(ownerId: User["id"]) {
  return db.task.findMany({
    where: {
      ownerId,
      NOT: {
        status: TASK_STATUS.COMPLETED,
        deleted: false,
      },
    },
    take: 5,
    orderBy: {
      createdAt: "asc",
    },
  });
}
