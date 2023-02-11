import type { LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { requireUserId } from "~/utils/session.server";

export async function loader({ request }: LoaderArgs) {
  return (await requireUserId(request))
    ? redirect("/home")
    : redirect("/signin");
}
