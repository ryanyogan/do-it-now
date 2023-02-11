import type { ActionArgs } from "@remix-run/node";
import { AuthForm } from "~/components/auth-form";
import { db } from "~/utils/db.server";
import { createUserSession, register } from "~/utils/session.server";

export async function action({ request }: ActionArgs) {
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");
  const firstName = form.get("firstName");
  const lastName = form.get("lastName");

  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    typeof firstName !== "string" ||
    typeof lastName !== "string"
  ) {
    return null;
  }

  const userExists = await db.user.findFirst({
    where: { email },
  });
  if (userExists) {
    return null;
  }

  const user = await register({ email, password, firstName, lastName });

  return createUserSession(user?.id, "/home");
}

function Register() {
  return (
    <>
      <AuthForm mode="REGISTER" />
    </>
  );
}

export default Register;
