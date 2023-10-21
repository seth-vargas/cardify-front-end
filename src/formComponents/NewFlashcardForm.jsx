import React from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";

import CardifyApi from "../api";
import DefaultInput from "./DefaultInput";
import TextAreaInput from "./TextAreaInput";
import SubmitButton from "./SubmitButton";

export default function NewFlashcardForm() {
  const { username, deckSlug } = useParams();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      data.username = username;
      data.slug = deckSlug;
      const { card } = await CardifyApi.createFlashcard(data);
      history.push(`/${username}/decks/${deckSlug}`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="my-5">
      <h1 className="text-center">Create your new flashcard</h1>
      <div className="d-flex justify-content-center">
        <form className="w-50 m-5 p-5" onSubmit={handleSubmit(onSubmit)}>
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
          <SubmitButton text="Create new card" errors={errors} />
        </form>
      </div>
    </div>
  );
}
