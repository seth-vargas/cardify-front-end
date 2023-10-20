import React from "react";
import DefaultInput from "./DefaultInput";

export default function GroupInput({
  type = "text",
  placeholders,
  names,
  register,
}) {
  return (
    <div className="row">
      {placeholders.map((placeholder, i) => (
        <div className="col" key={placeholder}>
          <DefaultInput
            type={type}
            placeholder={placeholder}
            name={names[i]}
            register={register}
          />
        </div>
      ))}
    </div>
  );
}
