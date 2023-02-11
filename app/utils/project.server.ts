import { db } from "./db.server";

export async function getProjectsByOwner(ownerId: string) {
  return db.project.findMany({
    where: { ownerId },
    include: {
      tasks: true,
    },
  });
}
