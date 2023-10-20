import React from "react";
import { useForm } from "react-hook-form";

export default function DefaultInput({
  placeholder,
  name,
  type = "text",
  register,
}) {
  return (
    <div className="form-floating mb-3">
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        {...register(`${name}`)}
      />
      <label htmlFor={name} className="form-label">
        {placeholder}
      </label>
    </div>
  );
}
