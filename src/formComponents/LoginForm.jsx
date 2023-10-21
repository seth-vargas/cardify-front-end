/* Renders a form to gather the username and password from a user. */

import React from "react";
import { useForm } from "react-hook-form";

import CardifyApi from "../api";
import DefaultInput from "./DefaultInput";
import SubmitButton from "./SubmitButton";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const { username, password } = data;

    console.log(username, password);
  }

  return (
    <div className="my-5">
      <h1 className="text-center">Log in to your account</h1>
      <div className="d-flex justify-content-center">
        <form className="w-50 m-5 p-5" onSubmit={handleSubmit(onSubmit)}>
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
