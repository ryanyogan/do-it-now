import { Form, Link } from "@remix-run/react";
import { Button } from "./button";
import { Card } from "./card";

const registerContent = {
  linkUrl: "/signin",
  linkText: "Already have an account?",
  header: "Create an account",
  subHeader: "Just a few things to get started",
  buttonText: "Register",
};

const signinContent = {
  linkUrl: "/register",
  linkText: "Don't have an account?",
  header: "Welcome Back",
  subHeader: "Enter your credentials to access your account",
  buttonText: "Sign In",
};

export type AuthMode = "SIGN_IN" | "REGISTER";

export function AuthForm({ mode }: { mode: AuthMode }) {
  const content = mode === "REGISTER" ? registerContent : signinContent;

  return (
    <Card>
      <div className="w-full">
        <div className="text-center">
          <h2 className="text-3xl mb-2">{content.header}</h2>
          <p className="tex-lg text-black/25">{content.subHeader}</p>
        </div>
        <Form
          className="py-10 w-full"
          action={mode === "REGISTER" ? "/register" : "/signin"}
          method="post"
        >
          {mode === "REGISTER" && (
            <div className="flex mb-8 justify-between">
              <div className="pr-2">
                <div className="text-lg mb-4 ml-2 text-black/50">
                  First Name
                </div>
                <input type="hidden" name="mode" value={mode ?? "REGISTER"} />
                <input
                  required
                  placeholder="First Name"
                  className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full"
                  name="firstName"
                />
              </div>
              <div className="pl-2">
                <div className="text-lg mb-4 ml-2 text-black/50">Last Name</div>
                <input
                  required
                  placeholder="Last Name"
                  className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full"
                  name="lastName"
                />
              </div>
            </div>
          )}
          <div className="mb-8">
            <div className="text-lg mb-4 ml-2 text-black/50">Email</div>
            <input
              required
              type="email"
              placeholder="Email"
              className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full"
              name="email"
            />
          </div>
          <div className="mb-8">
            <div className="text-lg mb-4 ml-2 text-black/50">Password</div>
            <input
              required
              type="password"
              placeholder="Password"
              className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full"
              name="password"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span>
                <Link to={content.linkUrl} className="text-blue-600 font-bold">
                  {content.linkText}
                </Link>
              </span>
            </div>
            <div>
              {/* @ts-ignore */}
              <Button type="submit" intent="secondary">
                {content.buttonText}
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </Card>
  );
}
