import React from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";

import CardifyApi from "../api";
import DefaultInput from "./DefaultInput";
import TextAreaInput from "./TextAreaInput";
import CheckBoxInput from "./CheckBoxInput";

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
    try {
      const { deck } = await CardifyApi.createDeck(data);
      history.push(`/${username}/decks/${deck.slug}`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="my-5">
      <h1 className="text-center">Create your new deck</h1>
      <div className="d-flex justify-content-center">
        <form className="w-50 m-5 p-5" onSubmit={handleSubmit(onSubmit)}>
          <DefaultInput placeholder="Title" name="title" register={register} />
          <TextAreaInput
            name="description"
            placeholder="Description"
            register={register}
          />
          <CheckBoxInput
            name="isPublic"
            placeholder="Make Public"
            register={register}
          />
          <button className="btn btn-dark w-100 mt-2">Sign up!</button>
        </form>
      </div>
    </div>
  );
}
