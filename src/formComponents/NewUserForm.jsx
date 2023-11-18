/* Library imports */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

/* Component imports */
import CardifyApi from "../api";
import DefaultInput from "./DefaultInput";
import CheckBoxInput from "./CheckBoxInput";
import SubmitButton from "./SubmitButton";
import useAuth from "../hooks/useAuth";

/* Helper imports */
import { commonFormClassName } from "../helpers";

/** 
  Renders form interface for users to create a new account.
  
  Required input:
  - username
  - password
  - firstName
  - lastName
  - email
  - isPublic.
 */

export default function NewUserForm() {
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
      const { token, user } = await CardifyApi.signup(data);

      // set items in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Set auth in Context API
      setAuth({ token, user, isAdmin: user.isAdmin });

      // redirect to dashboard
      reset();
      navigate(`/${user.username}`);
    } catch (error) {
      console.error(error);
      const { message } = error?.response?.data?.error;
      console.error(message);
      setErrorMessage(message);
    }
  }

  return (
    <div className="my-5">
      <div className="row justify-content-center">
        <h1 className="col-6 text-center my-5">Create your account</h1>
      </div>
      <div className="row justify-content-center">
        <form className={commonFormClassName} onSubmit={handleSubmit(onSubmit)}>
          {errorMessage && (
            <div className="alert alert-danger text-center" role="alert">
              <i className="fa-solid fa-triangle-exclamation me-2"></i>
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
            type="password"
            register={register}
            validation={{ required: true }}
            errors={errors}
          />
          <CheckBoxInput
            name="isPublic"
            placeholder="Make account public"
            register={register}
          />

          <SubmitButton text="Sign Up!" errors={errors} />

          <div className="row my-2">
            <small className="text-center">
              Already a user?
              <br />
              <Link to="/login" className="text-decoration-none">
                Log in here.
              </Link>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
}
