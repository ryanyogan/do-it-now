import { Link } from "@remix-run/react";
import { Calendar, Grid, Settings, User } from "react-feather";
import { Card } from "./card";

export function Sidebar() {
  return (
    <Card className="sm:h-50 w-full flex items-center flex-row justify-around flex-wrap mt-6">
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
