/* eslint-disable react/prop-types */

export default function CheckBoxInput({ name, placeholder, register }) {
  return (
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" {...register(name)} />
      <label className="form-check-label" htmlFor={name}>
        {placeholder}
      </label>
    </div>
  );
}
