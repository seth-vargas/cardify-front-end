import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import CardifyApi from "../api";
import DefaultInput from "./DefaultInput";
import CheckBoxInput from "./CheckBoxInput";
import SubmitButton from "./SubmitButton";

export default function NewUserForm() {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    data.isAdmin = false;
    try {
      const { user } = await CardifyApi.createUser(data);
      history.push(`/${user.username}`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="my-5">
      <h1 className="text-center">Create your account</h1>
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
