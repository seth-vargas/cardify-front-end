import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CardifyApi from "../api";

export default function UserActionsBar({ deck }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { username, deckSlug } = useParams();

  async function favorite() {
    try {
      await CardifyApi.favorite();
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error(error);
    }
  }

  async function unfavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <div className="d-flex align-items-center justify-content-end">
      <div className="row g-1 align-items-center">
        <div className="col">
          {isFavorite ? (
            <button className="btn btn-outline-light" onClick={unfavorite}>
              <i className="fa-solid fa-heart" style={{ color: "#ff0000" }}></i>
            </button>
          ) : (
            <button className="btn btn-outline-light" onClick={favorite}>
              <i className="fa-regular fa-heart" style={{ color: "#000" }}></i>
            </button>
          )}
        </div>
        <div className="col">
          <a
            data-bs-toggle="modal"
            data-bs-target="#editDeckModal"
            className="btn btn-outline-dark"
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </a>
        </div>
        <div className="col">
          <a
            className="btn btn-outline-danger"
            data-bs-toggle="modal"
            data-bs-target="#confirmDeleteModal"
          >
            <i className="fa-regular fa-trash-can"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
