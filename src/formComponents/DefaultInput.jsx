import React from "react";
import { useForm } from "react-hook-form";

/** Basic input element. */

export default function DefaultInput({
  placeholder = "Input",
  name,
  type = "text",
  register,
  validation = { required: false },
  errors,
}) {
  const isRequired = errors[name];
  const value = isRequired ? (
    <p className="text-danger">{placeholder} is required</p>
  ) : (
    <p>{placeholder}</p>
  );
  return (
    <div className="form-floating mb-3">
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        {...register(`${name}`, validation)}
        autoComplete={name}
      />
      <label htmlFor={name} className="form-label">
        {value}
      </label>
    </div>
  );
}
