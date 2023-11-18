/* eslint-disable react/prop-types */
/* Library imports */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

/* Component imports */
import CardifyApi from "../api";
import DefaultInput from "./DefaultInput";
import TextAreaInput from "./TextAreaInput";
import SubmitButton from "./SubmitButton";

/**
 * Renders form interface for users to create a new deck.

  Required input: 
  - title 
  - description
 */

export default function NewDeckForm({ username }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmit(data) {
    data.username = username;
    data.isPublic = false;
    try {
      const { deck } = await CardifyApi.createDeck(data);
      reset();
      navigate(`/${username}/decks/${deck.slug}`);
      location.reload();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DefaultInput
        placeholder="Title"
        name="title"
        register={register}
        validation={{ required: true }}
        errors={errors}
      />

      <TextAreaInput
        name="description"
        placeholder="Description"
        register={register}
        validation={{ required: true }}
        errors={errors}
      />

      <SubmitButton text="Create deck" errors={errors} bsDismiss="modal" />
    </form>
  );
}
