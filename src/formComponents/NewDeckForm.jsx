import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import CardifyApi from "../api";

export default function NewDeckForm() {
  const { username } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    data.username = username;
    const { deck } = await CardifyApi.createDeck(data);
    console.log(deck);
  }

  return (
    <div className="my-5">
      <h1>Make a new deck</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Deck title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Title"
            {...register("title")}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="isPublic"
            {...register("isPublic")}
          />
          <label className="form-check-label" htmlFor="isPublic">
            Public
          </label>
        </div>

        <button className="btn btn-primary">Create new deck!</button>
      </form>
    </div>
  );
}
