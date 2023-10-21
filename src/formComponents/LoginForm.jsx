/* Renders a form to gather the username and password from a user. */

import React from "react";
import { useForm } from "react-hook-form";

import CardifyApi from "../api";
import DefaultInput from "./DefaultInput";

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
            placeholder={
              errors.username ? (
                <p className="text-danger">Username is required</p>
              ) : (
                "Username"
              )
            }
            name="username"
            register={register}
            validation={{ required: true }}
          />
          <DefaultInput
            placeholder={
              errors.password ? (
                <p className="text-danger">Password is required</p>
              ) : (
                "Password"
              )
            }
            name="password"
            register={register}
            type="password"
            validation={{ required: true }}
          />

          {errors.username || errors.password ? (
            <button
              type="submit"
              className="btn btn-danger w-100 mt-2"
              disabled
            >
              Log In
            </button>
          ) : (
            <button type="submit" className="btn btn-dark w-100 mt-2">
              Log In
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
