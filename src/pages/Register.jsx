import { Form, Link } from "react-router-dom";
import { FormInput, SubmitButton } from "../components";

function Register() {
  return (
    <section className="h-screen grid place-content-center bg-base-200">
    <Form className="card w-96 p-8 bg-base-100 shadow-xl flex flex-col gap-y-4 align-element">
      <h4 className="card-title text-center text-3xl font-bold self-center">
        Register
      </h4>

      <FormInput
        type="text"
        label="Username"
        name="identifier"
        defaultValue="test"
      />

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
        <SubmitButton text="Register" type="submit" />
      </div>

     

      <span className="text-center">
        Already a member? {" "}
        <Link
          to="/register"
          className="ml-2 link link-hover link-primary capitalize"
        >
          Login
        </Link>
      </span>
    </Form>
  </section>
  )
}

export default Register