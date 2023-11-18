/* eslint-disable react/prop-types */
export default function SubmitButton({ text, errors, bsDismiss = "" }) {
  function hasErrors(obj) {
    for (const key in obj) {
      if (obj[key].type === "required") {
        return true;
      }
    }
    return false;
  }
  if (hasErrors(errors))
    return (
      <button className="btn btn-danger w-100 mt-2" disabled>
        Please fill in form completely.
      </button>
    );
  return (
    <button className="btn btn-dark w-100 mt-2" data-bs-dismiss={bsDismiss}>
      {text}
    </button>
  );
}
