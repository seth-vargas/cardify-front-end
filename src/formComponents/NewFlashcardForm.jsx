import React from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";

import CardifyApi from "../api";
import DefaultInput from "./DefaultInput";
import TextAreaInput from "./TextAreaInput";

export default function NewFlashcardForm() {
  const { username, slug } = useParams();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    console.log(data);
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
          />
          <TextAreaInput placeholder="Answer" name="back" register={register} />
          <button className="btn btn-dark w-100 mt-2">Add card!</button>
        </form>
      </div>
    </div>
  );
}
