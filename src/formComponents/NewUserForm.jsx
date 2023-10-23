/* Library imports */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

/* Component imports */
import CardifyApi from "../api";
import DefaultInput from "./DefaultInput";
import CheckBoxInput from "./CheckBoxInput";
import SubmitButton from "./SubmitButton";

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
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      const { user } = await CardifyApi.createUser(data);
      navigate.push(`/${user.username}`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="my-5">
      <div className="row justify-content-center">
        <h1 className="col-6 text-center my-5">Create your account</h1>
      </div>
      <div className="row justify-content-center">
        <form className={commonFormClassName} onSubmit={handleSubmit(onSubmit)}>
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
          <DefaultInput
            placeholder="First Name"
            name="firstName"
            register={register}
            validation={{ required: true }}
            errors={errors}
          />
          <DefaultInput
            placeholder="Last Name"
            name="lastName"
            register={register}
            validation={{ required: true }}
            errors={errors}
          />

          <DefaultInput
            placeholder="Email"
            name="email"
            type="email"
            register={register}
            validation={{ required: true }}
            errors={errors}
          />
          <CheckBoxInput
            name="isPublic"
            placeholder="Make Public"
            register={register}
          />

          <SubmitButton text="Sign Up!" errors={errors} />
        </form>
      </div>
    </div>
  );
}
