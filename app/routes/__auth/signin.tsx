import type { ActionArgs } from "@remix-run/node";
import { AuthForm } from "~/components/auth-form";
import { createUserSession, login } from "~/utils/session.server";

export async function action({ request }: ActionArgs) {
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");

  if (typeof email !== "string" || typeof password !== "string") {
    return null;
  }

  const user = await login({ email, password });
  if (!user) {
    return null;
  }

  return createUserSession(user?.id, "/home");
}

export default function SignIn() {
  return (
    <>
      <AuthForm mode="SIGN_IN" />
    </>
  );
}
