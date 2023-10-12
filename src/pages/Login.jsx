import { Form, Link } from "react-router-dom";
import { FormInput, SubmitButton } from "../components";

function Login() {
  return (
    <section className="h-screen grid place-content-center bg-base-200">
      <Form className="card w-96 p-8 bg-base-100 shadow-xl flex flex-col gap-y-4 align-element">
        <h4 className="card-title text-center text-3xl font-bold self-center">
          Login
        </h4>

        <FormInput
          type="email"
          label="Email"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput
          type="password"
          label="Password"
          name="identifier"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitButton text="Login" type="submit" />
        </div>

        <div className="mt-4">
          <button className="btn btn-secondary btn-block">Guest User</button>
        </div>

        <span className="text-center">
          Not a member yet?{" "}
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            Register
          </Link>
        </span>
      </Form>
    </section>
  );
}

export default Login;
