import type { User } from "@prisma/client";
import { Button } from "./button";
import { Card } from "./card";

export function Greetings({ user }: { user: Partial<User> }) {
  return (
    <Card className="w-full !p-6 relative">
      <div className="mb-4">
        <h1 className="text-3xl text-gray-700 font-bold mb-4">
          Hello, {user.firstName}
        </h1>
        <h4 className="text-xl text-gray-400">
          Check your daily tasks and schedule
        </h4>
      </div>
      <div className="flex justify-between">
        <Button size="large">Today&apos;s Schedule</Button>
        <Button intent="secondary">+ Task</Button>
      </div>
    </Card>
  );
}
