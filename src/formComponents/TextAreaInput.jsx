import React from "react";

export default function TextAreaInput({
  placeholder,
  name,
  register,
  validation = { required: false },
}) {
  return (
    <div className="mb-3 form-floating">
      <textarea
        className="form-control"
        placeholder={placeholder}
        {...register(`${name}`, validation)}
      />
      <label htmlFor={name} className="form-label">
        {placeholder}
      </label>
    </div>
  );
}
