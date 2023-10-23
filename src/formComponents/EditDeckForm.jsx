import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import CardifyApi from "../api";
import DefaultInput from "./DefaultInput";
import CheckBoxInput from "./CheckBoxInput";
import SubmitButton from "./SubmitButton";
import TextAreaInput from "./TextAreaInput";

export default function EditDeckForm() {
  const { username } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      await CardifyApi.editDeck(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DefaultInput
        name="title"
        placeholder="Title"
        register={register}
        errors={errors}
      />
      <TextAreaInput
        name="description"
        placeholder="Description"
        register={register}
        errors={errors}
      />
      <SubmitButton text="Save changes" errors={errors} bsDismiss="modal" />
    </form>
  );
}
