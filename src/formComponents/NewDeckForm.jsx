/* Library imports */
import React from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";

/* Component imports */
import CardifyApi from "../api";
import DefaultInput from "./DefaultInput";
import TextAreaInput from "./TextAreaInput";
import CheckBoxInput from "./CheckBoxInput";
import SubmitButton from "./SubmitButton";

/* Helper imports */
import { commonFormClassName } from "../helpers";

/**
 * Renders form interface for users to create a new deck.

  Required input: 
  - title 
  - description
 */

export default function NewDeckForm() {
  const { username } = useParams();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    data.username = username;
    data.isPublic = false;
    try {
      const { deck } = await CardifyApi.createDeck(data);
      history.push(`/${username}/decks/${deck.slug}`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="my-5">
      <div className="row justify-content-center">
        <h1 className="col-6 text-center">Create your new deck</h1>
      </div>
      <div className="row justify-content-center">
        <form className={commonFormClassName} onSubmit={handleSubmit(onSubmit)}>
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

          <SubmitButton text="Create deck" errors={errors} />
        </form>
      </div>
    </div>
  );
}
