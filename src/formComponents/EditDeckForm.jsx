/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

import CardifyApi from "../api";
import DefaultInput from "./DefaultInput";
import SubmitButton from "./SubmitButton";
import TextAreaInput from "./TextAreaInput";

export default function EditDeckForm({ deck }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmit(data) {
    try {
      await CardifyApi.editDeck(deck.id, data);
      reset();
      location.reload();
    } catch (error) {
      console.error("There was an error updating your deck...");
      console.error("error:", error);
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
