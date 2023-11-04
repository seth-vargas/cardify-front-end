import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import DefaultInput from "./DefaultInput";
import SubmitButton from "./SubmitButton";
import CardifyApi from "../api";

export default function EditUserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      await CardifyApi.updateUser(data);
      location.reload();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DefaultInput
        name="firstName"
        placeholder="First Name"
        register={register}
        errors={errors}
      />
      <DefaultInput
        name="lastName"
        placeholder="Last Name"
        register={register}
        errors={errors}
      />
      <DefaultInput
        name="email"
        placeholder="Email"
        register={register}
        errors={errors}
        type="email"
      />
      <button className="btn btn-outline-dark w-100">Save changes</button>
    </form>
  );
}
