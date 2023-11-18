import CardifyApi from "./api";
import useAuth from "./hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { getUsername } from "./helpers";

export default function DeleteUserModal() {
  let username = getUsername();
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  function handleConfirmation() {
    // remove items from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    // remove user from DB
    CardifyApi.deleteUser(username);
    // set auth to nothing
    setAuth("");
    // navigate user to landing page
    navigate("/");
  }

  return (
    <div
      className="modal fade"
      id="deleteUserModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Delete Your Account</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <b>Are you sure you want to delete your account?</b>
            <br />
            <i>You will lose all of your data. Doing this is irreversible.</i>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" data-bs-dismiss="modal">
              No, cancel
            </button>
            <button
              className="btn btn-danger"
              onClick={handleConfirmation}
              data-bs-dismiss="modal"
            >
              Yes, delete my account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
