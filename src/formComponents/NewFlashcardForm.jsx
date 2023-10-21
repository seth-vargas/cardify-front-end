import React from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";

import CardifyApi from "../api";
import DefaultInput from "./DefaultInput";
import TextAreaInput from "./TextAreaInput";

export default function NewFlashcardForm() {
  const { username, deckSlug } = useParams();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    data.username = username;
    data.slug = deckSlug;
    const { card } = await CardifyApi.createFlashcard(data);
    history.push(`/${username}/decks/${deckSlug}`);
  }

  return (
    <div className="my-5">
      <h1 className="text-center">Create your new flashcard</h1>
      <div className="d-flex justify-content-center">
        <form className="w-50 m-5 p-5" onSubmit={handleSubmit(onSubmit)}>
          <DefaultInput
            placeholder={
              errors.front ? (
                <p className="text-danger">Question is required</p>
              ) : (
                "Question"
              )
            }
            name="front"
            register={register}
            validation={{ required: true }}
          />
          <TextAreaInput
            placeholder={
              errors.back ? (
                <p className="text-danger">Answer is required</p>
              ) : (
                "Answer"
              )
            }
            name="back"
            register={register}
            validation={{ required: true }}
          />
          {errors.front || errors.back ? (
            <button className="btn btn-danger w-100 mt-2" disabled>
              Add card!
            </button>
          ) : (
            <button className="btn btn-dark w-100 mt-2">Add card!</button>
          )}
        </form>
      </div>
    </div>
  );
}
