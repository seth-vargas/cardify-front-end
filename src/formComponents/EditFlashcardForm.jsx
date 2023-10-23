import React from "react";
import { useParams } from "react-router-dom";

export default function EditFlashcardForm() {
  const navigate = useNavigate();
  const { username, deckSlug } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      const { flashcard } = await CardifyApi.editFlashcard(data);
      navigate.push(`/${username}/decks/${deckSlug}`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="my-5">
      <h1 className="text-center">Edit your deck</h1>
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-50 m-5 p-5"></form>
      </div>
    </div>
  );
}
