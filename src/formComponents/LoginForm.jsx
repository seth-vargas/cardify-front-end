/* Renders a form to gather the username and password from a user. */

import { useState } from "react";
import { useForm } from "react-hook-form";

import CardifyApi from "../api";
import DefaultInput from "./DefaultInput";
import SubmitButton from "./SubmitButton";

import { commonFormClassName } from "../helpers";

export default function LoginForm() {
  const [errorMessage, setErrorMessage] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const { token } = await CardifyApi.login(data);

    if (token) {
      // user is valid - log them in!
      console.log("logging in");
    } else {
      // users information was not valid - let them know!
      setErrorMessage("Invalid credentials!");
    }
  }

  return (
    <div className="my-5">
      <div className="row justify-content-center">
        <h1 className="col-6 text-center my-5">Log in to your account</h1>
      </div>
      <div className="row justify-content-center">
        <form className={commonFormClassName} onSubmit={handleSubmit(onSubmit)}>
          {errorMessage && (
            <div className="alert alert-danger text-center" role="alert">
              {errorMessage}
            </div>
          )}
          <DefaultInput
            placeholder="Username"
            name="username"
            register={register}
            validation={{ required: true }}
            errors={errors}
          />
          <DefaultInput
            placeholder="Password"
            name="password"
            register={register}
            type="password"
            validation={{ required: true }}
            errors={errors}
          />
          <SubmitButton text="Log In" errors={errors} />
        </form>
      </div>
    </div>
  );
}
