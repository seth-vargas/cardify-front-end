/* Renders a form to gather the username and password from a user. */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";

import CardifyApi from "../api";
import useAuth from "../hooks/useAuth";
import DefaultInput from "./DefaultInput";
import SubmitButton from "./SubmitButton";

import { commonFormClassName } from "../helpers";

export default function LoginForm() {
  const [errorMessage, setErrorMessage] = useState();

  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      const { token, user } = await CardifyApi.login(data);

      console.log("Setting token in localStorage...");
      localStorage.setItem("token", token);
      console.log("Token has been set in localStorage!");

      console.log("Setting user in localStorage...");
      localStorage.setItem("user", JSON.stringify(user));
      console.log("User has been set in localStorage!");

      console.log("Logging localStorage: ", localStorage);

      setAuth({ token, user, isAdmin: user.isAdmin });
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
        </form>
      </div>
    </div>
  );
}
