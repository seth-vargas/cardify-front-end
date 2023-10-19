/* Renders a form to gather the username and password from a user. */

import React from "react";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    const { username, password } = data;

    console.log(username, password);
  }

  return (
    <div className="my-5 d-flex justify-content-center">
      <form
        action="#"
        className="d-flex flex-column"
        style={{ width: "20rem" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        {errors.username && (
          <small className="text-danger">This field is required</small>
        )}
        <div className="mb-3">
          <label htmlFor="username-input" className="form-label">
            Enter your username:
          </label>
          <input
            type="text"
            className="form-control"
            name="username"
            id="username"
            placeholder="Username"
            {...register("username", { required: true })}
          />
        </div>
        {errors.password && (
          <small className="text-danger">This field is required</small>
        )}
        <div className="mb-3">
          <label htmlFor="password-input" className="form-label">
            Enter your password:
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
        </div>
        <button type="submit" className="btn btn-outline-dark">
          Log In
        </button>
      </form>
    </div>
  );
}
