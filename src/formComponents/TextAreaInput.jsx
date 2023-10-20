import React from "react";

export default function TextAreaInput({ placeholder, name, register }) {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {placeholder}
      </label>
      <textarea
        className="form-control"
        placeholder={placeholder}
        {...register(name)}
      />
    </div>
  );
}
