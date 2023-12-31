/* Renders a form to gather the username and password from a user. */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import CardifyApi from "../api";
import useAuth from "../hooks/useAuth";
import DefaultInput from "./DefaultInput";
import SubmitButton from "./SubmitButton";

import { commonFormClassName } from "../helpers";

export default function LoginForm() {
  const [errorMessage, setErrorMessage] = useState();

  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmit(data) {
    try {
      // get token and user data from back-end API
      const { token, user } = await CardifyApi.login(data);

      // set items in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Set auth in Context API
      setAuth({ token, user, isAdmin: user.isAdmin });

      // redirect to dashboard
      reset();
      navigate(`/${user.username}`);
    } catch (error) {
      if (!error?.response) {
        setErrorMessage("No server response");
      } else if (error.response?.status === 400) {
        setErrorMessage("Invalid credentials!");
      } else if (error.response?.status === 401) {
        setErrorMessage("Incorrect username or password");
      } else {
        setErrorMessage("Login failed");
      }
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
          <div className="row my-2">
            <small className="text-center">
              Need to make an account?
              <br />
              <Link to="/signup" className="text-decoration-none">
                Sign up here.
              </Link>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
}
