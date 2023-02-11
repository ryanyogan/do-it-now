import { Link } from "@remix-run/react";
import { Calendar, Grid, Settings, User } from "react-feather";
import { Card } from "./card";

export function Sidebar() {
  return (
    <Card className="h-full w-40 flex items-center flex-col justify-around flex-wrap">
      <Link to="/">
        <Grid
          size={40}
          className="stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out"
        />
      </Link>
      <Link to="/">
        <Calendar
          size={40}
          className="stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out"
        />
      </Link>
      <Link to="/">
        <User
          size={40}
          className="stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out"
        />
      </Link>
      <Link to="/">
        <Settings
          size={40}
          className="stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out"
        />
      </Link>
    </Card>
  );
}
