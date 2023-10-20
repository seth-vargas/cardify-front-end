import React from "react";
import { useForm } from "react-hook-form";

import CardifyApi from "../api";
import DefaultInput from "./DefaultInput";
import GroupInput from "./GroupInput";

export default function NewUserForm() {
  const { register, handleSubmit, watch } = useForm();

  async function onSubmit(data) {
    console.log(data);
    try {
      setIsLoading(true);
      const result = await CardifyApi.createUser(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  console.log(watch());

  return (
    <div className="my-5">
      <h1 className="text-center">Create your account</h1>
      <div className="d-flex justify-content-center">
        <form className="w-50 m-5 p-5" onSubmit={handleSubmit(onSubmit)}>
          <DefaultInput
            placeholder="Username"
            name="username"
            register={register}
          />
          <DefaultInput
            placeholder="Password"
            name="password"
            type="password"
            register={register}
          />
          <GroupInput
            placeholders={["First Name", "Last Name"]}
            names={["firstName", "lastName"]}
            register={register}
          />
          <DefaultInput
            placeholder="Email"
            name="email"
            type="email"
            register={register}
          />
          <button className="btn btn-dark w-100 mt-2">Sign up!</button>
        </form>
      </div>
    </div>
  );
}
