import React from "react";

export default function TextAreaInput({ placeholder, name, register }) {
  return (
    <div className="mb-3 form-floating">
      <textarea
        className="form-control"
        placeholder={placeholder}
        {...register(name)}
      />
      <label htmlFor={name} className="form-label">
        {placeholder}
      </label>
    </div>
  );
}
