import React from "react";

export default function EditUserForm() {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      const { user } = await CardifyApi.editUser(data);
      history.push(`/${user.username}`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="my-5">
      <h1 className="text-center">Edit your account info</h1>
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-50 m-5 p-5"></form>
      </div>
    </div>
  );
}
