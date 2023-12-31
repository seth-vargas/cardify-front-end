/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";

import CardifyApi from "../api";
import DefaultInput from "./DefaultInput";
import TextAreaInput from "./TextAreaInput";
import SubmitButton from "./SubmitButton";

export default function NewFlashcardForm({ existingCards, setCards }) {
  const { username, deckSlug } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmit(data) {
    try {
      data.username = username;
      data.slug = deckSlug;
      const { card } = await CardifyApi.createFlashcard(data);
      setCards([...existingCards, card]);
      reset();
      navigate(`/${username}/decks/${deckSlug}`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DefaultInput
        placeholder="Question"
        name="front"
        register={register}
        validation={{ required: true }}
        errors={errors}
      />
      <TextAreaInput
        placeholder="Answer"
        name="back"
        register={register}
        validation={{ required: true }}
        errors={errors}
      />
      <SubmitButton text="Create new card" errors={errors} bsDismiss="modal" />
    </form>
  );
}
