import { useForm } from "react-hook-form";
import DefaultInput from "./DefaultInput";
import CardifyApi from "../api";
import { getUsername } from "../helpers";

export default function EditUserForm() {
  let username = getUsername();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmit(data) {
    try {
      await CardifyApi.updateUser(username, data);
      reset();
      location.reload();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DefaultInput
        name="firstName"
        placeholder="First Name"
        register={register}
        errors={errors}
      />
      <DefaultInput
        name="lastName"
        placeholder="Last Name"
        register={register}
        errors={errors}
      />
      <DefaultInput
        name="email"
        placeholder="Email"
        register={register}
        errors={errors}
        type="email"
      />
      <button className="btn btn-outline-dark w-100">Save changes</button>
    </form>
  );
}
