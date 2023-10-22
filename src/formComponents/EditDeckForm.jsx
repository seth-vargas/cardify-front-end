import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";

import CardifyApi from "../api";
import DefaultInput from "./DefaultInput";
import CheckBoxInput from "./CheckBoxInput";
import SubmitButton from "./SubmitButton";

export default function EditDeckForm() {
  const { username } = useParams();
  const history = useHistory();

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
        name={"title"}
        placeholder="Title"
        register={register}
        errors={errors}
      />
      <CheckBoxInput
        name="isPublic"
        placeholder="Make Public?"
        register={register}
      />
      <SubmitButton text="Save changes" errors={errors} />
    </form>
  );
}
