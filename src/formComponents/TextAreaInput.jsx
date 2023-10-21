import React from "react";

export default function TextAreaInput({
  placeholder,
  name,
  register,
  validation = { required: false },
  errors,
}) {
  const value = errors[name] ? (
    <p className="text-danger">{placeholder} is required</p>
  ) : (
    <p>{placeholder}</p>
  );
  return (
    <div className="mb-3 form-floating">
      <textarea
        className="form-control"
        placeholder={placeholder}
        {...register(`${name}`, validation)}
      />
      <label htmlFor={name} className="form-label">
        {value}
      </label>
    </div>
  );
}
